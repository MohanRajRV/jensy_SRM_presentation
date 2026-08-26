const GROUPS = [
  {
    title: 'Programming',
    tags: ['C', 'C++', 'Java', 'Python'],
  },
  {
    title: 'Database',
    tags: ['SQL'],
  },
  {
    title: 'Web',
    tags: ['HTML'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>What I work with</h2>
          <p>
            A mix of core programming fundamentals and a growing, hands-on
            focus on AI &amp; ML tools I've used in my project work.
          </p>
        </div>

        <div className="skills-grid">
          {GROUPS.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="skill-card">
            <h3>AI / ML</h3>
            <div className="skill-tags">
              <span className="tag tag-learning">Machine Learning</span>
              <span className="tag tag-project">TensorFlow</span>
              <span className="tag tag-project">YAMNet</span>
              <span className="tag tag-project">Transfer Learning</span>
            </div>
            <p className="tag-note">solid outline = used in project · dashed = currently learning</p>
          </div>
        </div>
      </div>
    </section>
  )
}
