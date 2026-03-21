"use client";

import { FormEvent, useState } from "react";
import { MascotBuilder } from "./MascotBuilder";

export function Contribute() {
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

      const response = await fetch("/api/contributors", {
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
    <section id="contribute" className="reveal-on-scroll scroll-mt-28 pt-12 pb-24 md:pt-14 md:pb-28">
      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-medium leading-tight tracking-[-0.025em] text-white md:pr-24 md:text-5xl lg:pr-32">
          Become a storage donor.
        </h2>
        <MascotBuilder className="pointer-events-none absolute right-36 top-[-70px] hidden h-auto w-[108px] md:block lg:right-44 lg:top-[-76px] lg:w-[124px]" />
      </div>

      <div className="mt-10 border border-[#2b2b2b] p-7 md:p-10">
        <h2 className="text-3xl font-medium tracking-[-0.025em] text-white md:text-5xl">Share space. Earn monthly.</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#b5b5b5] md:text-base">
          Turn unused storage into income and help power affordable, secure storage for builders.
        </p>

        <div className="mt-9 border border-[#2b2b2b] bg-[#0a0a0a] p-4">
          <p className="eyebrow">CLI</p>
          <pre className="font-mono-geist mt-2 overflow-x-auto text-sm leading-relaxed text-white">
            <code>npx nodio-node start --storage 20gb</code>
          </pre>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <label htmlFor="contributor-email" className="sr-only">
            Contributor email address
          </label>
          <input
            id="contributor-email"
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
            className="outlined-button h-11 px-5 text-sm disabled:cursor-not-allowed disabled:border-[#2b2b2b] disabled:text-[#7d7d7d]"
          >
            {submitted ? "You are signed up" : isSubmitting ? "Saving..." : "Become a contributor"}
          </button>
        </form>

        {errorMessage ? <p className="mt-4 text-xs text-[#b5b5b5]">{errorMessage}</p> : null}

        {submitted ? <p className="mt-4 text-xs text-[#7d7d7d]">Thanks. We will reach out soon.</p> : null}
      </div>
    </section>
  );
}
