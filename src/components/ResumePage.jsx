export default function ResumePage() {
  return (
    <div className="text-[#333]">
      <div className="flex justify-between items-center mb-[30px]">
        <h2 style={{ fontSize: '36px', fontWeight: 800, textAlign: 'left', margin: '0px', color: '#333' }}>
          EXPERIENCE & SKILLS
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-[20px] mt-[30px] text-left">
        <div className="bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] p-[16px] rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)]">
          <div className="flex justify-between mb-[6px]">
            <strong className="text-[18px] font-sans text-[#333] font-bold">Senior Full-Stack Engineer</strong>
            <span className="text-[14px] opacity-70 text-[#666]">2024 — Present</span>
          </div>
          <p className="text-[15px] text-[#333] m-0">
            Architected and optimized interactive data visualizers and micro-animations, improving rendering frame rates by 40% using highly focused hardware-accelerated CSS layers.
          </p>
        </div>

        <div className="bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] p-[16px] rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)]">
          <div className="flex justify-between mb-[6px]">
            <strong className="text-[18px] font-sans text-[#333] font-bold">UI & Interaction Architect</strong>
            <span className="text-[14px] opacity-70 text-[#666]">2022 — 2024</span>
          </div>
          <p className="text-[15px] text-[#333] m-0">
            Designed premium component packages and responsive motion templates with custom magnet-based cursor interactions, resulting in over 10,000 developer installations.
          </p>
        </div>
      </div>

      <div className="mt-[20px] text-left bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] p-[16px] rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)]">
        <h3 className="text-[18px] font-sans mb-[12px] text-[#333] font-bold mt-0">CORE PROFICIENCIES</h3>
        <div className="flex flex-wrap gap-[10px] text-[13px] font-mono">
          <span className="border-none px-[12px] py-[6px] rounded-[6px] bg-[linear-gradient(135deg,#e9ecef_0%,#dee2e6_100%)] text-[#333] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">React.JS</span>
          <span className="border-none px-[12px] py-[6px] rounded-[6px] bg-[linear-gradient(135deg,#e9ecef_0%,#dee2e6_100%)] text-[#333] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">Vite & Next.js</span>
          <span className="border-none px-[12px] py-[6px] rounded-[6px] bg-[linear-gradient(135deg,#e9ecef_0%,#dee2e6_100%)] text-[#333] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">Vanilla CSS Layouts</span>
          <span className="border-none px-[12px] py-[6px] rounded-[6px] bg-[linear-gradient(135deg,#e9ecef_0%,#dee2e6_100%)] text-[#333] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">Creative Interaction Motion</span>
        </div>
      </div>
    </div>
  );
}
