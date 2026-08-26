export default function Achievement() {
  return (
    <section id="achievement">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Achievement</span>
          <h2>Beyond the classroom</h2>
        </div>

        <div className="achieve-card">
          <div className="achieve-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.6 5.27 5.82.85-4.21 4.1 1 5.8L12 15.27 6.79 18l1-5.8-4.21-4.1 5.82-.85L12 2z"
                fill="#0d1f16"
              />
            </svg>
          </div>

          <div>
            <h3 className="achieve-title">District-Level Speech Competition — Winner</h3>
            <p className="achieve-desc">
              Won a district-level speech competition, recognized for public
              speaking and confident communication skills. The award was
              presented by the Thanjavur District Collector.
            </p>
            <div className="achieve-perks">
              <span className="perk-chip">Cash Prize</span>
              <span className="perk-chip">Certificate</span>
              <span className="perk-chip">Awarded by Thanjavur District Collector</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
