export default function ProjectsPage() {
  return (
    <div className="card-body">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: '800', textAlign: 'left', margin: 0 }}>
          FEATURED BUILDS
        </h2>
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
  );
}
