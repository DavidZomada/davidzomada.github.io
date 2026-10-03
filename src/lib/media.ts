import type { ImageMetadata } from 'astro';
import type { Locale } from '../site';
import logo from '../../Photos/Somada/Logo/Icon 2.jpg';
import shot0 from '../../Photos/Somada/images/somada_image_0.png';
import shot1 from '../../Photos/Somada/images/somada_image_1.png';
import shot2 from '../../Photos/Somada/images/somada_image_2.png';
import shot3 from '../../Photos/Somada/images/somada_image_3.png';
import shot4 from '../../Photos/Somada/images/somada_image_4.png';
import shot5 from '../../Photos/Somada/images/somada_image_5.png';
import shot6 from '../../Photos/Somada/images/somada_image_6.png';
import shot7 from '../../Photos/Somada/images/somada_image_7.png';
import shot8 from '../../Photos/Somada/images/somada_image_8.png';

export type Shot = {
  src: ImageMetadata;
  alt: Record<Locale, string>;
};

const shots: Shot[] = [
  {
    src: shot0,
    alt: {
      en: 'Somada globe with photo pins across Africa and the Atlantic',
      es: 'Globo de Somada con fotos sobre África y el Atlántico',
    },
  },
  {
    src: shot1,
    alt: {
      en: 'A Somada route through Colombia with the Bogotá stop open',
      es: 'Una ruta de Somada por Colombia con la parada de Bogotá abierta',
    },
  },
  {
    src: shot2,
    alt: {
      en: 'The Bogotá journal page in Somada, with photos and notes',
      es: 'La página del diario de Bogotá en Somada, con fotos y notas',
    },
  },
  {
    src: shot3,
    alt: {
      en: 'The Inírida stop on a Somada map, with its photo open',
      es: 'La parada de Inírida en el mapa de Somada, con su foto abierta',
    },
  },
  {
    src: shot4,
    alt: {
      en: 'The Inírida journal page in Somada',
      es: 'La página del diario de Inírida en Somada',
    },
  },
  {
    src: shot5,
    alt: {
      en: 'Choosing a photo and a color for a Somada pin',
      es: 'Eligiendo una foto y un color para un pin de Somada',
    },
  },
  {
    src: shot6,
    alt: {
      en: 'A Somada route listing its stops, from Bogotá to Mavecure',
      es: 'Una ruta de Somada con sus paradas, de Bogotá a Mavecure',
    },
  },
  {
    src: shot7,
    alt: {
      en: 'Choosing how a leg of the route was traveled in Somada',
      es: 'Eligiendo cómo se recorrió un tramo de la ruta en Somada',
    },
  },
  {
    src: shot8,
    alt: {
      en: 'Somada map settings for style, time of day, and labels',
      es: 'Ajustes del mapa de Somada: estilo, momento del día y etiquetas',
    },
  },
];

export const appMedia: Record<
  string,
  { cover: ImageMetadata; coverAlt: Record<Locale, string>; shots: Shot[] }
> = {
  somada: {
    cover: logo,
    coverAlt: {
      en: 'Somada app icon',
      es: 'Icono de la app Somada',
    },
    shots,
  },
};
