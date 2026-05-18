import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { getProduct, products, wilayas, formatPrice } from "@/lib/products";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = getProduct(params.slug);
    return {
      meta: [
        { title: p ? `${p.name} — BK Deco Production` : "Produit — BK Deco Production" },
        { name: "description", content: p?.shortDescription ?? "" },
        { property: "og:title", content: p ? `${p.name} — BK Deco` : "BK Deco" },
        { property: "og:description", content: p?.shortDescription ?? "" },
        ...(p?.images[0] ? [{ property: "og:image", content: p.images[0] }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-5xl">Produit introuvable</h1>
        <Link to="/" className="eyebrow underline">Retour à la maison</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="font-serif text-3xl mb-2">Une erreur est survenue</h1>
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [product.slug]);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    wilaya: "",
    baladiya: "",
  });

  const selectedWilaya = useMemo(
    () => wilayas.find((w) => w.name === form.wilaya),
    [form.wilaya],
  );
  const delivery = selectedWilaya?.delivery ?? 0;
  const total = product.price + delivery;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || form.fullName.length < 2) return toast.error("Nom complet requis.");
    if (!/^[0-9+\s]{8,15}$/.test(form.phone)) return toast.error("Numéro de téléphone invalide.");
    if (!form.wilaya) return toast.error("Veuillez choisir une wilaya.");
    if (!form.baladiya.trim()) return toast.error("Veuillez indiquer la baladiya.");
    toast.success("Commande reçue. Nous vous contactons pour la confirmation.");
    setForm({ fullName: "", phone: "", wilaya: "", baladiya: "" });
  };

  return (
    <div className="bg-background text-foreground pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Link to="/" className="inline-flex items-center gap-2 eyebrow text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Collection
        </Link>
      </div>

      {/* GALLERY + INTRO */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-10 pb-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[4/5] bg-secondary overflow-hidden">
            <img
              src={product.images[active]}
              alt={product.name}
              className="h-full w-full object-cover transition-opacity duration-500"
              key={active}
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((src: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden border transition-all ${
                    active === i ? "border-foreground" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="space-y-4">
            <span className="eyebrow text-muted-foreground">{product.collection}</span>
            <h1 className="font-serif text-6xl md:text-7xl leading-none">{product.name}</h1>
            <p className="font-serif italic text-2xl text-muted-foreground">{product.tagline}</p>
          </div>
          <p className="leading-relaxed text-muted-foreground">{product.description}</p>
          <ul className="space-y-3 pt-4 border-t border-border">
            {product.highlights.map((h: string) => (
              <li key={h} className="flex items-start gap-3 text-sm">
                <Check className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-border flex items-end justify-between">
            <div>
              <span className="eyebrow text-muted-foreground">À partir de</span>
              <div className="font-serif text-4xl mt-1">{formatPrice(product.price)}</div>
            </div>
            <a href="#commander" className="eyebrow underline underline-offset-4">Commander ↓</a>
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="commander" className="bg-secondary px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-5xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            <span className="eyebrow text-muted-foreground">/ Commande</span>
            <h2 className="font-serif text-5xl leading-none">
              Faites entrer<br /><em className="italic">{product.name}</em><br />chez vous.
            </h2>
            <p className="text-sm text-muted-foreground pt-2">
              Remplissez le formulaire ci-dessous. Notre équipe vous contacte sous 24h pour confirmer.
            </p>
          </div>

          <form onSubmit={submit} className="lg:col-span-7 bg-background p-8 md:p-10 space-y-6">
            <Field label="Nom complet">
              <input
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="input"
                maxLength={100}
                required
              />
            </Field>
            <Field label="Numéro de téléphone">
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="input"
                placeholder="+213 ..."
                maxLength={20}
                required
              />
            </Field>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Wilaya">
                <select
                  value={form.wilaya}
                  onChange={(e) => setForm({ ...form, wilaya: e.target.value })}
                  className="input"
                  required
                >
                  <option value="">Sélectionner...</option>
                  {wilayas.map((w) => (
                    <option key={w.name} value={w.name}>
                      {w.name} — {formatPrice(w.delivery)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Baladiya (commune)">
                <input
                  value={form.baladiya}
                  onChange={(e) => setForm({ ...form, baladiya: e.target.value })}
                  className="input"
                  maxLength={80}
                  required
                />
              </Field>
            </div>

            <div className="border-t border-border pt-6 space-y-2 text-sm">
              <Row label="Produit" value={formatPrice(product.price)} />
              <Row label="Livraison" value={form.wilaya ? formatPrice(delivery) : "—"} />
              <Row label="Total" value={formatPrice(total)} bold />
            </div>

            <button
              type="submit"
              className="w-full bg-foreground text-background eyebrow py-4 hover:bg-foreground/85 transition-colors"
            >
              Confirmer la commande
            </button>
          </form>
        </div>
      </section>

      {/* MORE */}
      <section className="px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-4xl md:text-5xl">Continuer l'exploration</h2>
            <Link to="/" className="eyebrow underline underline-offset-4">Toute la collection</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {products.filter((p) => p.slug !== product.slug).map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-background space-y-1">
                    <span className="eyebrow opacity-70">{p.collection}</span>
                    <h3 className="font-serif text-3xl">{p.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="eyebrow text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "font-serif text-xl pt-2" : "text-muted-foreground"}`}>
      <span>{label}</span>
      <span className={bold ? "text-foreground" : ""}>{value}</span>
    </div>
  );
}
