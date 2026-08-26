export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Education</span>
          <h2>Currently pursuing</h2>
        </div>

        <div className="edu-card">
          <div className="edu-badge">SRM</div>

          <div>
            <h3 className="edu-degree">B.Tech Information Technology</h3>
            <p className="edu-college">SRM University, Trichy</p>
            <div className="edu-meta">
              <span className="pill">Batch 2025 – 2029</span>
              <span className="pill">Year 2 · Semester 3</span>
            </div>
          </div>

          <div className="edu-cgpa-block">
            <div className="num">8.70</div>
            <div className="lbl">CGPA / 10</div>
          </div>
        </div>
      </div>
    </section>
  )
}
