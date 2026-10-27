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
  aboutParagraphs,
  ageGroups,
  hero,
  methodSteps,
  offerings,
  pillars,
  site,
  stats,
  testimonials,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(165deg,oklch(0.97_0.03_175)_0%,oklch(0.99_0.01_95)_45%,oklch(0.98_0.02_200)_100%)]">
          <div
            className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
            aria-hidden
          />
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                {hero.eyebrow}
              </p>
              <h1 className="mt-4 font-heading text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#contatti"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-accent text-accent-foreground hover:bg-accent/90",
                  )}
                >
                  Prima lezione di prova
                </Link>
                <Link
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  {site.instagramHandle}
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/15 bg-primary/10 shadow-xl lg:aspect-auto lg:min-h-[22rem]">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.75_0.08_175),transparent_55%),radial-gradient(circle_at_80%_80%,oklch(0.72_0.12_15),transparent_50%)]"
                aria-hidden
              />
              <div className="relative flex h-full flex-col justify-end p-8 text-white">
                <p className="text-sm font-medium uppercase tracking-widest text-white/80">
                  {site.name}
                </p>
                <p className="mt-2 max-w-sm font-heading text-2xl leading-snug">
                  Un luogo dove la passione per la musica diventa esperienza e crescita.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Perché studiare con me"
              title="Una scuola di musica intima, pensata per te"
              description="Ispirata all’accoglienza e alla chiarezza di una scuola di musica professionale, con l’attenzione che solo le lezioni individuali possono offrire."
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
                      className="text-sm font-semibold text-primary hover:text-primary/80"
                    >
                      {pillar.cta} →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="percorsi" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Percorsi per ogni età"
              title="Corsi di pianoforte e musica per ogni livello"
              description="Come in una scuola che accompagna dall’infanzia all’età adulta, con obiettivi chiari e un clima che motiva."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ageGroups.map((group) => (
                <article
                  key={group.title}
                  className="group overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm"
                >
                  <div
                    className={cn(
                      "flex h-36 items-end bg-gradient-to-br p-5 text-white",
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
                  className="rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-sm font-medium text-foreground"
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
                <p className="font-heading text-4xl text-primary sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="metodo"
          className="scroll-mt-24 bg-background py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Metodo e approccio"
              title="Imparare musica significa crescere"
              description="Uniamo tecnica, ascolto e pratica. Lo studio è serio, ma anche stimolante: ogni allievo ha un percorso personalizzato."
            />
            <ol className="mt-12 grid gap-6 md:grid-cols-2">
              {methodSteps.map((step) => (
                <li
                  key={step.step}
                  className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
                >
                  <span className="text-sm font-semibold text-accent">{step.step}</span>
                  <h3 className="mt-2 font-heading text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="chi-sono" className="scroll-mt-24 border-t border-border/60 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading eyebrow="Chi sono" title={site.name} />
              <div className="mt-6 space-y-4 text-muted-foreground">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-6 font-heading text-xl text-primary">
                La musica cresce con le persone. Questa è la mia missione.
              </p>
            </div>
            <div className="space-y-6">
              {testimonials.map((item) => (
                <blockquote
                  key={item.author}
                  className="rounded-2xl border border-border/70 bg-muted/40 p-6"
                >
                  <p className="font-heading text-lg leading-snug text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-muted-foreground">— {item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent py-14 text-accent-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/85">
                Sei pronto a suonare?
              </p>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl">Dalla prima nota in poi.</h2>
            </div>
            <Link
              href="#contatti"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-accent hover:bg-white/90",
              )}
            >
              Richiedi informazioni
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
                title="Contatti e iscrizioni"
                description="Scrivimi per una lezione di prova o per chiedere informazioni su orari, tariffe e modalità online."
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
                  <dt className="font-medium text-foreground">Telefono</dt>
                  <dd className="text-muted-foreground">{site.phone}</dd>
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
