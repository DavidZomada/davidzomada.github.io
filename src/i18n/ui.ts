import type { Locale } from '../site';

export const ui = {
  en: {
    meta: {
      title: 'David Zomada — Indie iOS developer',
      description:
        'David Zomada designs, builds, and ships iOS apps. Somada, a travel journal, is on the App Store. Selected client projects.',
    },
    nav: {
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      language: 'ES',
      languageLabel: 'Español',
    },
    hero: {
      eyebrow: 'Indie iOS developer',
      line: 'I design, build, and ship iOS apps.',
      support:
        'Somada, a travel journal, is on the App Store. I also take on selected projects.',
      cta: 'View work',
      photo: 'Portrait of David Zomada',
    },
    work: {
      index: '01',
      label: 'Work',
      view: 'View project',
      empty: 'The next app will land here.',
    },
    about: {
      index: '02',
      label: 'About',
      title: 'One person, from the idea to the App Store.',
      paragraphs: [
        'I am David Zomada, an indie iOS developer in Spain. I take an app from the first screen to a build people can install: interface, code, and the release.',
        'Somada is the first app I have shipped on my own. It is a travel journal for people who want the route, the day, and the photos together — not only a pin on a map.',
      ],
      facts: [
        { k: 'Based', v: 'Spain' },
        { k: 'Languages', v: 'English and Spanish' },
        { k: 'Platform', v: 'iOS and iPadOS' },
        { k: 'Available', v: 'Selected projects' },
      ],
      experienceLabel: 'App work',
      roles: [
        {
          name: 'PortView',
          meta: 'iOS developer · Ports.tech',
          text: 'I developed the SwiftUI app that helps sailors reach a booked mooring in Spanish ports, and manage vessel documents and crew data.',
          href: 'https://apps.apple.com/app/portview/id1517446556',
        },
        {
          name: 'Noguiana',
          meta: 'February 2021 – February 2022 · Madrid',
          text: 'I designed, developed, and tested a warehouse-management app for Android with Xamarin, and administered the Azure server behind the REST API.',
          href: '',
        },
      ],
    },
    contact: {
      index: '03',
      label: 'Contact',
      title: 'Start a project.',
      lede: 'Tell me what you want to ship. I reply by email.',
      name: 'Name',
      email: 'Email',
      project: 'Project',
      message: 'Message',
      send: 'Send',
      projectHint: 'An iOS app for…',
      sent: 'Your mail app should open with this message. If it does not, write to',
    },
    footer: {
      privacy: 'Privacy',
      rights: 'All rights reserved.',
    },
    project: {
      back: 'Work',
      store: 'View on the App Store',
      includes: 'What it includes',
      metaTitle: (name: string) => `${name} — David Zomada`,
    },
    privacy: {
      title: 'Privacy',
      meta: 'How this site handles a message you send.',
      paragraphs: [
        'This site does not use analytics cookies and does not run advertising.',
        'If you use the contact form, your mail app opens with the message. Nothing is stored on this website. The email you send is read so I can reply.',
        'Somada, the app, has its own privacy policy on the App Store listing.',
      ],
    },
    notFound: {
      title: 'This page is not here.',
      home: 'Back to the studio',
    },
  },
  es: {
    meta: {
      title: 'David Zomada — Desarrollador iOS indie',
      description:
        'David Zomada diseña, construye y publica apps para iOS. Somada, una bitácora de viaje, está en el App Store. Proyectos seleccionados.',
    },
    nav: {
      work: 'Trabajo',
      about: 'Sobre mí',
      contact: 'Contacto',
      menu: 'Menú',
      language: 'EN',
      languageLabel: 'English',
    },
    hero: {
      eyebrow: 'Desarrollador iOS indie',
      line: 'Diseño, construyo y publico apps para iOS.',
      support:
        'Somada, una bitácora de viaje, está en el App Store. También acepto proyectos seleccionados.',
      cta: 'Ver trabajo',
      photo: 'Retrato de David Zomada',
    },
    work: {
      index: '01',
      label: 'Trabajo',
      view: 'Ver proyecto',
      empty: 'La siguiente app aparecerá aquí.',
    },
    about: {
      index: '02',
      label: 'Sobre mí',
      title: 'Una persona, de la idea al App Store.',
      paragraphs: [
        'Soy David Zomada, desarrollador iOS indie en España. Llevo una app desde la primera pantalla hasta una versión que se puede instalar: interfaz, código y publicación.',
        'Somada es la primera que he publicado por mi cuenta. Es una bitácora de viaje para quien quiere la ruta, el día y las fotos juntas, no solo un pin en el mapa.',
      ],
      facts: [
        { k: 'Base', v: 'España' },
        { k: 'Idiomas', v: 'Español e inglés' },
        { k: 'Plataforma', v: 'iOS e iPadOS' },
        { k: 'Disponible', v: 'Proyectos seleccionados' },
      ],
      experienceLabel: 'Trabajo en apps',
      roles: [
        {
          name: 'PortView',
          meta: 'Desarrollador iOS · Ports.tech',
          text: 'Desarrollé la app en SwiftUI para que los navegantes lleguen a su amarre reservado en puertos de España y gestionen la documentación del barco y los datos de la tripulación.',
          href: 'https://apps.apple.com/es/app/portview/id1517446556',
        },
        {
          name: 'Noguiana',
          meta: 'Febrero 2021 – febrero 2022 · Madrid',
          text: 'Diseñé, desarrollé y probé una app de gestión de almacén para Android con Xamarin, y administré el servidor de Azure de la API REST entre la app y la base de datos.',
          href: '',
        },
      ],
    },
    contact: {
      index: '03',
      label: 'Contacto',
      title: 'Empieza un proyecto.',
      lede: 'Cuéntame qué quieres publicar. Respondo por email.',
      name: 'Nombre',
      email: 'Email',
      project: 'Proyecto',
      message: 'Mensaje',
      send: 'Enviar',
      projectHint: 'Una app iOS para…',
      sent: 'Debería abrirse tu app de correo con el mensaje. Si no se abre, escribe a',
    },
    footer: {
      privacy: 'Privacidad',
      rights: 'Todos los derechos reservados.',
    },
    project: {
      back: 'Trabajo',
      store: 'Ver en el App Store',
      includes: 'Qué incluye',
      metaTitle: (name: string) => `${name} — David Zomada`,
    },
    privacy: {
      title: 'Privacidad',
      meta: 'Cómo trata este sitio un mensaje que envías.',
      paragraphs: [
        'Este sitio no usa cookies de analítica ni publicidad.',
        'Si usas el formulario, se abre tu app de correo con el mensaje. Esta web no guarda nada. El email que envías lo leo para poder responder.',
        'Somada, la app, tiene su propia política de privacidad en la ficha del App Store.',
      ],
    },
    notFound: {
      title: 'Esta página no está.',
      home: 'Volver al estudio',
    },
  },
} as const;

export function useUi(locale: Locale) {
  return ui[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}
