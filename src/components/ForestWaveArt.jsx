export default function ForestWaveArt() {
  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" role="img" aria-label="Illustration of a forest silhouette with an audio waveform, representing the Forest Sound Classification project">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b3826" />
          <stop offset="100%" stopColor="#0d1f16" />
        </linearGradient>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#efc36a" />
          <stop offset="100%" stopColor="#e2a83f" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="400" height="300" fill="url(#skyGrad)" />

      {/* moon / sensor dot */}
      <circle cx="320" cy="60" r="26" fill="#efc36a" opacity="0.9" />

      {/* back tree layer */}
      <g fill="#3f6552" opacity="0.55">
        <polygon points="40,190 70,120 100,190" />
        <polygon points="90,200 125,110 160,200" />
        <polygon points="150,195 180,130 210,195" />
        <polygon points="260,198 292,128 324,198" />
        <polygon points="310,195 345,115 380,195" />
      </g>

      {/* front tree layer */}
      <g fill="#3f6552">
        <polygon points="10,220 45,140 80,220" />
        <polygon points="70,225 110,125 150,225" />
        <polygon points="200,222 235,145 270,222" />
        <polygon points="255,225 300,130 345,225" />
        <polygon points="330,220 365,150 400,220" />
      </g>

      {/* ground */}
      <rect x="0" y="218" width="400" height="82" fill="#12291d" />

      {/* waveform reading the forest */}
      <g fill="url(#barGrad)">
        <rect x="60" y="245" width="8" height="18" rx="3" />
        <rect x="76" y="230" width="8" height="33" rx="3" />
        <rect x="92" y="210" width="8" height="53" rx="3" />
        <rect x="108" y="238" width="8" height="25" rx="3" />
        <rect x="124" y="196" width="8" height="67" rx="3" />
        <rect x="140" y="220" width="8" height="43" rx="3" />
        <rect x="156" y="205" width="8" height="58" rx="3" />
        <rect x="172" y="242" width="8" height="21" rx="3" />
        <rect x="188" y="215" width="8" height="48" rx="3" />
        <rect x="204" y="232" width="8" height="31" rx="3" />
        <rect x="220" y="198" width="8" height="65" rx="3" />
        <rect x="236" y="225" width="8" height="38" rx="3" />
        <rect x="252" y="240" width="8" height="23" rx="3" />
        <rect x="268" y="212" width="8" height="51" rx="3" />
        <rect x="284" y="233" width="8" height="30" rx="3" />
        <rect x="300" y="248" width="8" height="15" rx="3" />
      </g>
    </svg>
  )
}
