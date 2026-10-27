export const site = {
  name: "Irina Tchermianina",
  title: "Irina Tchermianina — Insegnante di musica",
  description:
    "Lezioni di pianoforte e musica per bambini e adulti. Percorsi personalizzati, preparazione agli esami e momenti di musica dal vivo.",
  instagram: "https://www.instagram.com/tchermianinairina/",
  instagramHandle: "@tchermianinairina",
  email: "info@irina-musica.it",
  phone: "+39 000 000 0000",
  city: "Italia",
} as const;

export const navItems = [
  { href: "#servizi", label: "Servizi" },
  { href: "#metodo", label: "Metodo" },
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#contatti", label: "Contatti" },
] as const;

export const services = [
  {
    title: "Lezioni individuali",
    description:
      "Percorsi su misura per ogni età e livello: dalle prime note alla preparazione per concorsi e esami.",
    highlights: ["Pianoforte", "Teoria e solfeggio", "In studio o online"],
  },
  {
    title: "Musica per bambini",
    description:
      "Un approccio giocoso che sviluppa ritmo, orecchio e fiducia, con attenzione alla postura e all'espressione.",
    highlights: ["Dai 5 anni", "Materiali illustrati", "Piccoli obiettivi settimanali"],
  },
  {
    title: "Adulti e ritorno al pianoforte",
    description:
      "Ritrovare il piacere di suonare con un programma flessibile, adatto a chi lavora e studia.",
    highlights: ["Orari su richiesta", "Repertorio a scelta", "Nessun giudizio"],
  },
  {
    title: "Eventi e esibizioni",
    description:
      "Accompagnamento per saggi, audizioni e piccoli concerti: si cresce anche condividendo la musica.",
    highlights: ["Prove dedicate", "Scelta dei brani", "Supporto sul palco"],
  },
] as const;

export const methodSteps = [
  {
    step: "01",
    title: "Ascolto e obiettivi",
    text: "Capisco esperienze, gusti musicali e tempo disponibile per costruire un percorso realistico.",
  },
  {
    step: "02",
    title: "Tecnica con leggerezza",
    text: "Postura, respirazione e movimento al pianoforte: fondamenta solide senza perdere la gioia di suonare.",
  },
  {
    step: "03",
    title: "Repertorio vivo",
    text: "Classici, melodie moderne e brani scelti insieme: la musica deve parlare di te.",
  },
  {
    step: "04",
    title: "Crescita continua",
    text: "Registrazioni delle lezioni, materiali di studio e feedback chiari tra un incontro e l'altro.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Mia figlia aspetta la lezione di musica come un regalo. In poche settimane ha imparato a leggere le prime note con serenità.",
    author: "Elena, mamma di Sofia (8 anni)",
  },
  {
    quote:
      "Dopo anni di pausa ho ripreso il pianoforte con un metodo rispettoso dei miei tempi. Ogni lezione è motivante.",
    author: "Marco, studente adulto",
  },
] as const;
