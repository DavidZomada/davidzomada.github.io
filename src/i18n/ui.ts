import type { Locale } from '../site';

export const ui = {
  en: {
    meta: {
      title: 'David Zomada — iOS apps people can install',
      description:
        'David Zomada takes an iOS app from the first screen to the App Store. You work with one person. Somada keeps a trip’s route, day, and photos together.',
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
      line: 'From a problem to an app people can install.',
      support:
        'You work with one person on the interface, the code, and the release. Somada, a journal for trips that do not fit in a pin, is on the App Store.',
      cta: 'See the work',
      photo: 'Portrait of David Zomada',
    },
    work: {
      index: '01',
      label: 'Work',
      view: 'See the app',
      empty: 'The next app will land here.',
    },
    about: {
      index: '02',
      label: 'About',
      title: 'One person, from the problem to the App Store.',
      paragraphs: [
        'I am David Zomada, an indie iOS developer in Spain. When an app is still an idea, or a set of screens nobody can install, I take care of the interface, the code, and the release. You deal with me directly, in English or in Spanish.',
        'Somada is the first app I have shipped on my own. Backpackers get the route, the day, and the photos in one journal, on iPhone and iPad.',
      ],
      facts: [
        { k: 'Based', v: 'Spain' },
        { k: 'Languages', v: 'English and Spanish' },
        { k: 'Platform', v: 'iOS and iPadOS' },
        { k: 'Projects', v: 'Selected, a few at a time' },
      ],
      experienceLabel: 'For other teams',
      roles: [
        {
          name: 'PortView',
          meta: 'iOS developer · Ports.tech',
          text: 'Sailors with a booked mooring in a Spanish port need to reach it, and to manage the vessel’s documents and the crew’s details. I developed the SwiftUI app at Ports.tech so the way to the mooring, the papers, and the crew data sit in one place.',
          href: 'https://apps.apple.com/app/portview/id1517446556',
        },
        {
          name: 'Noguiana',
          meta: 'February 2021 – February 2022 · Madrid',
          text: 'A warehouse has to keep the work on the floor in step with the stock in the database. From February 2021 to February 2022, in Madrid, I designed, developed, and tested the Android app in Xamarin, and administered the Azure server and the REST API that connected the two.',
          href: '',
        },
      ],
    },
    contact: {
      index: '03',
      label: 'Contact',
      title: 'Tell me the problem.',
      subject: 'Project',
      lede: 'Who it is for, what gets in their way, and what you want them to be able to do. I reply by email.',
      name: 'Name',
      email: 'Email',
      project: 'Project',
      message: 'Message',
      send: 'Send',
      projectHint: 'People need a way to…',
      sent: 'Your mail app should open with this message. If it does not, write to',
    },
    footer: {
      privacy: 'Privacy',
      rights: 'All rights reserved.',
    },
    project: {
      back: 'Work',
      store: 'View on the App Store',
      includes: 'What it makes easier',
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
      title: 'David Zomada — Apps de iOS que se pueden instalar',
      description:
        'David Zomada lleva una app de iOS desde la primera pantalla hasta el App Store. Trabajas con una persona. Somada reúne la ruta, el día y las fotos de un viaje.',
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
      line: 'De un problema a una app que se puede instalar.',
      support:
        'Trabajas con una sola persona en la interfaz, el código y la publicación. Somada, un diario para viajes que no caben en un pin, está en el App Store.',
      cta: 'Ver el trabajo',
      photo: 'Retrato de David Zomada',
    },
    work: {
      index: '01',
      label: 'Trabajo',
      view: 'Ver la app',
      empty: 'La siguiente app aparecerá aquí.',
    },
    about: {
      index: '02',
      label: 'Sobre mí',
      title: 'Una persona, del problema al App Store.',
      paragraphs: [
        'Soy David Zomada, desarrollador iOS indie en España. Cuando una app sigue siendo una idea, o un conjunto de pantallas que nadie puede instalar, me encargo de la interfaz, el código y la publicación. Tratas conmigo directamente, en español o en inglés.',
        'Somada es la primera app que he publicado por mi cuenta. Quien viaja con mochila tiene la ruta, el día y las fotos en un solo diario, en el iPhone y el iPad.',
      ],
      facts: [
        { k: 'Base', v: 'España' },
        { k: 'Idiomas', v: 'Español e inglés' },
        { k: 'Plataforma', v: 'iOS e iPadOS' },
        { k: 'Proyectos', v: 'Seleccionados, pocos a la vez' },
      ],
      experienceLabel: 'Para otros equipos',
      roles: [
        {
          name: 'PortView',
          meta: 'Desarrollador iOS · Ports.tech',
          text: 'Quien tiene un amarre reservado en un puerto de España necesita llegar hasta él, y gestionar la documentación del barco y los datos de la tripulación. Desarrollé la app en SwiftUI de Ports.tech para reunir el camino al amarre, los papeles y la tripulación.',
          href: 'https://apps.apple.com/es/app/portview/id1517446556',
        },
        {
          name: 'Noguiana',
          meta: 'Febrero 2021 – febrero 2022 · Madrid',
          text: 'Un almacén tiene que mantener el trabajo en planta al día con el stock de la base de datos. De febrero de 2021 a febrero de 2022, en Madrid, diseñé, desarrollé y probé la app de Android con Xamarin, y administré el servidor de Azure y la API REST que conectaba las dos cosas.',
          href: '',
        },
      ],
    },
    contact: {
      index: '03',
      label: 'Contacto',
      title: 'Cuéntame el problema.',
      subject: 'Proyecto',
      lede: 'Para quién es, qué se les atasca y qué quieres que puedan hacer. Respondo por email.',
      name: 'Nombre',
      email: 'Email',
      project: 'Proyecto',
      message: 'Mensaje',
      send: 'Enviar',
      projectHint: 'La gente necesita poder…',
      sent: 'Debería abrirse tu app de correo con el mensaje. Si no se abre, escribe a',
    },
    footer: {
      privacy: 'Privacidad',
      rights: 'Todos los derechos reservados.',
    },
    project: {
      back: 'Trabajo',
      store: 'Ver en el App Store',
      includes: 'Qué facilita',
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
