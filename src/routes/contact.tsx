import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Facebook, AtSign, MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BK Deco Production" },
      { name: "description", content: "Contactez l'atelier BK Deco Production pour un projet sur mesure." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }
    toast.success("Message envoyé. Nous vous répondrons rapidement.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-background text-foreground pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <span className="eyebrow text-muted-foreground">/ Contact</span>
            <h1 className="font-serif text-5xl md:text-7xl leading-none">
              Parlons<br /><em className="italic">de votre projet.</em>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Une pièce sur mesure, une question, une commande — l'atelier vous répond.
          </p>

          <div className="space-y-6 pt-6 border-t border-border">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-1" />
              <div>
                <h4 className="eyebrow text-muted-foreground mb-1">Atelier</h4>
                <p>Alger, Algérie</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 mt-1" />
              <div>
                <h4 className="eyebrow text-muted-foreground mb-1">Téléphone</h4>
                <p>+213 000 000 000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 mt-1" />
              <div>
                <h4 className="eyebrow text-muted-foreground mb-1">Email</h4>
                <p>contact@bkdeco.dz</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="h-12 w-12 flex items-center justify-center border border-foreground hover:bg-foreground hover:text-background transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="h-12 w-12 flex items-center justify-center border border-foreground hover:bg-foreground hover:text-background transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="https://threads.net" target="_blank" rel="noreferrer" className="h-12 w-12 flex items-center justify-center border border-foreground hover:bg-foreground hover:text-background transition-colors"><AtSign className="h-4 w-4" /></a>
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-7 space-y-8 lg:pt-16">
          <Field label="Nom complet">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors"
              maxLength={100}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors"
              maxLength={150}
            />
          </Field>
          <Field label="Message">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors resize-none"
              maxLength={1500}
            />
          </Field>
          <button
            type="submit"
            className="bg-foreground text-background eyebrow px-8 py-4 hover:bg-foreground/85 transition-colors"
          >
            Envoyer le message
          </button>
        </form>
      </div>
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
