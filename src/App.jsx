import { useState, useEffect } from 'react'
import './App.css'

const PROJECTS = [
  {
    title: "AI Interview Bot",
    description: "Voice first mock interview platform with real time AI scoring, animated interviewer orb, and detailed performance dashboards. Built to help candidates practice technical and behavioral interviews before the real thing.",
    tags: ["React", "Vite", "Web Speech API"],
    liveLink: "https://interview-bot-ivory-six.vercel.app",
    githubLink: "https://github.com/Hammad-103/interview-bot",
  },
  // Add more projects here later, the grid auto adjusts
]

const SKILLS = [
  { name: "HTML", level: "Core" },
  { name: "CSS", level: "Core" },
  { name: "JavaScript", level: "Core" },
  { name: "React Native", level: "Building" },
  { name: "Git", level: "Daily" },
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page">

      {/* Nav */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <span className="nav-logo">Hammad Ali</span>
          <div className="nav-links">
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('projects')}>Projects</button>
            <button onClick={() => scrollTo('skills')}>Skills</button>
            <button onClick={() => scrollTo('contact')} className="nav-cta">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Web App Developer</div>
          <h1 className="hero-title">
            Hammad Ali builds<br />
            web that <span className="hero-accent">closes the deal.</span>
          </h1>
          <p className="hero-sub">
            Based in Multan, Pakistan. I turn ideas into fast, scalable, pixel perfect applications, no excuses, no half measures.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              See the work
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Get in touch
            </button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
             View Resume ↗
           </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="section-label">About</div>
          <div className="about-grid">
            <h2 className="about-heading">
              I don't just write code.<br />I close deals with it.
            </h2>
            <div className="about-text">
              <p>
                I'm Hammad Ali, a web app developer based in Multan, Pakistan, and I build things that work the first time, every time.
              </p>
              <p>
                HTML, CSS, JavaScript, Data Structures & Algorithms... that's my toolkit, and I use it to build responsive, scalable web applications that actually move the needle for businesses. Clean code isn't a nice to have for me, it's the only way I operate. Pixel perfect frontends, optimized performance... that's the baseline, not the bonus.
              </p>
              <p>
                I don't chase trends, I solve problems. That's what gets me up in the morning, and if I can do it while pushing Pakistan's tech scene forward, even better.
              </p>
              <p>
                So if you've got a project worth building, or you're looking for someone who delivers instead of just talking about it, let's talk. I don't lose. I just haven't started yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <div className="section-inner">
          <div className="section-label">Projects</div>
          <h2 className="section-heading">Selected work</h2>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((tag, j) => (
                    <span className="project-tag" key={j}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live demo →
                  </a>
                  <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="project-link project-link-muted">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
            {/* Placeholder card hinting more is coming, keeps grid from feeling empty with 1 project */}
            <div className="project-card project-card-ghost">
              <div className="project-ghost-text">More projects landing soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills" id="skills">
        <div className="section-inner">
          <div className="section-label">Skills</div>
          <h2 className="section-heading">What I bring to the table</h2>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div className="skill-row" key={i}>
                <span className="skill-name">{s.name}</span>
                <span className="skill-level">{s.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="section-label">Contact</div>
          <h2 className="contact-heading">
            Got a project worth building?<br />Let's talk.
          </h2>
          <div className="contact-links">
            <a href="mailto:hammadali2037@gmail.com" className="contact-link">
              hammadali2037@gmail.com
            </a>
            <div className="contact-socials">
              <a href="https://github.com/Hammad-103" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/hammad-ali-x888/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Hammad Ali. Built with React.</span>
      </footer>

    </div>
  )
}

export default App