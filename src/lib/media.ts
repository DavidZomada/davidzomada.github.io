import type { ImageMetadata } from 'astro';
import type { Locale } from '../site';
import logo from '../../Photos/Somada/Logo/Icon 2.jpg';
import globe from '../../Photos/Somada/Imagenes/IMG_2984.PNG';
import paper from '../../Photos/Somada/Imagenes/IMG_2986.PNG';
import journal from '../../Photos/Somada/Imagenes/IMG_2990.PNG';
import stops from '../../Photos/Somada/Imagenes/IMG_2991.PNG';
import travel from '../../Photos/Somada/Imagenes/IMG_2992.PNG';

export type Shot = {
  src: ImageMetadata;
  alt: Record<Locale, string>;
};

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
    shots: [
      {
        src: globe,
        alt: {
          en: 'Somada globe with photo pins and a route across Southeast Asia',
          es: 'Globo de Somada con fotos y una ruta por el sudeste asiático',
        },
      },
      {
        src: paper,
        alt: {
          en: 'The same route drawn on Somada’s paper map',
          es: 'La misma ruta dibujada en el mapa de papel de Somada',
        },
      },
      {
        src: stops,
        alt: {
          en: 'A Somada route with its stops listed over the map',
          es: 'Una ruta de Somada con sus paradas listadas sobre el mapa',
        },
      },
      {
        src: journal,
        alt: {
          en: 'A Somada journal page with dated notes and a photo',
          es: 'Una página del diario de Somada con notas fechadas y una foto',
        },
      },
      {
        src: travel,
        alt: {
          en: 'Choosing how a leg of the route was traveled in Somada',
          es: 'Eligiendo cómo se recorrió un tramo de la ruta en Somada',
        },
      },
    ],
  },
};
