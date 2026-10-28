import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="border-t border-border/80 bg-muted/25 text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl text-foreground">{site.shortName}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Lezioni di pianoforte a {site.location}. {site.trialLesson}, da {site.priceFrom}.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Link rapidi
          </p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/90">
            <li>
              <Link href="#offerta" className="hover:text-foreground/70">
                Offerta
              </Link>
            </li>
            <li>
              <Link href="#chi-sono" className="hover:text-foreground/70">
                Chi sono
              </Link>
            </li>
            <li>
              <Link href="#contatti" className="hover:text-foreground/70">
                Contatti
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contatti
          </p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/90">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-foreground/70">
                {site.email}
              </a>
            </li>
            <li>
              <Link
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground/70"
              >
                {site.instagramHandle}
              </Link>
            </li>
            <li>
              <Link
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground/70"
              >
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {year} {site.name}. {site.region}.
      </div>
    </footer>
  );
}
