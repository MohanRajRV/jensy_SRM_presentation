export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">About</span>
          <h2>A second-year IT student building toward AI &amp; ML</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Jensy Sherine J, a B.Tech Information Technology student at
              SRM University, Trichy, currently in my 2nd year, 3rd semester.
              I'm drawn to Artificial Intelligence and Machine Learning, and
              I'm building my foundation in programming and problem-solving
              while exploring how ML models can be applied to real-world,
              sensor-driven problems.
            </p>
            <p>
              My interest in ML took a practical shape through a personal
              project on forest audio classification, where I worked with
              TensorFlow and transfer learning using YAMNet. Outside the
              classroom, I've also represented myself on stage — winning a
              district-level speech competition felt like a different kind
              of problem-solving, and I carry that same curiosity into
              everything I build.
            </p>
          </div>

          <div className="fact-list">
            <div className="fact-row">
              <span className="fact-key">College</span>
              <span className="fact-val">SRM University, Trichy</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">Degree</span>
              <span className="fact-val">B.Tech Information Technology</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">Batch</span>
              <span className="fact-val">2025 – 2029</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">Status</span>
              <span className="fact-val">2nd Year · 3rd Semester</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">CGPA</span>
              <span className="fact-val">8.70 / 10</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">Interest</span>
              <span className="fact-val">Artificial Intelligence &amp; ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
