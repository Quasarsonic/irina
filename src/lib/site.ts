export const site = {
  name: "Irina Tchermianina",
  shortName: "Irina",
  tagline: "Insegnante di pianoforte",
  title: "Irina Tchermianina — Lezioni di pianoforte nel Canton Ticino",
  description:
    "Lezioni di pianoforte per tutte le età e livelli a Robasacco (TI). Laureata in Russia, Italia e Svizzera. Prima lezione di prova gratuita, da 50 CHF.",
  location: "6599 Robasacco, Canton Ticino",
  region: "Ticino, Svizzera",
  priceFrom: "50 CHF",
  priceNote: "Tariffa indicativa per lezione — contattami per il programma adatto a te.",
  trialLesson: "Prima lezione di prova gratuita",
  instagram: "https://www.instagram.com/tchermianinairina/",
  instagramHandle: "@tchermianinairina",
  facebook: "https://www.facebook.com/irina.tchermianina?locale=it_IT",
  facebookHandle: "Irina Tchermianina",
  email: "irina.tchermianina@gmail.com",
  tuttiListing:
    "https://www.tutti.ch/it/vi/ticino/musica/strumenti/lezioni-di-pianoforte/82716917",
  languages: ["Italiano", "Russo", "Tedesco"] as const,
  lessonModes: ["A domicilio", "Presso la mia sede", "Online"] as const,
  heroBackground: "/irina-piano-2.jpg",
  heroPortrait: "/irina-hero-portrait.jpg",
} as const;

export const navItems = [
  { href: "/#offerta", label: "Offerta" },
  { href: "/#percorsi", label: "Percorsi" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/#contatti", label: "Contatti" },
] as const;

export const hero = {
  eyebrow: "Lezioni di pianoforte · Robasacco (TI)",
  title: "Vi piace il pianoforte? Imparate a suonarlo.",
  subtitle:
    "Insegnamento solido e personalizzato per ogni allievo: dalla prima lezione ludica per i più piccoli all’approccio dedicato per chi inizia da adulto.",
} as const;

export const pillars = [
  {
    title: "Formazione internazionale",
    lead: "Laureata in Russia, Italia e Svizzera.",
    text:
      "Una ricca combinazione di scuole pianistiche che permette un metodo solido, flessibile e adattato a ogni stile di apprendimento.",
    cta: "Chi sono",
    href: "/chi-sono",
  },
  {
    title: "Metodo su misura",
    lead: "Ogni allievo ha il proprio percorso.",
    text:
      "Programma di studio personalizzato in base a età, livello, obiettivi e tempo a disposizione — senza schemi rigidi.",
    cta: "L’offerta",
    href: "#offerta",
  },
  {
    title: "Dove e come volete",
    lead: "Tre lingue, tre modalità.",
    text:
      "Lezioni in italiano, russo o tedesco, a domicilio, presso la mia sede a Robasacco o comodamente online.",
    cta: "Prenota",
    href: "#contatti",
  },
] as const;

export const ageGroups = [
  {
    title: "Bambini",
    text:
      "Lezioni in forma ludica: imparare la musica giocando, con ritmo, ascolto e il piacere di scoprire il pianoforte.",
    tone: "from-[#fef8fc] to-[#f7cbe6]",
  },
  {
    title: "Ragazzi e adulti",
    text:
      "Percorsi per tutte le età e livelli, con obiettivi chiari e un approccio specifico per chi desidera iniziare anche da grande.",
    tone: "from-[#fce8f4] to-[#f0d0e4]",
  },
  {
    title: "A domicilio",
    text: "Lezioni nel comfort di casa vostra, ideali per famiglie e per chi preferisce un ambiente familiare.",
    tone: "from-[#f7cbe6]/90 to-[#fce8f4]",
  },
  {
    title: "Online",
    text:
      "Lezioni a distanza con la stessa attenzione: comode se abitate lontano o avete orari impegnativi.",
    tone: "from-[#f0d0e4] to-[#f7cbe6]",
  },
] as const;

export const offerings = [
  "Pianoforte",
  "Tutte le età",
  "Tutti i livelli",
  "IT · RU · DE",
  site.trialLesson,
  `Da ${site.priceFrom}`,
] as const;

export const stats = [
  { value: "3", label: "Paesi di formazione" },
  { value: "3", label: "Lingue di lezione" },
  { value: "50", label: "CHF / lezione da" },
  { value: "Gratis", label: "Prima lezione di prova" },
] as const;

export const methodSteps = [
  {
    step: "01",
    title: "Desiderio e tempo",
    text:
      "Imparare a suonare non dipende dal talento naturale, ma dal desiderio e dal tempo che ci si dedica.",
  },
  {
    step: "02",
    title: "Ascolto e obiettivi",
    text: "Costruiamo insieme un percorso realistico, rispettando ritmi di vita e motivazioni personali.",
  },
  {
    step: "03",
    title: "Tecnica e gioia",
    text:
      "Per i più piccoli il gioco; per gli adulti un approccio chiaro e incoraggiante — sempre con basi solide.",
  },
  {
    step: "04",
    title: "Musica che trasforma",
    text:
      "La musica ci rende più sensibili e ci regala qualcosa di prezioso e unico: è questo il cuore delle lezioni.",
  },
] as const;

export const aboutStory = {
  headline: "A 52 anni si può ancora mettere in gioco?",
  subheadline: "Io ce l’ho fatta e ti racconto la mia storia.",
  photo: "/irina-chi-sono.webp",
  photoAlt:
    "Irina, insegnante di pianoforte, seduta davanti a un pianoforte Yamaha con materiali didattici e luce naturale.",
  paragraphs: [
    "Mi chiamo Irina, sono un’insegnante di pianoforte e direttrice di coro. Ma non è sempre stato così.",
    "Ho iniziato i miei studi in Russia, specializzandomi in direzione di coro. Non ho potuto studiare pianoforte. E quando poi l’Unione Sovietica è crollata e il Muro di Berlino è caduto, mi sono trasferita in Europa, come tanti altri in quel periodo.",
    "Per molti anni ho lavorato nel settore della ristorazione. Ma il mio sogno non si è mai spento.",
    "A 47 anni ho preso una decisione importante: rimettermi in gioco e tornare a studiare. È stato un percorso impegnativo, ma la musica è la mia vita. È stata una scelta fatta con tutto il cuore.",
    "Sono riuscita a entrare in conservatorio nella facoltà di pianoforte e in tre anni ho ottenuto la laurea triennale. Ma il mio desiderio profondo era insegnare, così in Svizzera ho conseguito un ulteriore diploma: il Master in Pedagogia Musicale con la maestra Nora Doallo.",
    "È stato difficile e la paura era tanta. Come ce l’ho fatta io, potete farcela anche voi. Anche imparare da zero.",
    "Conosco da vicino le difficoltà che si incontrano quando si studia da grandi e so esattamente come superarle. Io sono un esempio di come il mio metodo e costanza possano aiutarti. E posso essere per te un sostegno come ho avuto io.",
  ],
  closingQuestion: "Vuoi scoprirlo?",
  closingCta: "Seguimi e ti mostro il mio lavoro.",
} as const;

export const philosophyQuote =
  "La musica ci trasforma, ci rende più sensibili e ci regala qualcosa di prezioso e unico.";
