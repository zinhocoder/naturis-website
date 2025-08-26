"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pt" | "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Header
    "nav.home": "Início",
    "nav.tours": "Passeios",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "nav.reserve": "Reserve Agora",

    // Hero
    "hero.subtitle": "Especialistas na Tríplice Fronteira",
    "hero.title1": "Descubra a",
    "hero.title2": "AVENTURA",
    "hero.description": "Explore as maravilhas das Cataratas do Iguaçu e muito mais com segurança e conforto",
    "hero.cta1": "Ver Nossos Passeios",
    "hero.cta2": "Fale Conosco",
    "hero.scroll": "Role para baixo",

    // Company section
    "company.title": "NATURIS TURISMO",
    "company.subtitle1": "EXPERIÊNCIAS",
    "company.subtitle2": "ÚNICAS",
    "company.subtitle3": "NA TRÍPLICE FRONTEIRA!",
    "company.description":
      "Conectamos você às maravilhas naturais e culturais de três países em uma única viagem inesquecível.",

    // Tours
    "tours.title": "Nossos PASSEIOS",
    "tours.subtitle": "Explore os três países com segurança e conforto",
    "tours.viewall": "Ver todos os passeios",

    // Countries
    "country.brazil": "BRASIL",
    "country.argentina": "ARGENTINA",
    "country.paraguay": "PARAGUAI",

    // Tour descriptions
    "tour.iguazu.br": "Lado brasileiro das famosas cataratas",
    "tour.macuco": "Aventura radical nas cataratas",
    "tour.birds": "Maior parque de aves da América Latina",
    "tour.itaipu": "Maior usina hidrelétrica do mundo",
    "tour.marco": "Encontro de Brasil, Argentina e Paraguai",
    "tour.citytour": "Templo Budista, Catedral, Mesquita",
    "tour.dreams": "Espetáculo noturno inesquecível",
    "tour.wonder": "Parque temático da região",
    "tour.itaipuland": "Parque aquático e diversão",
    "tour.iguazu.ar": "Vista panorâmica das cataratas",
    "tour.puerto": "Cidade argentina da fronteira",
    "tour.feira": "Artesanatos e produtos locais",
    "tour.wanda": "Pedras preciosas e cristais",
    "tour.shopping": "Shopping duty-free e eletrônicos",
    "tour.citytour.py": "Conheça Ciudad del Este",
    "tour.monday": "Cachoeira espetacular do Paraguai",

    // Why choose us
    "why.title": "Por que escolher a",
    "why.company": "Naturis Turismo?",
    "why.description":
      "Somos especialistas na Tríplice Fronteira! Com anos de experiência, oferecemos os melhores passeios pelos três países: Brasil, Argentina e Paraguai. Nossa equipe qualificada garante sua segurança e conforto em cada aventura, desde as majestosas Cataratas do Iguaçu até as compras no Paraguai.",
    "why.cta": "Faça sua reserva agora!",

    // Social
    "social.title": "Siga-nos nas",
    "social.subtitle": "Redes Sociais",
    "social.description": "E fique por dentro das novidades!",

    // CTA
    "cta.title": "Não perca tempo e agende",
    "cta.subtitle": "sua viagem para Foz conosco!",
    "cta.button": "Entre em contato",

    // Footer
    "footer.menu": "Menu",
    "footer.contact": "Contato:",
    "footer.social": "Redes Sociais:",
    "footer.address": "Endereço:",
    "footer.copyright":
      "© 2024 Naturis Turismo. Todos os direitos reservados. Tríplice Fronteira é nossa especialidade.",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.tours": "Excursiones",
    "nav.about": "Acerca",
    "nav.contact": "Contacto",
    "nav.reserve": "Reservar Ahora",

    // Hero
    "hero.subtitle": "Especialistas en la Triple Frontera",
    "hero.title1": "Descubre la",
    "hero.title2": "AVENTURA",
    "hero.description": "Explora las maravillas de las Cataratas del Iguazú y mucho más con seguridad y comodidad",
    "hero.cta1": "Ver Nuestras Excursiones",
    "hero.cta2": "Contáctanos",
    "hero.scroll": "Desplázate hacia abajo",

    // Company section
    "company.title": "NATURIS TURISMO",
    "company.subtitle1": "EXPERIENCIAS",
    "company.subtitle2": "ÚNICAS",
    "company.subtitle3": "EN LA TRIPLE FRONTERA!",
    "company.description":
      "Te conectamos con las maravillas naturales y culturales de tres países en un solo viaje inolvidable.",

    // Tours
    "tours.title": "Nuestras EXCURSIONES",
    "tours.subtitle": "Explora los tres países con seguridad y comodidad",
    "tours.viewall": "Ver todas las excursiones",

    // Countries
    "country.brazil": "BRASIL",
    "country.argentina": "ARGENTINA",
    "country.paraguay": "PARAGUAY",

    // Tour descriptions
    "tour.iguazu.br": "Lado brasileño de las famosas cataratas",
    "tour.macuco": "Aventura radical en las cataratas",
    "tour.birds": "Mayor parque de aves de América Latina",
    "tour.itaipu": "Mayor central hidroeléctrica del mundo",
    "tour.marco": "Encuentro de Brasil, Argentina y Paraguay",
    "tour.citytour": "Templo Budista, Catedral, Mezquita",
    "tour.dreams": "Espectáculo nocturno inolvidable",
    "tour.wonder": "Parque temático de la región",
    "tour.itaipuland": "Parque acuático y diversión",
    "tour.iguazu.ar": "Vista panorámica de las cataratas",
    "tour.puerto": "Ciudad argentina de la frontera",
    "tour.feira": "Artesanías y productos locales",
    "tour.wanda": "Piedras preciosas y cristales",
    "tour.shopping": "Shopping duty-free y electrónicos",
    "tour.citytour.py": "Conoce Ciudad del Este",
    "tour.monday": "Cascada espectacular de Paraguay",

    // Why choose us
    "why.title": "Por qué elegir",
    "why.company": "Naturis Turismo?",
    "why.description":
      "¡Somos especialistas en la Triple Frontera! Con años de experiencia, ofrecemos las mejores excursiones por los tres países: Brasil, Argentina y Paraguay. Nuestro equipo calificado garantiza tu seguridad y comodidad en cada aventura, desde las majestuosas Cataratas del Iguazú hasta las compras en Paraguay.",
    "why.cta": "¡Haz tu reserva ahora!",

    // Social
    "social.title": "Síguenos en las",
    "social.subtitle": "Redes Sociales",
    "social.description": "¡Y mantente al día con las novedades!",

    // CTA
    "cta.title": "No pierdas tiempo y agenda",
    "cta.subtitle": "tu viaje a Foz con nosotros!",
    "cta.button": "Contáctanos",

    // Footer
    "footer.menu": "Menú",
    "footer.contact": "Contacto:",
    "footer.social": "Redes Sociales:",
    "footer.address": "Dirección:",
    "footer.copyright":
      "© 2024 Naturis Turismo. Todos los derechos reservados. Triple Frontera es nuestra especialidad.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.reserve": "Book Now",

    // Hero
    "hero.subtitle": "Triple Border Specialists",
    "hero.title1": "Discover the",
    "hero.title2": "ADVENTURE",
    "hero.description": "Explore the wonders of Iguazu Falls and much more with safety and comfort",
    "hero.cta1": "See Our Tours",
    "hero.cta2": "Contact Us",
    "hero.scroll": "Scroll down",

    // Company section
    "company.title": "NATURIS TURISMO",
    "company.subtitle1": "UNIQUE",
    "company.subtitle2": "EXPERIENCES",
    "company.subtitle3": "AT THE TRIPLE BORDER!",
    "company.description":
      "We connect you to the natural and cultural wonders of three countries in one unforgettable trip.",

    // Tours
    "tours.title": "Our TOURS",
    "tours.subtitle": "Explore three countries with safety and comfort",
    "tours.viewall": "View all tours",

    // Countries
    "country.brazil": "BRAZIL",
    "country.argentina": "ARGENTINA",
    "country.paraguay": "PARAGUAY",

    // Tour descriptions
    "tour.iguazu.br": "Brazilian side of the famous falls",
    "tour.macuco": "Radical adventure at the falls",
    "tour.birds": "Largest bird park in Latin America",
    "tour.itaipu": "World's largest hydroelectric plant",
    "tour.marco": "Meeting point of Brazil, Argentina and Paraguay",
    "tour.citytour": "Buddhist Temple, Cathedral, Mosque",
    "tour.dreams": "Unforgettable night show",
    "tour.wonder": "Regional theme park",
    "tour.itaipuland": "Water park and fun",
    "tour.iguazu.ar": "Panoramic view of the falls",
    "tour.puerto": "Argentine border city",
    "tour.feira": "Crafts and local products",
    "tour.wanda": "Precious stones and crystals",
    "tour.shopping": "Duty-free shopping and electronics",
    "tour.citytour.py": "Discover Ciudad del Este",
    "tour.monday": "Spectacular waterfall in Paraguay",

    // Why choose us
    "why.title": "Why choose",
    "why.company": "Naturis Turismo?",
    "why.description":
      "We are Triple Border specialists! With years of experience, we offer the best tours through three countries: Brazil, Argentina and Paraguay. Our qualified team guarantees your safety and comfort in every adventure, from the majestic Iguazu Falls to shopping in Paraguay.",
    "why.cta": "Make your reservation now!",

    // Social
    "social.title": "Follow us on",
    "social.subtitle": "Social Media",
    "social.description": "And stay updated with the news!",

    // CTA
    "cta.title": "Don't waste time and schedule",
    "cta.subtitle": "your trip to Foz with us!",
    "cta.button": "Contact us",

    // Footer
    "footer.menu": "Menu",
    "footer.contact": "Contact:",
    "footer.social": "Social Media:",
    "footer.address": "Address:",
    "footer.copyright": "© 2024 Naturis Turismo. All rights reserved. Triple Border is our specialty.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
