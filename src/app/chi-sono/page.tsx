import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { aboutStory, philosophyQuote, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Chi sono — ${site.name}`,
  description:
    "La storia di Irina: da direzione di coro in Russia al conservatorio a 47 anni, fino alle lezioni di pianoforte in Ticino.",
  openGraph: {
    title: `Chi sono — ${site.name}`,
    description:
      "A 52 anni si può ancora mettere in gioco? Irina racconta il suo percorso verso l’insegnamento del pianoforte.",
    locale: "it_IT",
    type: "website",
    images: [{ url: aboutStory.photo, alt: aboutStory.photoAlt }],
  },
};

export default function ChiSonoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <article className="border-b border-border/60 bg-muted/15 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(16rem,22rem)_1fr] lg:items-start lg:gap-14">
            <figure className="lg:sticky lg:top-24">
              <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl border border-border/70 bg-card shadow-md lg:max-w-none">
                <Image
                  src={aboutStory.photo}
                  alt={aboutStory.photoAlt}
                  fill
                  className="photo-vibrant object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 22rem"
                  priority
                />
              </div>
            </figure>

            <div className="min-w-0">
              <SectionHeading eyebrow="Chi sono" title={site.name} />
              <h2 className="mt-8 font-heading text-3xl leading-tight text-foreground sm:text-4xl">
                {aboutStory.headline}
              </h2>
              <p className="mt-3 text-lg font-medium text-muted-foreground">
                {aboutStory.subheadline}
              </p>

              <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
                {aboutStory.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-10 rounded-2xl border border-border/80 bg-muted/30 p-6">
                <p className="font-heading text-xl leading-snug text-foreground">
                  &ldquo;{philosophyQuote}&rdquo;
                </p>
              </blockquote>

              <div className="mt-10 rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                <p className="font-heading text-xl text-foreground">{aboutStory.closingQuestion}</p>
                <p className="mt-2 text-muted-foreground">{aboutStory.closingCta}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "border border-primary/20 bg-primary/15 text-foreground hover:bg-primary/25",
                    )}
                  >
                    Instagram {site.instagramHandle}
                  </Link>
                  <Link
                    href="/#contatti"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "border-primary/20 bg-white/80 text-foreground hover:bg-muted",
                    )}
                  >
                    Prenota una lezione
                  </Link>
                </div>
              </div>

              <p className="mt-8">
                <Link
                  href="/"
                  className="text-sm font-semibold text-foreground/80 hover:text-foreground"
                >
                  ← Torna alla home
                </Link>
              </p>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
