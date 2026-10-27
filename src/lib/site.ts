export const site = {
  name: "Irina Tchermianina",
  shortName: "Irina",
  tagline: "Insegnante di musica",
  title: "Irina Tchermianina — Lezioni di pianoforte e musica",
  description:
    "Impara a suonare con un metodo serio ma coinvolgente. Lezioni di pianoforte per bambini, ragazzi e adulti, in studio o online.",
  instagram: "https://www.instagram.com/tchermianinairina/",
  instagramHandle: "@tchermianinairina",
  email: "info@irina-musica.it",
  phone: "+39 000 000 0000",
  city: "Italia",
} as const;

export const navItems = [
  { href: "#percorsi", label: "Percorsi" },
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#metodo", label: "Metodo" },
  { href: "#contatti", label: "Contatti" },
] as const;

export const hero = {
  eyebrow: "Lezioni di pianoforte e musica",
  title: "La musica che cresce con te",
  subtitle:
    "Dai primi anni di vita all’età adulta: percorsi personalizzati con un metodo serio ma coinvolgente, in un ambiente accogliente e stimolante.",
} as const;

export const pillars = [
  {
    title: "Un percorso su misura",
    lead: "La passione per la musica diventa esperienza, crescita e fiducia.",
    text:
      "Lezioni individuali pensate per valorizzare il talento, il piacere di suonare e il ritmo di vita di ogni allievo.",
    cta: "Scopri i percorsi",
    href: "#percorsi",
  },
  {
    title: "Tecnica e espressione",
    lead: "Solide basi musicali senza perdere la gioia di suonare.",
    text:
      "Postura, lettura, orecchio e repertorio: un equilibrio tra disciplina e creatività, come in una scuola di musica attenta alla persona.",
    cta: "Il metodo",
    href: "#metodo",
  },
  {
    title: "Musica dal vivo",
    lead: "Si cresce anche condividendo ciò che si impara.",
    text:
      "Preparazione per saggi, audizioni e piccoli concerti, con supporto nella scelta dei brani e nella gestione dell’emozione.",
    cta: "Contattami",
    href: "#contatti",
  },
] as const;

export const ageGroups = [
  {
    title: "Bambini",
    text: "Avvicinamento alla musica attraverso gioco, ritmo e ascolto. Percorsi adatti a ogni fase della crescita.",
    tone: "from-teal-500/80 to-teal-700/90",
  },
  {
    title: "Ragazzi",
    text: "Obiettivi chiari e motivazione costante: tecnica, teoria e repertorio per consolidare le competenze.",
    tone: "from-cyan-600/75 to-teal-800/90",
  },
  {
    title: "Adulti",
    text: "Non è mai troppo tardi per iniziare o riprendere. Orari flessibili e programma costruito insieme.",
    tone: "from-emerald-600/70 to-teal-900/90",
  },
  {
    title: "Online",
    text: "Lezioni a distanza con la stessa cura dello studio: ideale per chi ha poco tempo o vive lontano.",
    tone: "from-sky-600/75 to-teal-800/90",
  },
] as const;

export const offerings = [
  "Pianoforte",
  "Teoria e solfeggio",
  "Preparazione esami",
  "Musica d’insieme",
  "Prima lezione di prova",
] as const;

export const stats = [
  { value: "1:1", label: "Lezioni individuali" },
  { value: "5+", label: "Anni di didattica" },
  { value: "3", label: "Fasce d’età" },
  { value: "100%", label: "Percorso personalizzato" },
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
    text: "Postura, respirazione e movimento al pianoforte: fondamenta solide in un clima sereno.",
  },
  {
    step: "03",
    title: "Repertorio vivo",
    text: "Classici, melodie moderne e brani scelti insieme: la musica deve parlare di te.",
  },
  {
    step: "04",
    title: "Crescita continua",
    text: "Materiali di studio e feedback chiari tra un incontro e l’altro, come in una scuola che segue davvero l’allievo.",
  },
] as const;

export const aboutParagraphs = [
  "Sono Irina Tchermianina, insegnante di musica. Accompagno bambini, ragazzi e adulti nel percorso al pianoforte mettendo al centro la persona, la relazione e il valore dell’esperienza artistica.",
  "Credo che la musica sia molto più di una disciplina da apprendere: è strumento di crescita, espressione e ascolto. Per questo costruisco lezioni su obiettivi concreti, con pazienza e attenzione ai piccoli progressi.",
  "Sul profilo Instagram condivido momenti di studio, consigli pratici e la bellezza del quotidiano musicale — un modo per conoscere il mio approccio prima della prima lezione.",
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
