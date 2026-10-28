import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="border-t border-primary/20 bg-[#8f2d52] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl">{site.shortName}</p>
          <p className="mt-2 text-sm text-white/80">
            Lezioni di pianoforte a {site.location}. {site.trialLesson}, da {site.priceFrom}.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/65">
            Link rapidi
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            <li>
              <Link href="#offerta" className="hover:text-white">Offerta</Link>
            </li>
            <li>
              <Link href="#chi-sono" className="hover:text-white">Chi sono</Link>
            </li>
            <li>
              <Link href="#contatti" className="hover:text-white">Contatti</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/65">
            Contatti
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <Link
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {site.instagramHandle}
              </Link>
            </li>
            <li>
              <Link
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/65">
        © {year} {site.name}. {site.region}.
      </div>
    </footer>
  );
}
