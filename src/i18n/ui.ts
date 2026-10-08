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
      processLabel: 'How do I work?',
      steps: [
        { emoji: '💭', title: 'Capture ideas' },
        { emoji: '🕵️‍♂️', title: 'Research & validate the idea' },
        { emoji: '👨‍💻', title: 'Build MVP' },
        { emoji: '🚀', title: 'Launch' },
        { emoji: '📈', title: 'Grow' },
        { emoji: '💰', title: 'Monetise' },
        { emoji: '⚙️', title: 'Maintenance' },
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
      essays: 'Substack',
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
        'Explore the world using AI',
        'Your data stays private unless you choose to share it',
      ],
      helpTitle: 'Need help?',
      help: 'If you have questions or wish to delete your account, contact us at:',
      privacyTitle: 'Privacy Policy',
      privacy: [
        {
          title: '1. Data We Collect',
          body: 'We may collect personal data such as your email, usage data, and geolocation when you use the app.',
        },
        {
          title: '2. Purpose of Data Use',
          body: 'We use your data to provide personalized features, enhance functionality, ensure account security, and improve the app experience.',
        },
        {
          title: '3. Location Services',
          body: 'We may request access to your location to enable features such as journaling with map routes. Location access is optional and requires your explicit permission.',
        },
        {
          title: '4. Data Storage',
          body: 'All data is stored securely in accordance with industry standards. We do not sell or share your data with third parties without your consent.',
        },
        {
          title: '5. Third-Party Services',
          body: 'Some features may rely on third-party providers such as OpenAI (ChatGPT). These services have their own privacy policies and may process data according to their terms.',
        },
        {
          title: '6. Your Rights',
          body: 'You have the right to access, correct, or delete your personal information at any time. Contact us if you wish to exercise these rights.',
        },
        {
          title: '7. Account & Data Deletion',
          body: 'You may delete your account and all related data directly from the app or by contacting us.',
        },
        {
          title: '8. Contact',
          body: 'For any privacy questions, contact us at:',
        },
      ],
      termsTitle: 'Terms & Conditions',
      terms: [
        {
          title: '1. Account & Access',
          body: 'You must be at least 13 years old to create an account. You are responsible for maintaining the confidentiality of your login credentials and for any activity under your account.',
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
          title: '4. Personal Data & Location',
          body: 'We collect personal and location data to enhance your experience. This includes authentication data, usage statistics, and geolocation. Data is stored securely and never sold to third parties.',
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
          title: '7. AI Content Disclaimer',
          body: 'Some features use OpenAI’s ChatGPT via API. While we aim to provide helpful and accurate content, the AI may occasionally produce incorrect or misleading information.',
        },
        {
          title: '8. Prohibited Conduct',
          body: 'You agree not to misuse the app, reverse engineer its functions, or store any illegal, harmful or abusive content.',
        },
        {
          title: '9. Account Deletion',
          body: 'You may request to delete your account and data at any time via the app or by contacting us. Upon confirmation, your data will be permanently removed in compliance with privacy regulations.',
        },
        {
          title: '10. Contact',
          body: 'For any questions about these terms, contact us at:',
        },
        {
          title: '11. Changes to Terms',
          body: 'We may update these terms from time to time. Continued use of the app constitutes your acceptance of any changes.',
        },
        {
          title: '12. Governing Law',
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
      processLabel: '¿Cómo trabajo?',
      steps: [
        { emoji: '💭', title: 'Capturar ideas' },
        { emoji: '🕵️‍♂️', title: 'Investigar y validar la idea' },
        { emoji: '👨‍💻', title: 'Construir el MVP' },
        { emoji: '🚀', title: 'Lanzar' },
        { emoji: '📈', title: 'Crecer' },
        { emoji: '💰', title: 'Monetizar' },
        { emoji: '⚙️', title: 'Mantenimiento' },
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
      essays: 'Substack',
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
        'Explora el mundo con IA',
        'Tus datos siguen siendo privados salvo que decidas compartirlos',
      ],
      helpTitle: '¿Necesitas ayuda?',
      help: 'Si tienes preguntas o quieres eliminar tu cuenta, escríbenos a:',
      privacyTitle: 'Política de privacidad',
      privacy: [
        {
          title: '1. Datos que recogemos',
          body: 'Podemos recoger datos personales como tu email, datos de uso y geolocalización cuando usas la app.',
        },
        {
          title: '2. Finalidad del uso de los datos',
          body: 'Usamos tus datos para ofrecer funciones personalizadas, mejorar el funcionamiento, proteger la cuenta y mejorar la experiencia de la app.',
        },
        {
          title: '3. Servicios de localización',
          body: 'Podemos pedir acceso a tu ubicación para funciones como el diario con rutas en el mapa. El acceso a la ubicación es opcional y requiere tu permiso explícito.',
        },
        {
          title: '4. Almacenamiento de datos',
          body: 'Todos los datos se almacenan de forma segura conforme a los estándares del sector. No vendemos ni compartimos tus datos con terceros sin tu consentimiento.',
        },
        {
          title: '5. Servicios de terceros',
          body: 'Algunas funciones pueden depender de proveedores externos como OpenAI (ChatGPT). Esos servicios tienen sus propias políticas de privacidad y pueden tratar los datos según sus términos.',
        },
        {
          title: '6. Tus derechos',
          body: 'Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. Escríbenos si quieres ejercer esos derechos.',
        },
        {
          title: '7. Eliminación de la cuenta y los datos',
          body: 'Puedes eliminar tu cuenta y todos los datos relacionados desde la app o escribiéndonos.',
        },
        {
          title: '8. Contacto',
          body: 'Para cualquier pregunta sobre privacidad, escríbenos a:',
        },
      ],
      termsTitle: 'Términos y condiciones',
      terms: [
        {
          title: '1. Cuenta y acceso',
          body: 'Debes tener al menos 13 años para crear una cuenta. Eres responsable de mantener la confidencialidad de tus credenciales y de cualquier actividad en tu cuenta.',
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
          title: '4. Datos personales y ubicación',
          body: 'Recogemos datos personales y de ubicación para mejorar tu experiencia. Esto incluye datos de autenticación, estadísticas de uso y geolocalización. Los datos se almacenan de forma segura y nunca se venden a terceros.',
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
          title: '7. Aviso sobre el contenido de IA',
          body: 'Algunas funciones usan ChatGPT de OpenAI a través de su API. Aunque buscamos ofrecer contenido útil y preciso, la IA puede producir en ocasiones información incorrecta o engañosa.',
        },
        {
          title: '8. Conducta prohibida',
          body: 'Te comprometes a no hacer un uso indebido de la app, a no aplicar ingeniería inversa a sus funciones y a no guardar contenido ilegal, dañino o abusivo.',
        },
        {
          title: '9. Eliminación de la cuenta',
          body: 'Puedes solicitar la eliminación de tu cuenta y tus datos en cualquier momento desde la app o escribiéndonos. Tras la confirmación, tus datos se eliminarán de forma permanente conforme a la normativa de privacidad.',
        },
        {
          title: '10. Contacto',
          body: 'Para cualquier pregunta sobre estos términos, escríbenos a:',
        },
        {
          title: '11. Cambios en los términos',
          body: 'Podemos actualizar estos términos de vez en cuando. Seguir usando la app supone que aceptas los cambios.',
        },
        {
          title: '12. Ley aplicable',
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
