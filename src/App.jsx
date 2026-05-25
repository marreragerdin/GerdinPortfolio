import { useState } from 'react'
import Particles from './components/Particles'
import ResumePage from './components/ResumePage'
import ProjectsPage from './components/ProjectsPage'
import IntroPage from './components/IntroPage'
import './App.css'

function App() {
  // Active layer state. Defaults to 3 (About layer on top)
  const [activeLayer, setActiveLayer] = useState(3);
  // Simple internal page state for "View More" navigation
  const [page, setPage] = useState('home');

  // Helper to determine greeting based on system hour
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning! my name is';
    } else if (hour < 18) {
      return 'Good afternoon! my name is';
    } else {
      return 'Good evening! my name is';
    }
  };

  // Deck configuration containing tab positions, styling, and content structures
  const layers = [
    {
      id: 0,
      title: 'Resume',
      class: 'card-layer card-resume',
      tabStyle: { left: '40px', width: '200px' },
      content: (
        <div className="card-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: '800', textAlign: 'left', margin: 0 }}>
              EXPERIENCE & SKILLS
            </h2>
            <button
              onClick={() => setPage('resume')}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#000000',
                background: 'transparent',
                border: 'none',
                borderBottom: '2px solid #000000',
                paddingBottom: '2px',
                cursor: 'pointer',
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              View More ↗
            </button>
          </div>

          <div className="grid-container" style={{ gridTemplateColumns: '1fr' }}>
            <div className="info-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <strong style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif' }}>Senior Full-Stack Engineer</strong>
                <span style={{ fontSize: '14px', opacity: 0.7 }}>2024 — Present</span>
              </div>
              <p style={{ fontSize: '15px' }}>
                Architected and optimized interactive data visualizers and micro-animations, improving rendering frame rates by 40% using highly focused hardware-accelerated CSS layers.
              </p>
            </div>

            <div className="info-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <strong style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif' }}>UI & Interaction Architect</strong>
                <span style={{ fontSize: '14px', opacity: 0.7 }}>2022 — 2024</span>
              </div>
              <p style={{ fontSize: '15px' }}>
                Designed premium component packages and responsive motion templates with custom magnet-based cursor interactions, resulting in over 10,000 developer installations.
              </p>
            </div>
          </div>

          <div className="info-card" style={{ marginTop: '20px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif', marginBottom: '12px' }}>CORE PROFICIENCIES</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '13px', fontFamily: 'monospace' }}>
              <span style={{ border: '1px solid #000000', padding: '6px 12px', borderRadius: '0px' }}>React.JS</span>
              <span style={{ border: '1px solid #000000', padding: '6px 12px', borderRadius: '0px' }}>Vite & Next.js</span>
              <span style={{ border: '1px solid #000000', padding: '6px 12px', borderRadius: '0px' }}>Vanilla CSS Layouts</span>
              <span style={{ border: '1px solid #000000', padding: '6px 12px', borderRadius: '0px' }}>Creative Interaction Motion</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: 'Projects',
      class: 'card-layer card-projects',
      tabStyle: { left: '280px', width: '200px' },
      content: (
        <div className="card-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: '800', textAlign: 'left', margin: 0 }}>
              FEATURED BUILDS
            </h2>
            <button
              onClick={() => setPage('projects')}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#000000',
                background: 'transparent',
                border: 'none',
                borderBottom: '2px solid #000000',
                paddingBottom: '2px',
                cursor: 'pointer',
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              View More ↗
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div className="project-item">
              <div>
                <div className="project-title">1. React Bits Interactive Components</div>
                <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>Dynamic UI toolkit designed for modern web apps.</div>
              </div>
              <span className="project-tag">NPM PACKAGE</span>
            </div>

            <div className="project-item">
              <div>
                <div className="project-title">2. Magnet Physics Animation Library</div>
                <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>Cursor tracking spring formulas for highly alive components.</div>
              </div>
              <span className="project-tag">MOTION DEV</span>
            </div>

            <div className="project-item">
              <div>
                <div className="project-title">3. Minimalist Accordion Filing System</div>
                <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>Highly aesthetic layered drawer panels in vanilla CSS.</div>
              </div>
              <span className="project-tag">ACCORDION LAYOUT</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Contact',
      class: 'card-layer card-contact',
      tabStyle: { left: '520px', width: '200px' },
      content: (
        <div className="card-body">
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: '800', textAlign: 'left', margin: '0 0 30px' }}>
            SAY HELLO
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="mailto:marreragerdin@gmail.com" className="contact-button">
              <span>Send an Email</span>
              <span>→</span>
            </a>
            <a href="https://github.com/marreragerdin" target="_blank" className="contact-button">
              <span>GitHub Profile</span>
              <span>→</span>
            </a>
            <a href="https://www.linkedin.com/in/gerdinmarrera/" target="_blank" className="contact-button">
              <span>LinkedIn Network</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'INTRO',
      class: 'card-layer card-intro',
      tabStyle: { left: '760px', width: '200px' },
      content: (
        <div className="card-body">
          <div className="editorial-subtitle" style={{ color: '#000000', marginTop: '20px' }}>
            {getGreeting()}
          </div>
          <h1 className="editorial-title">
            Gerdin Marrera
          </h1>
          <div className="editorial-subtitle" style={{ color: '#000000' }}>
            Aspiring Network Engineer
          </div>

          <div style={{ fontSize: '16px', lineHeight: '1.7', opacity: 0.85, maxWidth: '500px', margin: '0 auto', textAlign: 'center', color: '#000000' }}>
            Specializing in crafting premium, high-fidelity responsive websites with rich micro-animations, harmonized color palettes, and state-of-the-art interactive user experiences.
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '60px', opacity: 1, fontSize: '13px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px', color: '#000000' }}>
            <button
              onClick={() => setPage('intro')}
              style={{
                color: '#000000',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                letterSpacing: '2px',
                fontWeight: 700,
                padding: '12px 22px',
                textTransform: 'uppercase',
                borderRadius: '6px'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
            >
              GET TO KNOW ME MORE
            </button>
          </div>
        </div>
      )
    }
  ];

  // Render internal pages for "View More"
  if (page !== 'home') {
    return (
      <div className="portfolio-container" style={{ padding: '40px', minHeight: '100vh', background: '#fff', position: 'relative' }}>
        {/* Background particles for internal pages */}
        <Particles side="left" />
        <Particles side="right" />

        <button onClick={() => setPage('home')} style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 3, cursor: 'pointer', background: 'transparent', border: 'none', fontSize: '14px' }}>← Back</button>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {page === 'resume' && <ResumePage />}
          {page === 'projects' && <ProjectsPage />}
          {page === 'intro' && <IntroPage greeting={getGreeting()} />}
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Particles (GERDIN) on Left and Right Gutters */}
      <Particles side="left" />
      <Particles side="right" />

      <div className="portfolio-container" style={{ width: '1000px' }}>
        <div className="file-deck">
          {layers.map((layer, index) => {
            // Dynamic Top Calculation using CSS calc() to stretch natively with full 100vh height
            let topPosition = '';
            if (activeLayer === -1) {
              topPosition = `${55 + index * 45}px`;
            } else if (index < activeLayer) {
              topPosition = `${55 + index * 45}px`;
            } else if (index === activeLayer) {
              topPosition = `${55 + index * 45}px`;
            } else {
              // j > activeLayer: slide all the way to the absolute bottom edge of the screen
              topPosition = `${650 - (4 - index) * 45}px`;
            }

            return (
              <div
                key={layer.id}
                className={layer.class}
                style={{
                  top: topPosition,
                  zIndex: index + 10,
                  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Tab Header rendered cleanly exclusively by the React loop */}
                <div
                  className="card-tab"
                  style={layer.tabStyle}
                  onClick={() => setActiveLayer(prev => prev === index ? -1 : index)}
                >
                  {layer.title}
                </div>

                {/* Card Contents */}
                {layer.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default App
