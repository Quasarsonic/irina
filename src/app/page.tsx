import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ageGroups,
  hero,
  methodSteps,
  offerings,
  pillars,
  site,
  stats,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[88vh] overflow-hidden">
          <Image
            src={site.heroBackground}
            alt=""
            fill
            className="object-cover object-center photo-vibrant"
            sizes="100vw"
            priority
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#f7cbe6]/85 via-[#fce8f4]/50 to-[#fef8fc]/20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,transparent_0%,#f7cbe6/20_70%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:min-h-[88vh] lg:grid-cols-[1fr_minmax(16rem,22rem)] lg:gap-12 lg:py-28">
            <div className="max-w-2xl text-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {hero.eyebrow}
              </p>
              <h1 className="mt-4 font-heading text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {hero.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-border bg-white/90 px-4 py-1.5 text-sm font-semibold text-foreground">
                  {site.trialLesson}
                </span>
                <span className="rounded-full border border-border bg-muted/80 px-4 py-1.5 text-sm font-semibold text-foreground">
                  Da {site.priceFrom}
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#contatti"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "border border-primary/20 bg-primary/15 text-foreground hover:bg-primary/25",
                  )}
                >
                  Prenota la lezione
                </Link>
                <Link
                  href="#offerta"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-primary/20 bg-white/80 text-foreground hover:bg-muted",
                  )}
                >
                  Vedi l&apos;offerta
                </Link>
              </div>
              <p className="mt-10 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {site.location}
              </p>
            </div>

            <figure className="mx-auto w-full max-w-[17rem] lg:max-w-none lg:justify-self-end">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-white/35 shadow-[0_20px_50px_-12px_rgba(74,31,48,0.55)] ring-4 ring-white/10">
                <Image
                  src={site.heroPortrait}
                  alt={`${site.name} davanti al pianoforte`}
                  fill
                  className="photo-vibrant object-cover object-top"
                  sizes="(max-width: 1024px) 17rem, 22rem"
                  priority
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="border-y border-border/60 bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Perché studiare con me"
              title="Insegnamento solido, adattato a voi"
              description="Formazione in Russia, Italia e Svizzera, con un metodo personalizzato per ogni età e livello."
              align="center"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="border-border/70 bg-card/80 shadow-sm transition-shadow hover:shadow-md"
                >
                  <CardHeader className="space-y-3">
                    <CardTitle className="font-heading text-2xl font-normal">
                      {pillar.title}
                    </CardTitle>
                    <p className="text-sm font-semibold text-secondary">{pillar.lead}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
                    <Link
                      href={pillar.href}
                      className="text-sm font-semibold text-foreground/80 hover:text-foreground"
                    >
                      {pillar.cta} →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="offerta"
          className="scroll-mt-24 border-b border-border/60 bg-muted/25 py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Offerta"
              title="Lezioni di pianoforte nel Canton Ticino"
              description="Come da annuncio su tutti.ch: lezioni per tutte le età e livelli, con la possibilità di scegliere lingua e modalità."
            />
            <Card className="border-primary/20 shadow-md">
              <CardHeader>
                <CardTitle className="font-heading text-3xl font-normal text-foreground">
                  Da {site.priceFrom}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{site.priceNote}</p>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <ul className="space-y-2 text-foreground">
                  <li>✓ {site.trialLesson}</li>
                  <li>✓ Lezioni per bambini (approccio ludico) e adulti</li>
                  <li>✓ Lingue: {site.languages.join(", ")}</li>
                  <li>✓ Modalità: {site.lessonModes.join(" · ")}</li>
                </ul>
                <Link
                  href={site.tuttiListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-foreground/80 hover:text-foreground hover:underline"
                >
                  Vedi l&apos;annuncio su tutti.ch →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="percorsi" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Percorsi"
              title="Per ogni età, livello e stile di vita"
              description="Dalle lezioni ludiche per i più piccoli all’approccio dedicato per chi inizia da adulto."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ageGroups.map((group) => (
                <article
                  key={group.title}
                  className="group overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm"
                >
                  <div
                    className={cn(
                      "flex h-36 items-end bg-gradient-to-br p-5 text-foreground",
                      group.tone,
                    )}
                  >
                    <h3 className="font-heading text-2xl">{group.title}</h3>
                  </div>
                  <p className="p-5 text-sm leading-relaxed text-muted-foreground">
                    {group.text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {offerings.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-muted/40 px-4 py-1.5 text-sm font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-muted/30 py-14">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl text-foreground sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="metodo" className="scroll-mt-24 bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Metodo e approccio"
              title="Desiderio, tempo e musica"
              description="Imparare a suonare non dipende dal talento naturale, ma dal desiderio e dal tempo che vi dedicate."
            />
            <ol className="mt-12 grid gap-6 md:grid-cols-2">
              {methodSteps.map((step) => (
                <li
                  key={step.step}
                  className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
                >
                  <span className="text-sm font-semibold text-muted-foreground">{step.step}</span>
                  <h3 className="mt-2 font-heading text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-border/60 bg-muted/20 py-14 sm:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Chi sono
              </p>
              <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
                A 52 anni si può ancora mettere in gioco?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ho rimetto in gioco i miei sogni a 47 anni. Leggi come sono arrivata
                all’insegnamento del pianoforte e perché posso essere un sostegno anche
                per chi inizia da grande.
              </p>
            </div>
            <Link
              href="/chi-sono"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-primary/20 bg-white/80 text-foreground hover:bg-muted shrink-0",
              )}
            >
              La mia storia
            </Link>
          </div>
        </section>

        <section className="border-y border-border/60 bg-muted/35 py-14 text-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {site.trialLesson}
              </p>
              <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">
                Contattatemi per prenotare la vostra lezione.
              </h2>
            </div>
            <Link
              href="#contatti"
              className={cn(
                buttonVariants({ size: "lg" }),
                "border border-primary/20 bg-primary/15 text-foreground hover:bg-primary/25",
              )}
            >
              Scrivimi
            </Link>
          </div>
        </section>

        <section
          id="contatti"
          className="scroll-mt-24 border-t border-border/60 bg-muted/20 py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contatto"
                title="Informazioni e prenotazioni"
                description="Scrivetemi per maggiori informazioni o per fissare la vostra lezione di prova gratuita."
              />
              <Separator className="my-8" />
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-foreground">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Zona lezioni</dt>
                  <dd className="text-muted-foreground">{site.location}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Instagram</dt>
                  <dd>
                    <Link
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {site.instagramHandle}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Facebook</dt>
                  <dd>
                    <Link
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {site.facebookHandle}
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
            <Card className="border-border/80 shadow-md">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-normal">Scrivimi</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
