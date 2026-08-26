import { useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#project', label: 'Project' },
  { href: '#achievement', label: 'Achievement' },
  { href: '#certification', label: 'Certification' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="container">
        <a href="#top" className="nav-logo">
          Jensy<span>.</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className="nav-cgpa">CGPA 8.70</span>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  )
}
