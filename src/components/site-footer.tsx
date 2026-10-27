import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Lezioni di musica con cura, passione e metodo.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            {site.instagramHandle}
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
        © {year} {site.name}. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
