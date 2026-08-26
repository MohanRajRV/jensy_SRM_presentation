import ForestWaveArt from './ForestWaveArt.jsx'

const TECH = ['Python', 'TensorFlow', 'YAMNet', 'Transfer Learning']

const FEATURES = [
  'Audio preprocessing of raw forest recordings',
  'Metadata-based labeling into threat / non-threat categories',
  'Dataset organization for training and evaluation',
  'Transfer learning applied on top of YAMNet to boost accuracy',
  'Exploration of real-time audio classification',
]

export default function Project() {
  return (
    <section id="project">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Project</span>
          <h2>Forest Sound Classification</h2>
          <p>A hands-on machine learning project built while learning audio classification with transfer learning.</p>
        </div>

        <div className="project-card">
          <div className="project-art">
            <ForestWaveArt />
          </div>

          <div className="project-body">
            <span className="ml-label">Machine Learning Project</span>
            <h3>Forest Sound Classification</h3>
            <p className="desc">
              Developed a machine learning solution to classify forest audio
              recordings into threat and non-threat categories. Involved
              audio preprocessing, metadata-based labeling, dataset
              organization, and model evaluation, with transfer learning
              applied via YAMNet to improve classification performance.
            </p>

            <div className="tech-badges">
              {TECH.map((t) => (
                <span className="tech-badge" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <ul className="feature-list">
              {FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <p className="project-note">Not yet published to a public repository.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
