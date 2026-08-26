import Waveform from './Waveform.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div>
          <span className="eyebrow">B.Tech Information Technology · SRM University, Trichy</span>
          <h1 className="hero-name">
            Jensy Sherine J —<br />
            learning to teach <em>machines to listen.</em>
          </h1>
          <p className="hero-tagline">
            2nd-year IT student exploring Artificial Intelligence and Machine
            Learning, currently working with audio classification models
            like YAMNet to understand sound the way a forest does.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#project">
              View my project
            </a>
            <a className="btn btn-ghost" href="#about">
              About me
            </a>
          </div>
          <Waveform className="hero-waveform" />
        </div>

        <aside className="stat-panel">
          <span className="cgpa-figure">8.70</span>
          <span className="cgpa-label">CGPA out of 10.00</span>

          <div className="stat-divider" />

          <div className="stat-row">
            <span>Degree</span>
            <span>B.Tech IT</span>
          </div>
          <div className="stat-row">
            <span>Batch</span>
            <span>2025 – 2029</span>
          </div>
          <div className="stat-row">
            <span>Currently</span>
            <span>Year 2 · Sem 3</span>
          </div>
          <div className="stat-row">
            <span>Focus area</span>
            <span>AI &amp; ML</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
