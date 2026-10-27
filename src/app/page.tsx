import Link from "next/link";
import { Music2, Piano, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";
import { methodSteps, services, site, testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.55_0.12_25/0.18),transparent)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <Badge variant="secondary" className="mb-6 rounded-full px-3 py-1 text-xs">
              Pianoforte · Musica · {site.city}
            </Badge>
            <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              La musica cresce con te,{" "}
              <span className="text-primary">una nota alla volta</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Sono {site.name}, insegnante di musica. Accompagno bambini e adulti nel
              percorso al pianoforte con pazienza, metodo e la stessa passione che
              condivido ogni giorno su Instagram.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#contatti" className={cn(buttonVariants({ size: "lg" }))}>
                Prima lezione di prova
              </Link>
              <Link
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Seguimi su Instagram
              </Link>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Piano, label: "Lezioni personalizzate" },
                { icon: Users, label: "Bambini e adulti" },
                { icon: Sparkles, label: "Online e in presenza" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/40 blur-2xl" />
            <Card className="relative overflow-hidden border-primary/15 bg-card/90 shadow-xl">
              <CardHeader className="space-y-2 border-b border-border/50 bg-muted/40 pb-6">
                <div className="flex items-center gap-2 text-primary">
                  <Music2 className="size-5" aria-hidden />
                  <span className="text-sm font-medium">Dal profilo Instagram</span>
                </div>
                <CardTitle className="font-heading text-2xl">Musica che si vive</CardTitle>
                <CardDescription>
                  Video di lezioni, momenti dal vivo e ispirazione quotidiana per chi
                  ama il pianoforte.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Sul mio profilo {site.instagramHandle} trovi estratti di studio,
                  consigli pratici e la gioia di suonare insieme. È il modo migliore
                  per conoscere il mio approccio prima di iniziare.
                </p>
                <Link
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
                >
                  Apri {site.instagramHandle}
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="servizi" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Servizi
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ogni percorso è diverso. Ecco come posso accompagnarti, che tu stia
              iniziando da zero o voglia perfezionare il repertorio.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="h-full border-border/80">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {service.highlights.map((item) => (
                      <li key={item}>
                        <Badge variant="outline">{item}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="metodo"
        className="scroll-mt-24 border-y border-border/60 bg-muted/25 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Il metodo
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un equilibrio tra disciplina e creatività: tecnica solida, orecchio attivo
              e repertorio che motiva settimana dopo settimana.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {methodSteps.map((step) => (
              <li
                key={step.step}
                className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm"
              >
                <span className="font-heading text-sm font-semibold text-primary">
                  {step.step}
                </span>
                <h3 className="mt-2 font-heading text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="chi-sono" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Chi sono
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Mi chiamo Irina e la musica è il linguaggio con cui accompagno le persone
                a esprimersi. Insegno con calma e attenzione, valorizzando i piccoli
                progressi tanto quanto le grandi tappe.
              </p>
              <p>
                Credo che suonare sia un gesto personale: per questo costruisco lezioni
                su obiettivi concreti, rispettando ritmi di vita, età e aspirazioni di
                ogni studente.
              </p>
              <p>
                Su Instagram condivido frammenti di studio, consigli e la bellezza del
                quotidiano musicale — un invito a restare in contatto anche fuori dallo
                studio.
              </p>
            </div>
            <Link
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "mt-8 inline-flex")}
            >
              Scopri il mio mondo su Instagram
            </Link>
          </div>
          <div className="space-y-6">
            {testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
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

      <section
        id="contatti"
        className="scroll-mt-24 border-t border-border/60 bg-muted/20 py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Contatti
            </h2>
            <p className="mt-4 text-muted-foreground">
              Scrivimi per una lezione di prova o per chiedere informazioni su orari,
              tariffe e modalità online. Rispondo entro due giorni lavorativi.
            </p>
            <Separator className="my-8" />
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-medium text-foreground">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-foreground">
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
              <CardTitle className="font-heading text-2xl">Scrivimi</CardTitle>
              <CardDescription>
                Compila il modulo: aprirà una email pronta da inviare.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
