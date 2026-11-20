import type { ImageMetadata } from 'astro';
import type { Locale } from '../site';
import logo from '../../Photos/Somada/Logo/Icon 2.jpg';

export type Device = 'iphone' | 'ipad';

export type Shot = {
  src: ImageMetadata;
  alt: string;
};

type Screen = {
  key: string;
  alt: Record<Locale, string>;
};

// Store screenshots, one file per device and locale: Photos/Somada/screens/<device>/<locale>-<key>.jpg
const screens: Screen[] = [
  {
    key: 'intro',
    alt: {
      en: 'Somada, your travel journal on a map: a globe full of pins',
      es: 'Somada, tu diario de viajes en el mapa: un globo lleno de pines',
    },
  },
  {
    key: 'write',
    alt: {
      en: 'Write your stories: a journal page with photos pinned to the map',
      es: 'Escribe tus historias: una página del diario con fotos en el mapa',
    },
  },
  {
    key: 'track',
    alt: {
      en: 'Track your steps: a route drawn stop by stop with its vehicle and color',
      es: 'Traza tus pasos: una ruta dibujada parada a parada con su vehículo y color',
    },
  },
  {
    key: 'share',
    alt: {
      en: 'Share your trip: the public trip link open in the browser, live',
      es: 'Comparte tu viaje: el enlace público del viaje abierto en el navegador, en directo',
    },
  },
  {
    key: 'flyover',
    alt: {
      en: 'Generate a flyover video of your route to share on social media',
      es: 'Genera un vídeo sobrevolando tu ruta para compartir en redes sociales',
    },
  },
  {
    key: 'collect',
    alt: {
      en: 'Collect trophies: Angkor Wat in 3D after writing a page there',
      es: 'Colecciona trofeos: Angkor Wat en 3D tras escribir una página allí',
    },
  },
];

const files = import.meta.glob<{ default: ImageMetadata }>('../../Photos/Somada/screens/*/*.jpg', {
  eager: true,
});

function shotsFor(device: Device, locale: Locale): Shot[] {
  return screens.map((screen) => {
    const path = `../../Photos/Somada/screens/${device}/${locale}-${screen.key}.jpg`;
    const file = files[path];
    if (!file) throw new Error(`Missing screenshot ${path}`);
    return { src: file.default, alt: screen.alt[locale] };
  });
}

export type AppMedia = {
  cover: ImageMetadata;
  coverAlt: Record<Locale, string>;
  shots: (device: Device, locale: Locale) => Shot[];
};

export const appMedia: Record<string, AppMedia> = {
  somada: {
    cover: logo,
    coverAlt: {
      en: 'Somada app icon',
      es: 'Icono de la app Somada',
    },
    shots: shotsFor,
  },
};
