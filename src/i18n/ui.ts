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
      journal: 'Build in public',
      contact: 'Contact',
      menu: 'Menu',
      language: 'ES',
      languageLabel: 'Español',
    },
    hero: {
      eyebrow: 'Indie iOS developer',
      title: ['I code the app,', 'you own it.'],
      line: ['Don’t let others take your idea,', 'Be faster, hire me now!'],
      support:
        'Hello 👋🏼, I am David Zomada, an iOS developer with 3+ years of experience. I create apps that solve problems and create revenue.',
      cta: 'See my work',
      photo: 'Portrait of David Zomada',
    },
    stack: {
      label: 'Tech stack',
      line: 'The tools I work with every day.',
      groups: [
        { k: 'Platform', v: 'Swift · SwiftUI', sdks: false },
        { k: 'Apple', v: 'Apple SDKs', sdks: true },
        { k: 'Maps', v: 'Mapbox', sdks: false },
        { k: 'Data', v: 'Supabase · CloudKit', sdks: false },
        { k: 'Revenue', v: 'Superwall · RevenueCat', sdks: false },
        { k: 'Ship', v: 'TestFlight · App Store Connect', sdks: false },
      ],
      sdks: [
        'SwiftUI',
        'UIKit',
        'MapKit',
        'StoreKit',
        'SwiftData',
        'WidgetKit',
        'HealthKit',
        'CloudKit',
        'Core Location',
        'ActivityKit',
        'App Intents',
        'PhotosUI',
      ],
    },
    process: {
      label: 'How do I work?',
      more: 'See details',
      outcomeLabel: 'You get',
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      steps: [
        {
          icon: 'talk',
          title: 'Kick-off and research',
          short: 'Research',
          body: 'You tell me your idea; I research the market and define the MVP.',
          points: [
            'A call to understand the idea, the audience, and how the app should earn money.',
            'Competitors on the App Store, what their users complain about, and whether people search and pay for this.',
            'An honest recommendation: build it, adjust it, or don’t spend money on it yet.',
            'The MVP scope: the features that matter, what waits for later, and an estimate.',
          ],
          outcome: 'A research report and the MVP scope.',
        },
        {
          icon: 'build',
          title: 'Build the MVP',
          short: 'MVP',
          body: 'A native SwiftUI app, built in milestones you test on TestFlight.',
          points: [
            'A written plan with screens, features, and what stays out, approved by you.',
            'Built milestone by milestone, with TestFlight builds you can install on your iPhone along the way.',
            'Subscriptions or in-app purchases set up from the start, if the app needs them.',
            'Clean code in a repository that belongs to you.',
          ],
          outcome: 'The app on TestFlight and the code in your repository.',
        },
        {
          icon: 'launch',
          title: 'Launch and maintenance',
          short: 'Launch',
          body: 'App Store release, then monthly updates and fixes.',
          points: [
            'An App Store page written for search, a screenshot plan, and the App Review checklist.',
            'Submission and follow-up until Apple approves the app.',
            'Monthly maintenance: new iOS versions, crashes, reviews, and Apple’s new requirements.',
            'Improvements based on real data once people use it.',
          ],
          outcome: 'The app live on the App Store, and kept up to date.',
        },
      ],
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
      title: 'Mobile apps that serve people’s needs and desires.',
      paragraphs: [
        'I am David Zomada, a full-stack mobile developer from Spain. I have worked as a software engineer on international projects for 5+ years. I also build mobile applications for clients, and develop my own app ideas. I write about my tech experience and nomadic life along the way.',
      ],
      facts: [
        { k: 'Based', v: 'Spain', live: false },
        { k: 'Languages', v: 'English and Spanish', live: false },
        { k: 'Platform', v: 'iOS and iPadOS', live: false },
        { k: 'Availability', v: 'Open', live: true },
      ],
      experienceLabel: 'For other teams',
      roles: [
        {
          name: 'PortView',
          meta: 'iOS developer · Ports.tech',
          text: 'PortView is a mobile application that connects sailors with ports and charter services. Mariners can book and send their documents at check-in, and the port receives them in the CRM. Users can be guided, the way Google Maps does, through the docks to their mooring. It also includes an augmented reality feature to locate key points while sailing. Points of interest and alerts cover the coasts of Spain. I was part of the mobile team that developed the iOS version.',
          href: 'https://apps.apple.com/app/portview/id1517446556',
        },
        {
          name: 'Nucleo',
          meta: 'Android developer · Noguiana',
          text: 'Nucleo is a multiplatform CRM for warehouses. I developed the Android app for the system. Operators used it to locate, assemble, and distribute deliveries, and to manage the warehouse stock and supplies.',
          href: '',
        },
      ],
    },
    journal: {
      index: '03',
      label: 'Build in public',
      title: 'Work in progress',
      lede: 'Tech and travel essays in Substack. Building public in X.',
      substack: 'Substack',
      x: 'X',
      empty: 'The next note will land here.',
    },
    contact: {
      index: '04',
      label: 'Contact',
      title: 'Tell me your idea.',
      subject: 'Subject',
      lede: 'Who it is for, what gets in their way, and what you want them to be able to do. I reply by email.',
      name: 'Name',
      email: 'Email',
      project: 'Subject',
      message: 'Message',
      send: 'Send',
      projectHint: 'Subject',
      sent: 'Your mail app should open with this message. If it does not, write to',
    },
    footer: {
      privacy: 'Privacy',
      rights: 'All rights reserved.',
    },
    project: {
      back: 'Work',
      store: 'View on the App Store',
      start: 'Start journaling for free',
      support: 'Support',
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
    supportCenter: {
      back: 'Somada',
      title: 'Somada — Support Center',
      meta: 'Privacy policy, terms, and contact for the Somada app.',
      intro:
        'Welcome to the support page for Somada, your personalized travel journal. Here you’ll find our Privacy Policy, Terms & Conditions, and contact information.',
      aboutTitle: 'About Somada',
      about:
        'Somada helps you plan, track, and draw your backpacking adventures. Create your own route, add notes and photos, and keep a visual journal of every step.',
      features: [
        'Free-draw travel routes on the map',
        'Add notes, photos, and locations to each day',
        'View your trip timeline and maps',
        'Your journal stays private: only you can see it',
      ],
      helpTitle: 'Need help?',
      help: 'If you have questions or wish to delete your account, contact us at:',
      privacyTitle: 'Privacy Policy',
      privacy: [
        {
          title: '1. Who handles your data',
          body: 'The controller is David Zomada, Somada’s independent developer. This policy explains what data the app handles, why, who it is shared with and what rights you have. Last updated: November 11, 2026.',
        },
        {
          title: '2. Data we collect',
          body: '• Account: your email and how you sign in (email link, password, Apple or Google). With Apple or Google we receive the email and identifier they provide, never your password.\n• Your journal: pages, text, photos, icons, routes, stops and the places you collect, with their date and position on the map.\n• Location: only if you allow it, and only while you use the app.\n• Anonymous usage data: which features are used and technical data (app and OS version, device model). It is not linked to your account.\nWe do not collect data for advertising or track you across apps or websites.',
        },
        {
          title: '3. Why we use it',
          body: '• To provide the service: create your account, save and sync your journal across devices, show maps and search for places. Legal basis: providing the service you request by using the app.\n• To improve the app with anonymous usage data. Legal basis: our legitimate interest in knowing what works and what breaks, without identifying you.\nWe do not sell your data or use it for advertising.',
        },
        {
          title: '4. Location, photos and camera',
          body: 'Somada asks for permission to use your location while you use the app, your photo library and the camera. All of them are optional: without them you can keep writing your journal. Only the photos you add to a page are uploaded. You can change these permissions at any time in iOS Settings.',
        },
        {
          title: '5. Where it is stored and for how long',
          body: 'Your account and journal are stored on the servers of Supabase, our database provider, located in Singapore, and on your device so the app works offline. Your journal is private: other users cannot see it, unless you share a route with a public link (section 6). As the developer, I only access your data when needed to give you support, fix a bug or comply with the law. We keep it while you have an account; when you delete it, it is removed from our servers, and backups are deleted in their usual cycle.',
        },
        {
          title: '6. Public trip links',
          body: 'If you choose to share a route, Somada creates a link that anyone who has it can open in a browser, without the app and without signing in.\n• What it shows: the route, the pages of its stops with their text, photos, exact location, date and time, the places you collected, and your name and profile photo. It never shows your email or your other routes and pages.\n• Legal basis: providing the service you request when you share the route.\n• How long: until you stop sharing it, delete the route or delete your account. If you share it again, it gets a new link.\n• Who can see it: anyone you send the link to, and anyone they forward it to. The page asks search engines not to index it.\n• You are responsible for what you publish: do not share photos or details of other people without their permission. Anyone can report a trip from the link at the bottom of the page, and we may remove links that break the law or these rules.\n• Readers of the link: the trip page does not use cookies or keep any data about them; it only remembers their map style in their own browser. To show the trip, their IP address reaches GitHub (which hosts the page), Supabase (trip data and photos) and Mapbox (the map, including its usage events).\nA photo’s web address may keep working for someone who saved it, even after you stop sharing.',
        },
        {
          title: '7. Service providers',
          body: 'Somada uses these services, which only receive what they need for their job:\n• Supabase: database, photos, sign-in and the sign-in email.\n• Mapbox: maps and place search. It receives what you search for, the map area you view and technical data; its SDK may send anonymous usage and location data to improve its maps.\n• GitHub: hosts the public trip page and receives the IP address of whoever opens a link.\n• Apple and Google: only if you choose to sign in with them.\n• Wikipedia and Wikidata: they receive a place’s name or position to show its information and photo.\n• TelemetryDeck: anonymous analytics. The device identifier is hashed on the device before it is sent, and it never receives your name, email, account, journal or location.\nYour data is stored outside the European Economic Area (Supabase, in Singapore) and some providers, such as Mapbox, process it in the US. These transfers use the safeguards the GDPR requires, such as the European Commission’s standard contractual clauses. Somada does not currently use any artificial intelligence services.',
        },
        {
          title: '8. Your rights',
          body: 'You can ask to access, correct or delete your data, restrict or object to its processing, and receive a copy in a commonly used format. Write to the contact email and we will reply within one month. If you think we have not handled your request properly, you can complain to the Spanish Data Protection Agency (aepd.es) or the authority in your country.',
        },
        {
          title: '9. Account deletion',
          body: 'You can delete your account and all its data from the app’s settings (Delete account) or by writing to us. Deletion is permanent.',
        },
        {
          title: '10. Changes',
          body: 'If we change this policy, we will update the date in section 1 and say so in the app or on this page.',
        },
        {
          title: '11. Contact',
          body: 'For any privacy questions, write to us at:',
        },
      ],
      termsTitle: 'Terms & Conditions',
      terms: [
        {
          title: '1. Account & Access',
          body: 'You must be at least 14 years old to create an account. You are responsible for maintaining the confidentiality of your login credentials and for any activity under your account.',
        },
        {
          title: '2. Private Content',
          body: 'You may create and store personal content such as journal entries, photos, and routes. This content is private unless you explicitly choose to share it.',
        },
        {
          title: '3. Subscriptions',
          body: 'Some features require a paid subscription. Payments are processed via the App Store, and auto-renewal can be managed through your account settings.',
        },
        {
          title: '4. Personal Data',
          body: 'How we handle your data is explained in the Privacy Policy. We never sell your data or use it for advertising.',
        },
        {
          title: '5. Apple Platform Policies',
          body: 'This app complies with Apple guidelines on data privacy, location usage, and in-app purchases. Users are informed and must grant explicit consent for any location tracking or personal data collection.',
        },
        {
          title: '6. Limitation of Liability',
          body: 'We are not liable for any indirect or incidental damages resulting from the use of the app. Use the service at your own risk.',
        },
        {
          title: '7. Prohibited Conduct',
          body: 'You agree not to misuse the app, reverse engineer its functions, or store any illegal, harmful or abusive content.',
        },
        {
          title: '8. Account Deletion',
          body: 'You may request to delete your account and data at any time via the app or by contacting us. Upon confirmation, your data will be permanently removed in compliance with privacy regulations.',
        },
        {
          title: '9. Contact',
          body: 'For any questions about these terms, contact us at:',
        },
        {
          title: '10. Changes to Terms',
          body: 'We may update these terms from time to time. Continued use of the app constitutes your acceptance of any changes.',
        },
        {
          title: '11. Governing Law',
          body: 'These terms are governed by the laws of the country in which you reside.',
        },
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
      journal: 'Build in public',
      contact: 'Contacto',
      menu: 'Menú',
      language: 'EN',
      languageLabel: 'English',
    },
    hero: {
      eyebrow: 'Desarrollador iOS indie',
      title: ['Yo programo la app,', 'tú eres el dueño.'],
      line: ['No dejes que otros se queden con tu idea,', 'Sé más rápido, contrátame ahora!'],
      support:
        'Hola 👋🏼, soy David Zomada, desarrollador iOS con más de 3 años de experiencia. Creo apps que resuelven problemas y generan ingresos.',
      cta: 'Ver mi trabajo',
      photo: 'Retrato de David Zomada',
    },
    stack: {
      label: 'Tecnologías',
      line: 'Las herramientas con las que trabajo cada día.',
      groups: [
        { k: 'Plataforma', v: 'Swift · SwiftUI', sdks: false },
        { k: 'Apple', v: 'Apple SDKs', sdks: true },
        { k: 'Mapas', v: 'Mapbox', sdks: false },
        { k: 'Datos', v: 'Supabase · CloudKit', sdks: false },
        { k: 'Ingresos', v: 'Superwall · RevenueCat', sdks: false },
        { k: 'Publicación', v: 'TestFlight · App Store Connect', sdks: false },
      ],
      sdks: [
        'SwiftUI',
        'UIKit',
        'MapKit',
        'StoreKit',
        'SwiftData',
        'WidgetKit',
        'HealthKit',
        'CloudKit',
        'Core Location',
        'ActivityKit',
        'App Intents',
        'PhotosUI',
      ],
    },
    process: {
      label: '¿Cómo trabajo?',
      more: 'Ver detalles',
      outcomeLabel: 'Te llevas',
      close: 'Cerrar',
      previous: 'Anterior',
      next: 'Siguiente',
      steps: [
        {
          icon: 'talk',
          title: 'Reunión inicial e investigación',
          short: 'Investigación',
          body: 'Me cuentas tu idea; investigo el mercado y defino el MVP.',
          points: [
            'Una llamada para entender la idea, el público y cómo debería ganar dinero la app.',
            'Competidores en el App Store, de qué se quejan sus usuarios y si la gente busca esto y paga por ello.',
            'Una recomendación honesta: construirla, ajustarla o no gastar dinero en ella todavía.',
            'El alcance del MVP: las funciones que importan, lo que puede esperar y una estimación.',
          ],
          outcome: 'Un informe de investigación y el alcance del MVP.',
        },
        {
          icon: 'build',
          title: 'Construir el MVP',
          short: 'MVP',
          body: 'Una app nativa en SwiftUI, construida por hitos que pruebas en TestFlight.',
          points: [
            'Un plan escrito con pantallas, funciones y lo que se queda fuera, aprobado por ti.',
            'Construida hito a hito, con builds de TestFlight que puedes instalar en tu iPhone por el camino.',
            'Suscripciones o compras in-app configuradas desde el principio, si la app las necesita.',
            'Código limpio en un repositorio que es tuyo.',
          ],
          outcome: 'La app en TestFlight y el código en tu repositorio.',
        },
        {
          icon: 'launch',
          title: 'Lanzamiento y mantenimiento',
          short: 'Lanzamiento',
          body: 'Publicación en el App Store y, después, actualizaciones y mejoras cada mes.',
          points: [
            'Una ficha del App Store escrita para la búsqueda, un plan de capturas y la checklist de revisión de Apple.',
            'El envío y el seguimiento hasta que Apple aprueba la app.',
            'Mantenimiento mensual: nuevas versiones de iOS, cierres inesperados, reseñas y requisitos nuevos de Apple.',
            'Mejoras basadas en datos reales cuando la gente ya la usa.',
          ],
          outcome: 'La app publicada en el App Store y al día.',
        },
      ],
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
      title: 'Apps móviles que responden a lo que la gente necesita y desea.',
      paragraphs: [
        'Soy David Zomada, desarrollador móvil full stack de España. He trabajado como ingeniero de software en proyectos internacionales durante más de 5 años. También hago aplicaciones móviles para clientes y desarrollo mis propias ideas. Escribo sobre mi experiencia técnica y la vida nómada por el camino.',
      ],
      facts: [
        { k: 'Base', v: 'España', live: false },
        { k: 'Idiomas', v: 'Español e inglés', live: false },
        { k: 'Plataforma', v: 'iOS y iPadOS', live: false },
        { k: 'Disponibilidad', v: 'Libre', live: true },
      ],
      experienceLabel: 'Para otros equipos',
      roles: [
        {
          name: 'PortView',
          meta: 'Desarrollador iOS · Ports.tech',
          text: 'PortView es una aplicación móvil que conecta a navegantes con puertos y servicios de charter. Los marineros pueden reservar y enviar sus documentos en el check-in, y el puerto los recibe en su CRM. La app guía hasta el amarre, como lo hace Google Maps, a través de los muelles. También incluye realidad aumentada para localizar puntos clave durante la navegación. Hay todo tipo de puntos de interés y alertas en las costas de España. Formé parte del equipo móvil que desarrolló la versión de iOS.',
          href: 'https://apps.apple.com/es/app/portview/id1517446556',
        },
        {
          name: 'Nucleo',
          meta: 'Desarrollador Android · Noguiana',
          text: 'Nucleo es un CRM multiplataforma para la gestión de almacenes. Desarrollé la app de Android de este sistema. Los operarios del almacén usan esta aplicación para localizar, preparar y distribuir entregas, y para gestionar el stock y los suministros.',
          href: '',
        },
      ],
    },
    journal: {
      index: '03',
      label: 'Build in public',
      title: 'Trabajo en marcha',
      lede: 'Ensayos de tecnología y viajes en Substack. Construyendo en público en X.',
      substack: 'Substack',
      x: 'X',
      empty: 'La siguiente nota aparecerá aquí.',
    },
    contact: {
      index: '04',
      label: 'Contacto',
      title: 'Cuéntame tu idea.',
      subject: 'Asunto',
      lede: 'Para quién es, qué se les atasca y qué quieres que puedan hacer. Respondo por email.',
      name: 'Nombre',
      email: 'Email',
      project: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar',
      projectHint: 'Asunto',
      sent: 'Debería abrirse tu app de correo con el mensaje. Si no se abre, escribe a',
    },
    footer: {
      privacy: 'Privacidad',
      rights: 'Todos los derechos reservados.',
    },
    project: {
      back: 'Trabajo',
      store: 'Ver en el App Store',
      start: 'Empieza a escribir tu diario gratis',
      support: 'Soporte',
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
    supportCenter: {
      back: 'Somada',
      title: 'Somada — Centro de soporte',
      meta: 'Política de privacidad, términos y contacto de la app Somada.',
      intro:
        'Bienvenido a la página de soporte de Somada, tu diario de viaje personal. Aquí encontrarás la política de privacidad, los términos y condiciones, y la información de contacto.',
      aboutTitle: 'Sobre Somada',
      about:
        'Somada te ayuda a planificar, seguir y dibujar tus rutas de mochilero. Crea tu propia ruta, añade notas y fotos, y guarda un diario visual de cada paso.',
      features: [
        'Dibuja a mano las rutas del viaje sobre el mapa',
        'Añade notas, fotos y lugares a cada día',
        'Consulta la cronología y los mapas del viaje',
        'Tu diario es privado: solo lo ves tú',
      ],
      helpTitle: '¿Necesitas ayuda?',
      help: 'Si tienes preguntas o quieres eliminar tu cuenta, escríbenos a:',
      privacyTitle: 'Política de privacidad',
      privacy: [
        {
          title: '1. Quién trata tus datos',
          body: 'El responsable es David Zomada, desarrollador independiente de Somada. Esta política explica qué datos trata la app, para qué, con quién se comparten y qué derechos tienes. Última actualización: 11 de noviembre de 2026.',
        },
        {
          title: '2. Datos que recogemos',
          body: '• Cuenta: tu email y el método con el que entras (enlace por email, contraseña, Apple o Google). Con Apple o Google recibimos el email y el identificador que nos dan, nunca tu contraseña.\n• Tu diario: páginas, textos, fotos, iconos, rutas, paradas y los lugares que coleccionas, con su fecha y su posición en el mapa.\n• Ubicación: solo si das permiso y mientras usas la app.\n• Datos de uso anónimos: qué funciones se usan y datos técnicos (versión de la app y del sistema, modelo del dispositivo). No se asocian a tu cuenta.\nNo recogemos datos para publicidad ni te seguimos entre apps o webs.',
        },
        {
          title: '3. Para qué los usamos',
          body: '• Para darte el servicio: crear tu cuenta, guardar y sincronizar tu diario entre dispositivos, mostrar mapas y buscar lugares. Base legal: la prestación del servicio que pides al usar la app.\n• Para mejorar la app con datos de uso anónimos. Base legal: nuestro interés legítimo en saber qué funciona y qué falla, sin identificarte.\nNo vendemos tus datos ni los usamos para publicidad.',
        },
        {
          title: '4. Ubicación, fotos y cámara',
          body: 'Somada te pide permiso para usar tu ubicación mientras usas la app, tu fototeca y la cámara. Todo es opcional: sin esos permisos puedes seguir escribiendo tu diario. Solo se suben las fotos que añades a una página. Puedes cambiar los permisos cuando quieras en los Ajustes de iOS.',
        },
        {
          title: '5. Dónde se guardan y cuánto tiempo',
          body: 'Tu cuenta y tu diario se guardan en los servidores de Supabase, nuestro proveedor de base de datos, situados en Singapur, y en tu dispositivo para que la app funcione sin conexión. Tu diario es privado: otros usuarios no pueden verlo, salvo que compartas una ruta con un enlace público (apartado 6). Como desarrollador, solo accedo a tus datos cuando hace falta para darte soporte, corregir un error o cumplir la ley. Los conservamos mientras tengas la cuenta; al borrarla se eliminan de nuestros servidores, y las copias de seguridad se borran en su ciclo habitual.',
        },
        {
          title: '6. Enlaces públicos de viajes',
          body: 'Si decides compartir una ruta, Somada crea un enlace que cualquiera que lo tenga puede abrir en el navegador, sin la app y sin iniciar sesión.\n• Qué muestra: la ruta, las páginas de sus paradas con su texto, fotos, ubicación exacta, fecha y hora, los lugares que has coleccionado, y tu nombre y foto de perfil. Nunca muestra tu email ni tus otras rutas y páginas.\n• Base legal: la prestación del servicio que pides al compartir la ruta.\n• Cuánto dura: hasta que dejas de compartirla, borras la ruta o borras tu cuenta. Si vuelves a compartirla, tendrá un enlace nuevo.\n• Quién puede verlo: cualquiera a quien le envíes el enlace, y a quien esa persona se lo reenvíe. La página pide a los buscadores que no la indexen.\n• Eres responsable de lo que publicas: no compartas fotos ni datos de otras personas sin su permiso. Cualquiera puede denunciar un viaje desde el enlace al pie de la página, y podemos retirar los enlaces que incumplan la ley o estas normas.\n• Quien abre el enlace: la página del viaje no usa cookies ni guarda datos suyos; solo recuerda el estilo del mapa en su propio navegador. Para mostrar el viaje, su dirección IP llega a GitHub (que aloja la página), Supabase (datos y fotos del viaje) y Mapbox (el mapa, incluidos sus eventos de uso).\nLa dirección web de una foto puede seguir funcionando para quien la haya guardado, aunque dejes de compartir.',
        },
        {
          title: '7. Proveedores',
          body: 'Somada usa estos servicios, que solo reciben lo necesario para su función:\n• Supabase: base de datos, fotos, inicio de sesión y envío del email de acceso.\n• Mapbox: mapas y búsqueda de lugares. Recibe lo que buscas, la zona del mapa que ves y datos técnicos; su SDK puede enviar datos de uso y de ubicación anónimos para mejorar sus mapas.\n• GitHub: aloja la página pública del viaje y recibe la dirección IP de quien abre un enlace.\n• Apple y Google: solo si eliges iniciar sesión con ellos.\n• Wikipedia y Wikidata: reciben el nombre o la posición de un lugar para mostrar su información y su foto.\n• TelemetryDeck: analítica anónima. El identificador del dispositivo se cifra en el propio dispositivo antes de enviarse, y no recibe tu nombre, email, cuenta, diario ni ubicación.\nTus datos se guardan fuera del Espacio Económico Europeo (Supabase, en Singapur) y algunos proveedores, como Mapbox, los tratan en EE. UU. Estas transferencias se hacen con las garantías que exige el RGPD, como las cláusulas contractuales tipo de la Comisión Europea. Somada no usa ahora mismo servicios de inteligencia artificial.',
        },
        {
          title: '8. Tus derechos',
          body: 'Puedes pedir acceso a tus datos, corregirlos, borrarlos, limitar su tratamiento u oponerte a él, y recibir una copia en un formato de uso común. Escríbenos al email de contacto y te responderemos en un plazo máximo de un mes. Si crees que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es) o la autoridad de tu país.',
        },
        {
          title: '9. Eliminación de la cuenta',
          body: 'Puedes borrar tu cuenta y todos sus datos desde los ajustes de la app (Eliminar cuenta) o escribiéndonos. El borrado es definitivo.',
        },
        {
          title: '10. Cambios',
          body: 'Si cambiamos esta política, actualizaremos la fecha del apartado 1 y lo indicaremos en la app o en esta página.',
        },
        {
          title: '11. Contacto',
          body: 'Para cualquier pregunta sobre privacidad, escríbenos a:',
        },
      ],
      termsTitle: 'Términos y condiciones',
      terms: [
        {
          title: '1. Cuenta y acceso',
          body: 'Debes tener al menos 14 años para crear una cuenta. Eres responsable de mantener la confidencialidad de tus credenciales y de cualquier actividad en tu cuenta.',
        },
        {
          title: '2. Contenido privado',
          body: 'Puedes crear y guardar contenido personal, como entradas del diario, fotos y rutas. Ese contenido es privado salvo que decidas compartirlo de forma explícita.',
        },
        {
          title: '3. Suscripciones',
          body: 'Algunas funciones requieren una suscripción de pago. Los pagos se procesan a través del App Store, y la renovación automática se gestiona desde los ajustes de tu cuenta.',
        },
        {
          title: '4. Datos personales',
          body: 'Cómo tratamos tus datos se explica en la Política de privacidad. No vendemos tus datos ni los usamos para publicidad.',
        },
        {
          title: '5. Políticas de la plataforma de Apple',
          body: 'Esta app cumple las directrices de Apple sobre privacidad de datos, uso de la ubicación y compras dentro de la app. Se informa a quien la usa y debe dar un consentimiento explícito para cualquier seguimiento de ubicación o recogida de datos personales.',
        },
        {
          title: '6. Limitación de responsabilidad',
          body: 'No somos responsables de daños indirectos o incidentales derivados del uso de la app. Usas el servicio bajo tu propia responsabilidad.',
        },
        {
          title: '7. Conducta prohibida',
          body: 'Te comprometes a no hacer un uso indebido de la app, a no aplicar ingeniería inversa a sus funciones y a no guardar contenido ilegal, dañino o abusivo.',
        },
        {
          title: '8. Eliminación de la cuenta',
          body: 'Puedes solicitar la eliminación de tu cuenta y tus datos en cualquier momento desde la app o escribiéndonos. Tras la confirmación, tus datos se eliminarán de forma permanente conforme a la normativa de privacidad.',
        },
        {
          title: '9. Contacto',
          body: 'Para cualquier pregunta sobre estos términos, escríbenos a:',
        },
        {
          title: '10. Cambios en los términos',
          body: 'Podemos actualizar estos términos de vez en cuando. Seguir usando la app supone que aceptas los cambios.',
        },
        {
          title: '11. Ley aplicable',
          body: 'Estos términos se rigen por las leyes del país en el que resides.',
        },
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
