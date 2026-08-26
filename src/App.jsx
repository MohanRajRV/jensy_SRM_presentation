import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Achievement from './components/Achievement.jsx'
import Certification from './components/Certification.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Project />
        <Achievement />
        <Certification />
      </main>
      <Footer />
    </>
  )
}

export default App
