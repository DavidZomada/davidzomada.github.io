export const site = {
  name: 'David Zomada',
  email: 'david.zomada@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-zomada',
  github: 'https://github.com/davidzomada',
} as const;

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'es';
}
