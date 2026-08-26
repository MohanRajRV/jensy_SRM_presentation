const HEIGHTS = [14, 26, 38, 20, 44, 30, 16, 40, 24, 34, 18, 28]

export default function Waveform({ className = '' }) {
  return (
    <div className={`waveform ${className}`} aria-hidden="true">
      {HEIGHTS.map((h, i) => (
        <span key={i} style={{ height: `${h}px` }} />
      ))}
    </div>
  )
}
