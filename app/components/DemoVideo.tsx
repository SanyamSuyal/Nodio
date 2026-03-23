"use client";

function EnvironmentLogo() {
  return (
    <svg
      className="h-auto w-full max-w-[520px]"
      viewBox="0 0 450 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nodio Environment"
    >
      <circle cx="90" cy="80" r="48" stroke="white" strokeWidth="5" fill="none" />
      <ellipse
        cx="90"
        cy="80"
        rx="65"
        ry="26"
        stroke="white"
        strokeWidth="3"
        fill="none"
        transform="rotate(-20 90 80)"
      />

      <circle cx="75" cy="90" r="5" fill="white" />
      <circle cx="100" cy="65" r="5" fill="white" />
      <circle cx="115" cy="95" r="5" fill="white" />

      <line x1="75" y1="90" x2="100" y2="65" stroke="white" strokeWidth="4" />
      <line x1="100" y1="65" x2="115" y2="95" stroke="white" strokeWidth="4" />
      <line x1="115" y1="95" x2="75" y2="90" stroke="white" strokeWidth="4" />

      <text x="190" y="78" fill="white" fontSize="52" fontFamily="Inter, Arial, sans-serif" fontWeight="600" letterSpacing="-1">
        nodio
      </text>
      <text
        x="190"
        y="120"
        fill="white"
        fontSize="40"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="600"
        letterSpacing="-0.5"
      >
        environment
      </text>

      <circle cx="435" cy="105" r="6.5" fill="#22c55e" />
    </svg>
  );
}

function NodioCloudLogo() {
  return (
    <svg
      className="mx-auto h-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[460px]"
      viewBox="60 0 307 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nodio Cloud"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M120 95 C85 95 70 75 70 60 C70 45 85 30 105 30 C112 18 125 10 140 10 C165 10 185 28 185 50 C200 50 215 62 215 80 C215 95 200 105 180 105 H120Z"
        stroke="white"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="125" cy="55" r="5" fill="white" />
      <circle cx="160" cy="40" r="5" fill="white" />
      <circle cx="165" cy="75" r="5" fill="white" />

      <line x1="125" y1="55" x2="160" y2="40" stroke="white" strokeWidth="4" />
      <line x1="160" y1="40" x2="165" y2="75" stroke="white" strokeWidth="4" />
      <line x1="165" y1="75" x2="125" y2="55" stroke="white" strokeWidth="4" />

      <text x="240" y="65" fill="white" fontSize="46" fontFamily="Inter, Arial, sans-serif" fontWeight="600">
        nodio
      </text>
      <text x="240" y="105" fill="white" fontSize="38" fontFamily="Inter, Arial, sans-serif" fontWeight="600">
        cloud
      </text>

      <circle cx="360" cy="93" r="7" fill="#22c55e" />
    </svg>
  );
}

function NodioE2ELogo() {
  return (
    <svg
      className="mx-auto h-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[460px]"
      viewBox="45 0 270 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nodio E2E"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M95 20 L140 40 V75 C140 95 120 110 95 120 C70 110 50 95 50 75 V40 Z"
        stroke="white"
        strokeWidth="6"
        fill="none"
        strokeLinejoin="round"
      />

      <circle cx="80" cy="65" r="5" fill="white" />
      <circle cx="100" cy="50" r="5" fill="white" />
      <circle cx="110" cy="75" r="5" fill="white" />

      <line x1="80" y1="65" x2="100" y2="50" stroke="white" strokeWidth="4" />
      <line x1="100" y1="50" x2="110" y2="75" stroke="white" strokeWidth="4" />
      <line x1="110" y1="75" x2="80" y2="65" stroke="white" strokeWidth="4" />

      <text x="190" y="65" fill="white" fontSize="46" fontFamily="Inter, Arial, sans-serif" fontWeight="600">
        nodio
      </text>
      <text x="190" y="105" fill="white" fontSize="38" fontFamily="Inter, Arial, sans-serif" fontWeight="600">
        E2E
      </text>

      <circle cx="305" cy="92" r="7" fill="#22c55e" />
    </svg>
  );
}

function NodioCliLogo() {
  return (
    <svg
      className="mx-auto h-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px]"
      viewBox="15 0 250 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nodio CLI"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="20" y="20" width="90" height="80" rx="14" stroke="white" strokeWidth="6" />

      <path d="M45 50 L65 60 L45 70" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="72" y1="70" x2="90" y2="70" stroke="white" strokeWidth="6" strokeLinecap="round" />

      <text x="140" y="60" fill="white" fontSize="44" fontFamily="Inter, Arial, sans-serif" fontWeight="600">
        nodio
      </text>
      <text x="140" y="100" fill="white" fontSize="40" fontFamily="Inter, Arial, sans-serif" fontWeight="600">
        CLI
      </text>

      <circle cx="255" cy="88" r="7" fill="#22c55e" />
    </svg>
  );
}

export function DemoVideo() {
  return (
    <section className="reveal-on-scroll pt-10 pb-24 md:pt-16 md:pb-28">
      <div className="mb-12 flex justify-center px-2 md:mb-14">
        <EnvironmentLogo />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        <div className="flex min-h-[170px] items-center justify-center overflow-hidden border border-[#2b2b2b] bg-[#0f0f0f] px-3 py-5 sm:min-h-[180px] sm:px-5">
          <NodioCloudLogo />
        </div>
        <div className="flex min-h-[170px] items-center justify-center overflow-hidden border border-[#2b2b2b] bg-[#0f0f0f] px-3 py-5 sm:min-h-[180px] sm:px-5">
          <NodioE2ELogo />
        </div>
        <div className="flex min-h-[170px] items-center justify-center overflow-hidden border border-[#2b2b2b] bg-[#0f0f0f] px-3 py-5 sm:min-h-[180px] sm:px-5">
          <NodioCliLogo />
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-[#7d7d7d] sm:text-sm">
        <p className="tracking-[0.08em]">Built to run across cloud, test pipelines, and local terminal workflows.</p>
      </div>
    </section>
  );
}
