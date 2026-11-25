import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function SiteLogo({
  className,
  priority = false,
  sizes = "80px",
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Image
        src={site.logo}
        alt={site.name}
        width={868}
        height={868}
        priority={priority}
        sizes={sizes}
        className={cn(
          "rounded-2xl object-cover shadow-sm ring-1 ring-black/5",
          className,
        )}
      />
    </Link>
  );
}
