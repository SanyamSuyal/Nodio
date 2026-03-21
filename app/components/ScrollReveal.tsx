"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
