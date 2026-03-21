type MascotSittingProps = {
  className?: string;
};

export function MascotSitting({ className }: MascotSittingProps) {
  return (
    <svg
      viewBox="0 0 440 580"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="lG" cx="35%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#1e3c30" />
          <stop offset="100%" stopColor="#0d1a16" />
        </radialGradient>
        <radialGradient id="bellyG" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#253d32" />
          <stop offset="100%" stopColor="#111c18" />
        </radialGradient>
        <radialGradient id="antG" cx="35%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#7fffd4" />
          <stop offset="100%" stopColor="#1D9E75" />
        </radialGradient>
        <radialGradient id="eyeW" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#e8f8f2" />
          <stop offset="100%" stopColor="#b8ead8" />
        </radialGradient>
        <radialGradient id="headG" cx="25%" cy="15%" r="85%">
          <stop offset="0%" stopColor="#324a40" />
          <stop offset="100%" stopColor="#141f1c" />
        </radialGradient>
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }

          @keyframes wave {
            0%, 100% { transform: rotate(-10deg); }
            50% { transform: rotate(-45deg); }
          }

          #nodi {
            transform-origin: 220px 340px;
            animation: bounce 2.5s ease-in-out infinite;
          }

          #wavearm {
            transform-origin: 130px 348px;
            animation: wave 0.9s ease-in-out infinite;
          }
        `}</style>
      </defs>

      <g id="nodi">
        <ellipse cx="220" cy="540" rx="110" ry="12" fill="#1D9E75" opacity="0.1" />

        <ellipse cx="220" cy="415" rx="105" ry="95" fill="url(#bellyG)" stroke="#0a1a14" strokeWidth="2.5" />
        <ellipse cx="195" cy="385" rx="30" ry="18" fill="rgba(255,255,255,0.04)" />

        <ellipse cx="164" cy="500" rx="34" ry="22" fill="url(#lG)" stroke="#0a1a14" strokeWidth="2.5" />
        <ellipse cx="148" cy="500" rx="15" ry="13" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />
        <ellipse cx="168" cy="508" rx="14" ry="12" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />

        <ellipse cx="276" cy="500" rx="34" ry="22" fill="url(#lG)" stroke="#0a1a14" strokeWidth="2.5" />
        <ellipse cx="292" cy="500" rx="15" ry="13" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />
        <ellipse cx="272" cy="508" rx="14" ry="12" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />

        <path d="M 310 348 Q 338 378 346 415" stroke="#0a1a14" strokeWidth="24" strokeLinecap="round" fill="none" />
        <path d="M 310 348 Q 338 378 346 415" stroke="url(#lG)" strokeWidth="20" strokeLinecap="round" fill="none" />
        <circle cx="348" cy="428" r="20" fill="url(#lG)" stroke="#0a1a14" strokeWidth="2.5" />
        <circle cx="362" cy="420" r="9" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />
        <circle cx="366" cy="434" r="9" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />
        <circle cx="358" cy="444" r="9" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />

        <g id="wavearm">
          <path d="M 130 348 Q 102 308 84 258" stroke="#0a1a14" strokeWidth="24" strokeLinecap="round" fill="none" />
          <path d="M 130 348 Q 102 308 84 258" stroke="url(#lG)" strokeWidth="20" strokeLinecap="round" fill="none" />
          <circle cx="78" cy="243" r="22" fill="url(#lG)" stroke="#0a1a14" strokeWidth="2.5" />
          <circle cx="60" cy="230" r="10" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />
          <circle cx="73" cy="222" r="10" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />
          <circle cx="88" cy="221" r="10" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />
          <circle cx="97" cy="232" r="10" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />
        </g>

        <rect x="134" y="210" width="180" height="145" rx="34" fill="url(#headG)" stroke="#0a1a14" strokeWidth="3" />
        <path d="M 154 222 Q 224 214 312 222" stroke="rgba(255,255,255,0.09)" strokeWidth="4" fill="none" strokeLinecap="round" />

        <line x1="296" y1="242" x2="296" y2="258" stroke="#0d2218" strokeWidth="3" strokeLinecap="round" />
        <line x1="303" y1="240" x2="303" y2="260" stroke="#0d2218" strokeWidth="3" strokeLinecap="round" />
        <line x1="310" y1="238" x2="310" y2="262" stroke="#0d2218" strokeWidth="3" strokeLinecap="round" />

        <rect x="313" y="250" width="5" height="30" rx="2.5" fill="#5DCAA5" opacity="0.85" />

        <ellipse cx="182" cy="270" rx="36" ry="35" fill="url(#eyeW)" stroke="#0a1a14" strokeWidth="2.5" />
        <circle cx="182" cy="272" r="24" fill="#0a1510" />
        <circle cx="182" cy="272" r="24" fill="none" stroke="#1D9E75" strokeWidth="2.5" opacity="0.7" />
        <path d="M 170 285 Q 182 294 194 285" stroke="#1D9E75" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="170" cy="260" r="9" fill="white" opacity="0.95" />
        <circle cx="192" cy="266" r="4.5" fill="white" opacity="0.6" />

        <ellipse cx="262" cy="270" rx="36" ry="35" fill="url(#eyeW)" stroke="#0a1a14" strokeWidth="2.5" />
        <circle cx="262" cy="272" r="24" fill="#0a1510" />
        <circle cx="262" cy="272" r="24" fill="none" stroke="#1D9E75" strokeWidth="2.5" opacity="0.7" />
        <path d="M 250 285 Q 262 294 274 285" stroke="#1D9E75" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="250" cy="260" r="9" fill="white" opacity="0.95" />
        <circle cx="272" cy="266" r="4.5" fill="white" opacity="0.6" />

        <path d="M 196 310 Q 222 334 248 310" fill="#0a1510" stroke="#0a1510" strokeWidth="1" />
        <path d="M 196 310 Q 222 332 248 310" fill="none" stroke="#5DCAA5" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 200 313 Q 222 328 240 313" fill="rgba(255,255,255,0.12)" stroke="none" />

        <rect x="215" y="188" width="12" height="24" rx="6" fill="#1a2e26" stroke="#0a1a14" strokeWidth="2" />
        <circle cx="221" cy="170" r="18" fill="url(#antG)" stroke="#0a6644" strokeWidth="2.5" />
        <ellipse cx="215" cy="164" rx="6" ry="3.5" fill="rgba(255,255,255,0.5)" />
      </g>
    </svg>
  );
}
