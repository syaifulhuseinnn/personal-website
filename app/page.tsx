import Image from "next/image"
import Link from "next/link"

const CONTACT_EMAIL = "hello@example.com"

const work = [
  {
    title: "Morning light, Pearl District",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    alt: "Portrait in soft morning light",
    width: 1200,
    height: 1500,
  },
  {
    title: "Still water",
    category: "Editorial",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Editorial portrait beside still water",
    width: 1200,
    height: 1500,
  },
  {
    title: "Studio study",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio portrait with natural expression",
    width: 1200,
    height: 1500,
  },
  {
    title: "Market day",
    category: "Documentary",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Candid moment at a local market",
    width: 1200,
    height: 1500,
  },
  {
    title: "Coastline",
    category: "Editorial",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    alt: "Figure along an overcast coastline",
    width: 1200,
    height: 1500,
  },
  {
    title: "Quiet afternoon",
    category: "Documentary",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    alt: "Documentary portrait in afternoon light",
    width: 1200,
    height: 1500,
  },
]

const pricing = [
  {
    name: "Portrait Session",
    price: "$450",
    description:
      "For individuals, couples, or small families who want thoughtful portraits in a relaxed setting.",
    details: [
      "Up to 60 minutes on location",
      "Pre-session planning call",
      "25 edited images in a private gallery",
      "Print release for personal use",
    ],
  },
  {
    name: "Editorial / Brand",
    price: "From $900",
    description:
      "For artists, small businesses, and publications needing images with a clear visual direction.",
    details: [
      "Half-day coverage",
      "Creative direction and shot planning",
      "40+ edited images",
      "Licensing discussed per project",
    ],
  },
  {
    name: "Event Documentary",
    price: "From $1,200",
    description:
      "For gatherings, workshops, and celebrations where the atmosphere matters as much as the moments.",
    details: [
      "Up to 4 hours of coverage",
      "Candid and detail-focused approach",
      "75+ edited images",
      "Delivery within two weeks",
    ],
  },
]

export default function Page() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#top" className="font-heading text-xl tracking-wide">
            Avery Lane
          </a>
          <nav
            aria-label="Primary"
            className="flex items-center gap-5 text-sm text-muted-foreground sm:gap-8"
          >
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {CONTACT_EMAIL}
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section
          aria-labelledby="intro-heading"
          className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 lg:py-28"
        >
          <div className="space-y-8">
            <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
              Photography · Portland, Oregon
            </p>
            <h1
              id="intro-heading"
              className="font-heading text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Photographs made with care, light, and attention.
            </h1>
            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              I’m Avery Lane, a photographer working across portrait, editorial,
              and documentary projects. I’m drawn to honest expressions, quiet
              details, and the way natural light can shape a familiar place into
              something worth remembering.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View selected work
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
              alt="Portrait photograph representing Avery Lane's work"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </section>

        <section
          id="work"
          aria-labelledby="work-heading"
          className="border-t border-border/70 bg-muted/25"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
            <div className="mb-12 max-w-2xl space-y-4">
              <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
                Selected work
              </p>
              <h2
                id="work-heading"
                className="font-heading text-4xl tracking-tight sm:text-5xl"
              >
                A small selection of recent photographs
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Each project begins with listening. The images below are
                placeholders — replace them with your own photographs to make
                this portfolio yours.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((item) => (
                <figure key={item.title} className="group space-y-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="space-y-1">
                    <p className="font-heading text-2xl leading-none">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.category}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="border-t border-border/70"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
            <div className="mb-12 max-w-2xl space-y-4">
              <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
                Pricing
              </p>
              <h2
                id="pricing-heading"
                className="font-heading text-4xl tracking-tight sm:text-5xl"
              >
                Clear starting points for common projects
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Every commission is a little different. These options offer a
                simple reference; I’m happy to tailor a quote around your
                timeline, location, and goals.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {pricing.map((tier) => (
                <article
                  key={tier.name}
                  className="flex flex-col rounded-sm border border-border bg-card p-7"
                >
                  <h3 className="font-heading text-3xl tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="mt-3 text-2xl font-medium text-foreground">
                    {tier.price}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-border pt-6 text-sm text-foreground/90">
                    {tier.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Travel outside the Portland area may include additional costs.
              Custom projects are welcome —{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                email me
              </a>{" "}
              with a few details.
            </p>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="border-t border-border/70 bg-muted/25"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
            <div className="max-w-2xl space-y-6">
              <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="font-heading text-4xl tracking-tight sm:text-5xl"
              >
                Let’s plan your session
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Share what you’re hoping to photograph, your ideal timing, and
                any references you love. I’ll reply with availability and next
                steps.
              </p>
              <p className="pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Photography%20inquiry`}
                  className="font-heading text-3xl tracking-tight text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground sm:text-4xl"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>© {new Date().getFullYear()} Avery Lane Photography</p>
          <p>
            Replace placeholder names, copy, and images before publishing. See{" "}
            <Link
              href="https://github.com/syaifulhuseinnn/personal-website/blob/main/IMAGE-REPLACEMENTS.md"
              className="underline decoration-border underline-offset-4 hover:text-foreground"
            >
              IMAGE-REPLACEMENTS.md
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
