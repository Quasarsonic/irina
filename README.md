# Irina — sito per insegnante di musica

Sito Next.js in italiano per **Irina Tchermianina**, insegnante di pianoforte a Robasacco (TI). Contenuti allineati all’[annuncio su tutti.ch](https://www.tutti.ch/it/vi/ticino/musica/strumenti/lezioni-di-pianoforte/82716917) (da 50 CHF, prima lezione gratuita).

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3456](http://localhost:3456).

## Build

```bash
npm run build
npm start
```

## Personalizzazione

Modifica email, telefono e testi in `src/lib/site.ts`.

## GitHub

Repository: [Quasarsonic/irina](https://github.com/Quasarsonic/irina)

## Deploy su Vercel

**Produzione:** [irina-navy.vercel.app](https://irina-navy.vercel.app)

Il progetto è collegato a GitHub; ogni push su `main` avvia un nuovo deploy. Non servono variabili d'ambiente per questa versione.

Setup iniziale su [vercel.com/new](https://vercel.com/new) (framework **Next.js**). Da CLI:

```bash
npx vercel login
npx vercel --prod
```
