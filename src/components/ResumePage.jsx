export default function ResumePage() {
  return (
    <div className="card-body" style={{ color: '#333' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: '800', textAlign: 'left', margin: 0, color: '#333' }}>
          EXPERIENCE & SKILLS
        </h2>
      </div>

      <div className="grid-container" style={{ gridTemplateColumns: '1fr' }}>
        <div className="info-card" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', padding: '16px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <strong style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif', color: '#333' }}>Senior Full-Stack Engineer</strong>
            <span style={{ fontSize: '14px', opacity: 0.7, color: '#666' }}>2024 — Present</span>
          </div>
          <p style={{ fontSize: '15px', color: '#333' }}>
            Architected and optimized interactive data visualizers and micro-animations, improving rendering frame rates by 40% using highly focused hardware-accelerated CSS layers.
          </p>
        </div>

        <div className="info-card" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', padding: '16px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <strong style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif', color: '#333' }}>UI & Interaction Architect</strong>
            <span style={{ fontSize: '14px', opacity: 0.7, color: '#666' }}>2022 — 2024</span>
          </div>
          <p style={{ fontSize: '15px', color: '#333' }}>
            Designed premium component packages and responsive motion templates with custom magnet-based cursor interactions, resulting in over 10,000 developer installations.
          </p>
        </div>
      </div>

      <div className="info-card" style={{ marginTop: '20px', textAlign: 'left', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', padding: '16px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)' }}>
        <h3 style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif', marginBottom: '12px', color: '#333' }}>CORE PROFICIENCIES</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '13px', fontFamily: 'monospace' }}>
          <span style={{ border: 'none', padding: '6px 12px', borderRadius: '6px', background: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)', color: '#333', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)' }}>React.JS</span>
          <span style={{ border: 'none', padding: '6px 12px', borderRadius: '6px', background: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)', color: '#333', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)' }}>Vite & Next.js</span>
          <span style={{ border: 'none', padding: '6px 12px', borderRadius: '6px', background: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)', color: '#333', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)' }}>Vanilla CSS Layouts</span>
          <span style={{ border: 'none', padding: '6px 12px', borderRadius: '6px', background: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)', color: '#333', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)' }}>Creative Interaction Motion</span>
        </div>
      </div>
    </div>
  );
}
