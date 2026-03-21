type MascotBuilderProps = {
  className?: string;
};

const BUILDER_SVG_INNER = `
<defs>
  <radialGradient id="bldLG" cx="35%" cy="25%" r="75%">
    <stop offset="0%" stop-color="#1e3c30"/>
    <stop offset="100%" stop-color="#0d1a16"/>
  </radialGradient>
  <radialGradient id="bldBellyG" cx="35%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#253d32"/>
    <stop offset="100%" stop-color="#111c18"/>
  </radialGradient>
  <radialGradient id="bldAntG" cx="35%" cy="25%" r="65%">
    <stop offset="0%" stop-color="#7fffd4"/>
    <stop offset="100%" stop-color="#1D9E75"/>
  </radialGradient>
  <radialGradient id="bldEyeW" cx="40%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#e8f8f2"/>
    <stop offset="100%" stop-color="#b8ead8"/>
  </radialGradient>
  <radialGradient id="bldHeadG" cx="25%" cy="15%" r="85%">
    <stop offset="0%" stop-color="#324a40"/>
    <stop offset="100%" stop-color="#141f1c"/>
  </radialGradient>
  <radialGradient id="bldScreenG" cx="30%" cy="25%" r="75%">
    <stop offset="0%" stop-color="#0d4a30"/>
    <stop offset="100%" stop-color="#061a10"/>
  </radialGradient>
  <style>
    @keyframes bounceBuilder {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    #builder-nodi {
      transform-origin: 220px 340px;
      animation: bounceBuilder 2.8s ease-in-out infinite;
    }
  </style>
</defs>

<g id="builder-nodi">
  <ellipse cx="220" cy="540" rx="110" ry="12" fill="#1D9E75" opacity="0.1"/>

  <ellipse cx="220" cy="415" rx="105" ry="95" fill="url(#bldBellyG)" stroke="#0a1a14" stroke-width="2.5"/>
  <ellipse cx="195" cy="385" rx="30" ry="18" fill="rgba(255,255,255,0.04)"/>

  <ellipse cx="164" cy="500" rx="34" ry="22" fill="url(#bldLG)" stroke="#0a1a14" stroke-width="2.5"/>
  <ellipse cx="148" cy="500" rx="15" ry="13" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>
  <ellipse cx="168" cy="508" rx="14" ry="12" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>

  <ellipse cx="276" cy="500" rx="34" ry="22" fill="url(#bldLG)" stroke="#0a1a14" stroke-width="2.5"/>
  <ellipse cx="292" cy="500" rx="15" ry="13" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>
  <ellipse cx="272" cy="508" rx="14" ry="12" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>

  <path d="M 130 348 Q 108 375 112 415" stroke="#0a1a14" stroke-width="24" stroke-linecap="round" fill="none"/>
  <path d="M 130 348 Q 108 375 112 415" stroke="url(#bldLG)" stroke-width="20" stroke-linecap="round" fill="none"/>
  <circle cx="114" cy="428" r="20" fill="url(#bldLG)" stroke="#0a1a14" stroke-width="2.5"/>
  <circle cx="100" cy="436" r="9" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>
  <circle cx="104" cy="447" r="9" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>
  <circle cx="115" cy="450" r="9" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>

  <path d="M 310 348 Q 332 375 328 415" stroke="#0a1a14" stroke-width="24" stroke-linecap="round" fill="none"/>
  <path d="M 310 348 Q 332 375 328 415" stroke="url(#bldLG)" stroke-width="20" stroke-linecap="round" fill="none"/>
  <circle cx="326" cy="428" r="20" fill="url(#bldLG)" stroke="#0a1a14" stroke-width="2.5"/>
  <circle cx="340" cy="436" r="9" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>
  <circle cx="336" cy="447" r="9" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>
  <circle cx="325" cy="450" r="9" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>

  <rect x="118" y="440" width="204" height="58" rx="8" fill="#1a3028" stroke="#0a1a14" stroke-width="2.5"/>
  <rect x="126" y="448" width="188" height="42" rx="5" fill="#0a1510" stroke="#0d2218" stroke-width="1"/>
  <rect x="186" y="475" width="68" height="14" rx="4" fill="#1a3028" stroke="#0d2218" stroke-width="1"/>
  <rect x="118" y="436" width="204" height="8" rx="3" fill="#1e3c30" stroke="#0a1a14" stroke-width="1.5"/>

  <rect x="134" y="195" width="180" height="145" rx="34" fill="url(#bldHeadG)" stroke="#0a1a14" stroke-width="3"/>
  <path d="M 154 207 Q 224 199 312 207" stroke="rgba(255,255,255,0.09)" stroke-width="4" fill="none" stroke-linecap="round"/>
  <line x1="296" y1="227" x2="296" y2="243" stroke="#0d2218" stroke-width="3" stroke-linecap="round"/>
  <line x1="303" y1="225" x2="303" y2="245" stroke="#0d2218" stroke-width="3" stroke-linecap="round"/>
  <line x1="310" y1="223" x2="310" y2="247" stroke="#0d2218" stroke-width="3" stroke-linecap="round"/>
  <rect x="313" y="235" width="5" height="30" rx="2.5" fill="#5DCAA5" opacity="0.85"/>

  <ellipse cx="182" cy="255" rx="36" ry="35" fill="url(#bldEyeW)" stroke="#0a1a14" stroke-width="2.5"/>
  <circle cx="182" cy="257" r="24" fill="#0a1510"/>
  <circle cx="182" cy="257" r="24" fill="none" stroke="#1D9E75" stroke-width="2.5" opacity="0.7"/>
  <path d="M 170 270 Q 182 278 194 270" stroke="#1D9E75" stroke-width="2.5" fill="none" stroke-linecap="round"/>

  <ellipse cx="262" cy="255" rx="36" ry="35" fill="url(#bldEyeW)" stroke="#0a1a14" stroke-width="2.5"/>
  <circle cx="262" cy="257" r="24" fill="#0a1510"/>
  <circle cx="262" cy="257" r="24" fill="none" stroke="#1D9E75" stroke-width="2.5" opacity="0.7"/>
  <path d="M 250 270 Q 262 278 274 270" stroke="#1D9E75" stroke-width="2.5" fill="none" stroke-linecap="round"/>

  <path d="M 200 298 Q 224 312 246 302" fill="none" stroke="#5DCAA5" stroke-width="3.5" stroke-linecap="round"/>

  <rect x="215" y="173" width="12" height="24" rx="6" fill="#1a2e26" stroke="#0a1a14" stroke-width="2"/>
  <circle cx="221" cy="155" r="18" fill="url(#bldAntG)" stroke="#0a6644" stroke-width="2.5"/>

  <rect x="120" y="290" width="200" height="150" rx="10" fill="#1a3028" stroke="#0a1a14" stroke-width="2.5"/>
  <rect x="128" y="298" width="184" height="134" rx="6" fill="url(#bldScreenG)" stroke="#0d2218" stroke-width="1"/>
  <rect x="128" y="298" width="184" height="134" rx="6" fill="none" stroke="#1D9E75" stroke-width="1" opacity="0.25"/>
  <text x="136" y="318" font-family="monospace" font-size="9" fill="#5DCAA5" opacity="0.9">&gt; nodio start</text>
  <text x="136" y="332" font-family="monospace" font-size="9" fill="#1D9E75" opacity="0.8">encrypting shards...</text>
  <text x="136" y="346" font-family="monospace" font-size="9" fill="#5DCAA5" opacity="0.7">node_07 online</text>
  <text x="136" y="360" font-family="monospace" font-size="9" fill="#5DCAA5" opacity="0.7">node_14 online</text>
  <text x="136" y="374" font-family="monospace" font-size="9" fill="#1D9E75" opacity="0.6">distributing...</text>
  <text x="136" y="388" font-family="monospace" font-size="9" fill="#7fffd4" opacity="0.9">done</text>
  <rect x="176" y="381" width="2" height="9" rx="1" fill="#7fffd4">
    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
  </rect>
</g>
`;

export function MascotBuilder({ className }: MascotBuilderProps) {
  return (
    <svg
      viewBox="0 0 440 580"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      dangerouslySetInnerHTML={{ __html: BUILDER_SVG_INNER }}
    />
  );
}
