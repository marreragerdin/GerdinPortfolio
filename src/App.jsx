import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Particles from './components/Particles'
import ResumePage from './components/ResumePage'
import ProjectsPage from './components/ProjectsPage'
import IntroPage from './components/IntroPage'
import './App.css'

const projects = [
  {
    id: 1,
    title: "1. EsCee Hub",
    description: "A web-based management system built to organize the administration of students' duty assignments and hours verification.",
    tag: "NPM PACKAGE",
    image: "/escee_hub_preview.png"
  },
  {
    id: 2,
    title: "2. EduTrack",
    description: "A web application designed to simplify the monitoring, recording, and analysis of student academic performance.",
    tag: "MOTION DEV",
    image: "/edutrack_preview.png"
  },
  {
    id: 3,
    title: "3. SatisFacts",
    description: "A web-based system designed to automate the ARTA Customer Satisfaction Survey (CSS) for the City Government of Valenzuela.",
    tag: "ACCORDION LAYOUT",
    image: "/satisfacts_preview.png"
  }
];

function App() {
  // Active layer state. Defaults to 3 (About layer on top)
  const [activeLayer, setActiveLayer] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname.substring(1) || 'home';
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [hoveredProjectRect, setHoveredProjectRect] = useState(null);

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
        <>
          <div className="flex justify-between items-center mb-[30px]">
            <h2 style={{ fontSize: '36px', fontWeight: 800, textAlign: 'left', margin: '0px' }}>
              EXPERIENCE & SKILLS
            </h2>
            <button
              onClick={() => navigate('/resume')}
              className="font-sans text-[14px] font-[700] uppercase tracking-[1px] text-black bg-transparent border-none border-b-2 border-black pb-[2px] cursor-pointer transition-opacity duration-300 hover:opacity-60"
            >
              View More ↗
            </button>
          </div>

          <div className="grid grid-cols-1 gap-[20px] mt-[30px] text-left">
            <div className="bg-white border border-black p-[24px] rounded-none transition-transform duration-300 text-black">
              <div className="flex justify-between mb-[6px]">
                <strong className="text-[18px] font-sans font-bold">Senior Full-Stack Engineer</strong>
                <span className="text-[14px] opacity-70">2024 — Present</span>
              </div>
              <p className="text-[15px] leading-[1.6] opacity-85 m-0">
                Architected and optimized interactive data visualizers and micro-animations, improving rendering frame rates by 40% using highly focused hardware-accelerated CSS layers.
              </p>
            </div>

            <div className="bg-white border border-black p-[24px] rounded-none transition-transform duration-300 text-black">
              <div className="flex justify-between mb-[6px]">
                <strong className="text-[18px] font-sans font-bold">UI & Interaction Architect</strong>
                <span className="text-[14px] opacity-70">2022 — 2024</span>
              </div>
              <p className="text-[15px] leading-[1.6] opacity-85 m-0">
                Designed premium component packages and responsive motion templates with custom magnet-based cursor interactions, resulting in over 10,000 developer installations.
              </p>
            </div>
          </div>

          <div className="bg-white border border-black p-[24px] rounded-none transition-transform duration-300 text-black mt-[20px] text-left">
            <h3 className="text-[18px] font-sans font-bold mt-0 mb-[12px]">CORE PROFICIENCIES</h3>
            <div className="flex flex-wrap gap-[10px] text-[13px] font-mono">
              <span className="border border-black px-[12px] py-[6px] rounded-none">React.JS</span>
              <span className="border border-black px-[12px] py-[6px] rounded-none">Vite & Next.js</span>
              <span className="border border-black px-[12px] py-[6px] rounded-none">Vanilla CSS Layouts</span>
              <span className="border border-black px-[12px] py-[6px] rounded-none">Creative Interaction Motion</span>
            </div>
          </div>
        </>
      )
    },
    {
      id: 1,
      title: 'Projects',
      class: 'card-layer card-projects',
      tabStyle: { left: '280px', width: '200px' },
      content: (
        <>
          <div className="flex justify-between items-center mb-[30px]">
            <h2 style={{ fontSize: '36px', fontWeight: 800, textAlign: 'left', margin: '0px' }}>
              FEATURED PROJECTS
            </h2>
            <button
              onClick={() => navigate('/projects')}
              className="font-sans text-[14px] font-[700] uppercase tracking-[1px] text-black bg-transparent border-none border-b-2 border-black pb-[2px] cursor-pointer transition-opacity duration-300 hover:opacity-60"
            >
              View More ↗
            </button>
          </div>

          <div className="flex flex-col gap-[15px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative border-b border-black py-[18px] flex justify-between items-center text-left text-black project-item"
              >
                <div>
                  <div
                    className="font-sans font-[700] text-[20px] cursor-pointer inline-block project-title"
                    onMouseEnter={(e) => {
                      setHoveredProjectId(project.id);
                      setHoveredProjectRect(e.currentTarget.closest('.project-item').getBoundingClientRect());
                    }}
                    onMouseLeave={() => {
                      setHoveredProjectId(null);
                      setHoveredProjectRect(null);
                    }}
                  >
                    {project.title}
                  </div>
                  <div className="text-[14px] opacity-80 mt-[4px]">{project.description}</div>
                </div>
                <span className="font-mono text-[13px] opacity-60 project-tag">{project.tag}</span>

                {hoveredProjectId === project.id && hoveredProjectRect && (
                  <div
                    className="comic-tooltip fixed z-[100] bg-white border border-black p-[20px] flex gap-[20px] items-center pointer-events-none text-left origin-bottom-left w-[480px] box-border"
                    style={{
                      left: `${hoveredProjectRect.left + 20}px`,
                      bottom: `${window.innerHeight - hoveredProjectRect.top + 15}px`,
                      animation: 'comicPopup 0.15s ease-out forwards'
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-[180px] h-[120px] object-cover border-2 border-black rounded-[4px] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-[800] text-[18px] text-black font-sans uppercase mb-[8px] tracking-[0.5px] truncate">
                        {project.title.substring(3)}
                      </div>
                      <div className="text-[14px] text-[#333] leading-[1.4] font-sans font-[500] break-words">
                        {project.description}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 2,
      title: 'Contact',
      class: 'card-layer card-contact',
      tabStyle: { left: '520px', width: '200px' },
      content: (
        <>
          <h2 style={{ fontSize: '36px', fontWeight: 800, textAlign: 'left', margin: '0px', marginBottom: '30px' }}>
            SAY HELLO
          </h2>

          <div className="flex flex-col gap-[10px]">
            <a href="mailto:marreragerdin@gmail.com" className="flex items-center justify-between bg-white text-black px-[24px] py-[18px] rounded-none font-sans font-[700] uppercase tracking-[1px] no-underline mb-[14px] transition-all duration-300 border border-black text-[18px] hover:bg-black hover:text-white hover:translate-x-[6px]">
              <span>Send an Email</span>
              <span>→</span>
            </a>
            <a href="https://github.com/marreragerdin" target="_blank" className="flex items-center justify-between bg-white text-black px-[24px] py-[18px] rounded-none font-sans font-[700] uppercase tracking-[1px] no-underline mb-[14px] transition-all duration-300 border border-black text-[18px] hover:bg-black hover:text-white hover:translate-x-[6px]">
              <span>GitHub Profile</span>
              <span>→</span>
            </a>
            <a href="https://www.linkedin.com/in/gerdinmarrera/" target="_blank" className="flex items-center justify-between bg-white text-black px-[24px] py-[18px] rounded-none font-sans font-[700] uppercase tracking-[1px] no-underline mb-[14px] transition-all duration-300 border border-black text-[18px] hover:bg-black hover:text-white hover:translate-x-[6px]">
              <span>LinkedIn Network</span>
              <span>→</span>
            </a>
          </div>
        </>
      )
    },
    {
      id: 3,
      title: 'INTRO',
      class: 'card-layer card-intro',
      tabStyle: { left: '760px', width: '200px' },
      content: (
        <>
          <div className="text-[20px] font-sans text-center font-[500] uppercase tracking-[3px] mb-[15px] text-black mt-[10px]">
            {getGreeting()}
          </div>
          <h1 className="editorial-title" style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '-2px', color: '#000', margin: '30px 0 10px', fontFamily: 'Montserrat, sans-serif', fontSize: '84px', fontWeight: 800, lineHeight: 0.9 }}>
            Gerdin Marrera
          </h1>
          <div className="text-[20px] font-sans text-center font-[500] uppercase tracking-[4px] mt-[10px] mb-[45px] text-black">
            Aspiring Network Engineer
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.85, maxWidth: '500px', margin: '0px auto', textAlign: 'center', color: 'rgb(0, 0, 0)' }}>
            Specializing in crafting premium, high-fidelity responsive websites with rich micro-animations, harmonized color palettes, and state-of-the-art interactive user experiences.
          </div>

          <div className="flex justify-center gap-[30px] mt-[60px] opacity-100 text-[13px] font-sans tracking-[2px] text-black">
            <button
              onClick={() => navigate('/intro')}
              className="text-black border-none cursor-pointer font-sans text-[14px] tracking-[2px] font-[700] px-[22px] py-[12px] uppercase rounded-[6px] transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px]"
            >
              GET TO KNOW ME MORE
            </button>
          </div>
        </>
      )
    }
  ];

  // Render internal pages for "View More"
  if (page !== 'home') {
    return (
      <div className={`block p-[40px] h-screen overflow-y-auto bg-white relative w-[1000px] mx-auto border-x border-black box-border ${page === 'intro' ? 'intro-page-body' : ''}`}>
        {/* Background particles for internal pages */}
        <Particles side="left" />
        <Particles side="right" />

        <button onClick={() => navigate('/')} className="absolute top-[20px] left-[20px] z-3 cursor-pointer bg-transparent border-none text-[14px]">← Back</button>
        <div className="max-w-[1000px] mx-auto w-full">
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

      <div className="flex justify-center items-end min-h-screen w-[1000px] mx-auto pb-[4vh] bg-white border-x border-black box-border">
        <div className="relative w-full h-[650px] bg-transparent overflow-visible box-border">
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
                className={`absolute left-0 w-full h-[calc(100%-45px)] transition-all duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] box-border bg-white text-black border-t border-black flex flex-col card-${layer.title.toLowerCase()}`}
                style={{
                  top: topPosition,
                  zIndex: index + 10,
                  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Tab Header rendered cleanly exclusively by the React loop */}
                <div
                  className="absolute bottom-full h-[46px] hover:h-[52px] flex items-center justify-center cursor-pointer box-border bg-white text-black border-x border-t border-black rounded-t-[12px] font-sans font-bold text-[15px] tracking-[2px] uppercase transition-all duration-300 select-none"
                  style={layer.tabStyle}
                  onClick={() => setActiveLayer(prev => prev === index ? -1 : index)}
                >
                  {layer.title}
                </div>

                {/* Card Contents */}
                <div
                  className={`flex-1 p-[40px] pt-[55px] box-border relative card-body ${activeLayer === index ? 'active-card' : ''} ${(index === 0 || index === 1) ? 'overflow-y-scroll pb-[160px]' : 'overflow-y-hidden pb-[40px]'} ${(activeLayer === index || (index === 3 && activeLayer === -1)) ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                  {layer.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default App
