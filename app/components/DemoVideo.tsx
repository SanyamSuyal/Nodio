"use client";

import { useState } from "react";

function PlayOutlineIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1" width="42" height="42" rx="21" stroke="#555" strokeWidth="1.2" />
      <path d="M19 16.8L29 22L19 27.2V16.8Z" stroke="#777" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export function DemoVideo() {
  const [hasVideo, setHasVideo] = useState(false);

  return (
    <section className="fade-in fade-delay-2 mt-20 md:mt-28">
      <p className="font-mono-geist mb-4 text-xs tracking-wide text-[#555]">See it in action</p>
      <div className="relative overflow-hidden rounded-xl border border-[#222] bg-[#0d0d0d]">
        <video
          className={`w-full ${hasVideo ? "block" : "hidden"}`}
          controls
          muted
          playsInline
          onLoadedData={() => setHasVideo(true)}
          onError={() => setHasVideo(false)}
        >
          <source src="/demo.mp4" type="video/mp4" />
        </video>

        {!hasVideo ? (
          <div className="flex h-[260px] w-full items-center justify-center sm:h-[340px]">
            <div className="flex flex-col items-center gap-3">
              <PlayOutlineIcon />
              <p className="font-mono-geist text-xs text-[#555]">Demo video will appear here once uploaded.</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
