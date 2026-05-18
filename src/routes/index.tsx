import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BK Deco Production — Mobilier d'exception" },
      {
        name: "description",
        content:
          "Maison de fabrication de meubles. Salons sculpturaux, matériaux nobles, savoir-faire d'atelier.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-end flex-1">
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            <span className="eyebrow text-muted-foreground">B.K Deco Production — Atelier</span>
            <h1 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight">
              L'art<br />du <em className="italic">mobilier</em>,<br />pensé pour durer.
            </h1>
            <p className="max-w-md text-base text-muted-foreground leading-relaxed">
              Pièces sculpturales fabriquées à la main avec les meilleurs matériaux.
              Chaque salon est une signature, chaque détail une intention.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#collection"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 eyebrow hover:bg-foreground/85 transition-colors"
              >
                Découvrir la collection
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-foreground px-7 py-4 eyebrow hover:bg-foreground hover:text-background transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={products[0].images[0]} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex justify-between eyebrow text-muted-foreground">
              <span>Est. Algérie</span>
              <span>03 Pièces · 2025</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl w-full pt-12 flex items-end justify-between gap-6 border-t border-border pt-6">
          <p className="font-serif text-xl md:text-2xl max-w-xl leading-snug">
            "Inspirer chacun à devenir le créateur de son propre espace de vie."
          </p>
          <span className="eyebrow text-muted-foreground hidden md:inline">Scroll ↓</span>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="px-6 lg:px-12 py-24 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="eyebrow text-muted-foreground">/ Collection 2025</span>
              <h2 className="font-serif text-5xl md:text-7xl leading-none">
                Pièces <em className="italic">choisies</em>.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Trois modèles, trois écritures. Chacun pensé pour habiter une vie, pas seulement un salon.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group block"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  {/* soft black gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-background space-y-3">
                    <span className="eyebrow opacity-70">{p.collection}</span>
                    <h3 className="font-serif text-3xl md:text-4xl leading-tight">{p.name}</h3>
                    <p className="text-sm opacity-85 line-clamp-2 max-w-xs">{p.shortDescription}</p>
                  </div>
                  <div className="absolute top-5 right-5 h-10 w-10 flex items-center justify-center bg-background text-foreground translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-4 flex justify-between eyebrow text-muted-foreground">
                  <span>{p.tagline}</span>
                  <span>0{i + 1}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section id="philosophie" className="px-6 lg:px-12 py-24 lg:py-40 bg-secondary">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <span className="eyebrow text-muted-foreground">/ Philosophie</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-none">
              La <em className="italic">matière</em> a une voix.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8">
            <p className="font-serif text-3xl md:text-4xl leading-snug">
              Inspirer chacun à devenir le créateur de son propre espace de vie, en utilisant
              les matériaux les plus fins et les techniques les plus précises.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 pt-6 border-t border-border">
              {[
                { k: "01", t: "Matériaux nobles", d: "Bois rouge, mousses haute densité, tissus texturés." },
                { k: "02", t: "Savoir-faire", d: "Fabrication d'atelier, contrôle de chaque pièce." },
                { k: "03", t: "Garantie", d: "Éponge D36 garantie 10 ans sur nos modèles." },
              ].map((b) => (
                <div key={b.k} className="space-y-3">
                  <span className="eyebrow text-muted-foreground">{b.k}</span>
                  <h4 className="font-serif text-xl">{b.t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-24 lg:py-40">
        <div className="mx-auto max-w-7xl text-center space-y-8">
          <span className="eyebrow text-muted-foreground">/ Sur commande</span>
          <h2 className="font-serif text-5xl md:text-8xl leading-none">
            Votre salon,<br /><em className="italic">votre signature.</em>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Couleurs, dimensions, finitions — chaque détail se compose avec vous.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 eyebrow hover:bg-foreground/85 transition-colors"
            >
              Démarrer un projet
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
