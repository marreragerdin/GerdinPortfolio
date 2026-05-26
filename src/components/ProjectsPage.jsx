import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "1. EsCee Hub",
    description: "Dynamic UI toolkit designed for modern web apps.",
    tag: "NPM PACKAGE",
    image: "/escee_hub_preview.png"
  },
  {
    id: 2,
    title: "2. EduTrack",
    description: "Cursor tracking spring formulas for highly alive components.",
    tag: "MOTION DEV",
    image: "/edutrack_preview.png"
  },
  {
    id: 3,
    title: "3. SatisFacts",
    description: "Highly aesthetic layered drawer panels in vanilla CSS.",
    tag: "ACCORDION LAYOUT",
    image: "/satisfacts_preview.png"
  }
];

export default function ProjectsPage() {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <div className="card-body" style={{ overflow: 'visible' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: '800', textAlign: 'left', margin: 0 }}>
          FEATURED BUILDS
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            style={{ position: 'relative' }}
          >
            <div>
              <div 
                className="project-title"
                style={{ cursor: 'pointer', display: 'inline-block' }}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                {project.title}
              </div>
              <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>{project.description}</div>
            </div>
            <span className="project-tag">{project.tag}</span>

            {hoveredProjectId === project.id && (
              <div className="comic-tooltip">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '260px', height: '170px', objectFit: 'cover', border: '2px solid #000', borderRadius: '4px' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '800', fontSize: '20px', color: '#000', fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                    {project.title.substring(3)}
                  </div>
                  <div style={{ fontSize: '15px', color: '#333', lineHeight: '1.5', fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }}>
                    {project.description}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
