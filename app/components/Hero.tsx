"use client";

import { FormEvent, useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting || submitted) {
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setErrorMessage(payload.message ?? "Unable to save email right now.");
        return;
      }

      setSubmitted(true);
    } catch {
      setErrorMessage("Unable to save email right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="top" className="fade-in pt-12 md:pt-20">
      <p className="font-mono-geist inline-flex items-center gap-3 rounded-full border border-[#222] px-4 py-2 text-xs tracking-wide text-[#555]">
        <span>Early access - nodes opening soon</span>
        <span className="pulse-dot inline-flex h-2 w-2 rounded-full bg-[#4ade80]" aria-hidden="true" />
      </p>

      <h1 className="mt-8 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.03em] text-white md:text-6xl">
        Storage that lives across
        <span className="block">every node.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#888] md:text-lg">
        Nodio encrypts and shards every file across a distributed edge network, so your data remains private,
        resilient, and available even when individual nodes go offline.
      </p>

      <form
        id="waitlist"
        onSubmit={handleSubmit}
        className="fade-in fade-delay-1 mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={submitted || isSubmitting}
          placeholder="you@company.com"
          className="h-11 w-full rounded-md border border-[#2a2a2a] bg-[#0f0f0f] px-4 text-sm text-white outline-none transition-colors placeholder:text-[#555] focus:border-[#444] disabled:cursor-not-allowed disabled:text-[#555]"
        />
        <button
          type="submit"
          disabled={submitted || isSubmitting}
          className="h-11 rounded-md border border-[#2a2a2a] bg-[#151515] px-5 text-sm text-white transition-colors hover:bg-[#1a1a1a] disabled:cursor-not-allowed disabled:bg-[#101010] disabled:text-[#555]"
        >
          {submitted ? "You are on the list" : isSubmitting ? "Saving..." : "Join waitlist"}
        </button>
      </form>

      {errorMessage ? <p className="font-mono-geist mt-3 text-xs text-[#888]">{errorMessage}</p> : null}

      {submitted ? (
        <p className="font-mono-geist mt-3 text-xs text-[#555]">Request received. We will invite you as nodes open.</p>
      ) : null}
    </section>
  );
}
