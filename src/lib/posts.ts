import type { Locale } from '../site';

export interface PublicPost {
  title: string;
  href: string;
  date: string;
  excerpt: string;
}

interface RawPost {
  title: string;
  href: string;
  excerpt: string;
  published: string;
}

export const substackFeedUrl = 'https://davidzomada.substack.com/feed';

const archiveUrl = 'https://davidzomada.substack.com/api/v1/archive?sort=new&limit=4';
const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(substackFeedUrl)}`;
const essayLimit = 4;

const headers = {
  accept: 'application/rss+xml, application/xml, application/json, text/xml, */*',
  'user-agent': 'Mozilla/5.0 (compatible; davidzomada.com/1.0; +https://davidzomada.com)',
};

let rawPosts: Promise<RawPost[]> | undefined;

function textOf(block: string, tag: string) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  if (!match) return '';
  return decode(match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')).replace(/<[^>]+>/g, '').trim();
}

function decode(value: string) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8216;|&#8217;|&apos;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/\s+/g, ' ')
    .trim();
}

function excerptOf(value: string, title: string) {
  const text = decode(value).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (!text || text === title) return '';
  if (text.length <= 180) return text;
  return `${text.slice(0, 177).trimEnd()}…`;
}

function publishedAt(value: string) {
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(trimmed)) {
    return new Date(`${trimmed.replace(' ', 'T')}Z`);
  }
  return new Date(trimmed);
}

function toPublic(post: RawPost, locale: Locale): PublicPost {
  const format = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  const when = publishedAt(post.published);
  return {
    title: post.title,
    href: post.href,
    excerpt: post.excerpt,
    date: Number.isNaN(when.getTime()) ? '' : format.format(when),
  };
}

function takePosts(posts: RawPost[]) {
  const seen = new Set<string>();
  return posts
    .filter((post) => {
      if (!post.title || !post.href.startsWith('https://') || seen.has(post.href)) return false;
      seen.add(post.href);
      return true;
    })
    .slice(0, essayLimit);
}

function fromArchive(data: unknown): RawPost[] {
  if (!Array.isArray(data)) return [];
  return takePosts(
    data.flatMap((item) => {
      if (!item || typeof item !== 'object') return [];
      const post = item as {
        title?: string;
        subtitle?: string;
        description?: string;
        canonical_url?: string;
        post_date?: string;
        restacked_post_id?: number | null;
      };
      if (post.restacked_post_id) return [];
      const title = (post.title ?? '').trim();
      const href = post.canonical_url ?? '';
      return [
        {
          title,
          href,
          excerpt: excerptOf(post.subtitle || post.description || '', title),
          published: post.post_date ?? '',
        },
      ];
    }),
  );
}

function parseFeed(xml: string): RawPost[] {
  return takePosts(
    xml
      .split(/<item\b/i)
      .slice(1)
      .map((chunk) => chunk.split(/<\/item>/i)[0] ?? '')
      .map((block) => {
        const title = textOf(block, 'title');
        return {
          title,
          href: textOf(block, 'link'),
          excerpt: excerptOf(textOf(block, 'description'), title),
          published: textOf(block, 'pubDate'),
        };
      }),
  );
}

function fromProxy(data: unknown): RawPost[] {
  if (!data || typeof data !== 'object') return [];
  const body = data as { status?: string; items?: unknown };
  if (body.status !== 'ok' || !Array.isArray(body.items)) return [];
  return takePosts(
    body.items.flatMap((item) => {
      if (!item || typeof item !== 'object') return [];
      const post = item as { title?: string; link?: string; description?: string; pubDate?: string };
      const title = (post.title ?? '').trim();
      return [
        {
          title,
          href: post.link ?? '',
          excerpt: excerptOf(post.description ?? '', title),
          published: post.pubDate ?? '',
        },
      ];
    }),
  );
}

async function read(url: string) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(12000) });
  if (!response.ok) throw new Error(`${response.status} from ${url}`);
  return response;
}

async function loadRawPosts(): Promise<RawPost[]> {
  const sources: Array<[string, () => Promise<RawPost[]>]> = [
    ['archive', async () => fromArchive(await (await read(archiveUrl)).json())],
    ['feed', async () => parseFeed(await (await read(substackFeedUrl)).text())],
    ['proxy', async () => fromProxy(await (await read(proxyUrl)).json())],
  ];

  for (const [name, load] of sources) {
    try {
      const posts = await load();
      if (posts.length > 0) return posts;
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'unavailable';
      console.warn(`Substack ${name}: ${reason}`);
    }
  }

  return [];
}

export function getSubstackPosts(locale: Locale): Promise<PublicPost[]> {
  rawPosts ??= loadRawPosts();
  return rawPosts.then((posts) => posts.map((post) => toPublic(post, locale)));
}
