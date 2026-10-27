"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type FormState = "idle" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setState("error");
      return;
    }

    const subject = encodeURIComponent(`Richiesta lezione — ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setState("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome e cognome</Label>
          <Input id="name" name="name" required placeholder="Come posso chiamarti?" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tua@email.it"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Messaggio</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Età, livello, obiettivi e giorni preferiti per le lezioni..."
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Invia richiesta
      </Button>
      {state === "success" ? (
        <p className="text-sm text-muted-foreground" role="status">
          Grazie! Si aprirà il client email con il messaggio pronto da inviare.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Compila tutti i campi prima di inviare.
        </p>
      ) : null}
    </form>
  );
}
