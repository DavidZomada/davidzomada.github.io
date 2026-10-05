import type { Locale } from '../site';

export interface PublicPost {
  title: string;
  href: string;
  date: string;
  excerpt: string;
}

const feedUrl = 'https://davidzomada.substack.com/feed';

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

function parseFeed(xml: string, locale: Locale): PublicPost[] {
  const format = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  return xml
    .split(/<item\b/i)
    .slice(1)
    .map((chunk) => chunk.split(/<\/item>/i)[0] ?? '')
    .map((block) => {
      const title = textOf(block, 'title');
      const href = textOf(block, 'link');
      const excerpt = textOf(block, 'description');
      const published = textOf(block, 'pubDate');
      const when = new Date(published);
      if (!title || !href.startsWith('https://')) return null;
      return {
        title,
        href,
        excerpt: excerpt === title ? '' : excerpt,
        date: Number.isNaN(when.getTime()) ? '' : format.format(when),
      };
    })
    .filter((post): post is PublicPost => post !== null)
    .slice(0, 4);
}

export async function getSubstackPosts(locale: Locale): Promise<PublicPost[]> {
  try {
    const response = await fetch(feedUrl, {
      headers: { 'user-agent': 'davidzomada.com' },
    });
    if (!response.ok) return [];
    return parseFeed(await response.text(), locale);
  } catch {
    return [];
  }
}
