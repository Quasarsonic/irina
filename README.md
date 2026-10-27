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

Crea un repository GitHub chiamato `irina` e collega questo progetto:

```bash
git remote add github git@github.com:TUO_UTENTE/irina.git
git push -u github main
```

## Deploy su Vercel

1. Importa il repository `irina` su [vercel.com/new](https://vercel.com/new).
2. Framework: **Next.js** (rilevato automaticamente).
3. Esegui il deploy — non servono variabili d'ambiente per questa versione.

Da CLI (dopo `npx vercel login`):

```bash
npx vercel --prod
```
