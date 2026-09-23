import { getCollection, render, type CollectionEntry } from 'astro:content';
import { appMedia } from './media';
import type { Locale } from '../site';

export type AppEntry = CollectionEntry<'apps'>;

export async function getApps(locale: Locale) {
  const apps = await getCollection('apps', ({ data }) => data.locale === locale);
  return apps.sort((a, b) => a.data.order - b.data.order);
}

export async function getApp(locale: Locale, appId: string) {
  const apps = await getApps(locale);
  return apps.find((app) => app.data.appId === appId);
}

export function mediaFor(appId: string) {
  const media = appMedia[appId];
  if (!media) throw new Error(`Missing images for ${appId}`);
  return media;
}

export { render };
