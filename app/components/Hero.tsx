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
    <section id="top" className="pt-8 pb-12 text-center md:pt-12 md:pb-16">
      <p className="eyebrow inline-flex items-center gap-3 border border-[#1f1f1f] px-4 py-2">
        <span>Early access - nodes opening soon</span>
        <span className="pulse-dot inline-flex h-2 w-2 rounded-full bg-[#4ade80]" aria-hidden="true" />
      </p>

      <h1 className="mx-auto mt-10 max-w-5xl text-4xl font-medium leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-7xl lg:text-[4.75rem]">
        Affordable cloud storage,
        <span className="block">powered by people.</span>
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#b5b5b5] md:text-xl">
        People share spare space from their laptop or phone and earn. Teams get storage at a lower cost. Nodio
        handles encryption and file splitting, so it feels simple and stays safe.
      </p>

      <form
        id="waitlist"
        onSubmit={handleSubmit}
        className="mx-auto mt-12 flex w-full max-w-2xl flex-col gap-4"
      >
        <p className="text-sm font-medium text-[#63a7ff] md:text-base">
          First 100 contributors get priority node access.
        </p>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
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
            className="h-11 w-full rounded-[4px] border border-[#2b2b2b] bg-transparent px-4 text-sm text-white outline-none transition-colors placeholder:text-[#7d7d7d] focus:border-[#63a7ff] disabled:cursor-not-allowed disabled:text-[#7d7d7d]"
          />
          <button
            type="submit"
            disabled={submitted || isSubmitting}
            className="outlined-button h-11 rounded-[4px] px-5 text-sm disabled:cursor-not-allowed disabled:border-[#2b2b2b] disabled:text-[#7d7d7d]"
          >
            {submitted ? "You are on the list" : isSubmitting ? "Saving..." : "Get early access"}
          </button>
        </div>
      </form>

      {errorMessage ? <p className="mt-4 text-xs text-[#b5b5b5]">{errorMessage}</p> : null}

      {submitted ? (
        <p className="mt-4 text-xs text-[#7d7d7d]">You are in. We will email you as spots open.</p>
      ) : null}
    </section>
  );
}
