export default function ResumePage({ onViewCv }) {
  return (
    <div className="text-black">
      <div className="flex justify-end items-center mb-[30px]">
        <button
          onClick={onViewCv}
          className="font-sans text-[14px] font-[700] uppercase tracking-[1px] text-black bg-transparent border-none border-b-2 border-black pb-[2px] cursor-pointer transition-opacity duration-300 hover:opacity-60"
        >
          View CV ↗
        </button>
      </div>

      {/* Experience Section */}
      <div className="text-left mb-[45px]">
        <h3 className="text-[24px] font-sans font-extrabold uppercase tracking-[-0.5px] pb-[8px] mb-[20px]">
          Experience
        </h3>
        <div className="grid grid-cols-1 gap-[20px]">
          <div className="bg-white border-2 border-black p-[24px] rounded-none text-black transition-transform duration-300">
            <div className="flex justify-between items-start mb-[8px]">
              <strong className="text-[18px] font-sans font-bold">Assistant and Maintenance — Let’s Print It</strong>
              <span className="text-[14px] font-mono opacity-70">2020 — 2023</span>
            </div>
            <p className="text-[15px] leading-[1.6] m-0">
              Managed daily production, synchronized client communications, and optimized inventory workflows to ensure high-quality service and consistent project delivery.
            </p>
          </div>

          <div className="bg-white border-2 border-black p-[24px] rounded-none text-black transition-transform duration-300">
            <div className="flex justify-between items-start mb-[8px]">
              <strong className="text-[18px] font-sans font-bold">Assistant Quality Assurance — LikhaPay</strong>
              <span className="text-[14px] font-mono opacity-70">2025</span>
            </div>
            <p className="text-[15px] leading-[1.6] m-0">
              Validated payment workflows through rigorous quality assurance testing, resolved user-facing incidents via systematic troubleshooting, and enforced operational standards to maintain system reliability and deliver a secure, seamless billing experience.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-left mb-[40px]">
        <h3 className="text-[24px] font-sans font-extrabold uppercase tracking-[-0.5px] pb-[8px] mb-[20px]">
          Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {/* Skill Category 1 */}
          <div className="bg-white border-2 border-black p-[24px] rounded-none text-black transition-transform duration-300">
            <h4 className="text-[16px] font-sans font-extrabold uppercase mb-[15px] tracking-[0.5px]">
              Networking & Systems
            </h4>
            <div className="flex flex-wrap gap-[8px]">
              {["Cisco Packet Tracer", "Subnetting", "OSPF", "VLANs", "DHCP", "SSH", "Network Topology", "Routing & Switching"].map((skill) => (
                <span key={skill} className="border border-black px-[10px] py-[5px] rounded-none text-[12px] font-mono bg-white text-black">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skill Category 2 */}
          <div className="bg-white border-2 border-black p-[24px] rounded-none text-black transition-transform duration-300">
            <h4 className="text-[16px] font-sans font-extrabold uppercase mb-[15px] tracking-[0.5px]">
              Frontend & App Development
            </h4>
            <div className="flex flex-wrap gap-[8px]">
              {["React.js", "React Native", "Expo", "JavaScript", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"].map((skill) => (
                <span key={skill} className="border border-black px-[10px] py-[5px] rounded-none text-[12px] font-mono bg-white text-black">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skill Category 3 */}
          <div className="bg-white border-2 border-black p-[24px] rounded-none text-black transition-transform duration-300">
            <h4 className="text-[16px] font-sans font-extrabold uppercase mb-[15px] tracking-[0.5px]">
              Programming & Backend
            </h4>
            <div className="flex flex-wrap gap-[8px]">
              {["Java", "C#", "Python", "Django", "Supabase", "MySQL"].map((skill) => (
                <span key={skill} className="border border-black px-[10px] py-[5px] rounded-none text-[12px] font-mono bg-white text-black">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skill Category 4 */}
          <div className="bg-white border-2 border-black p-[24px] rounded-none text-black transition-transform duration-300">
            <h4 className="text-[16px] font-sans font-extrabold uppercase mb-[15px] tracking-[0.5px]">
              Design & Creative Media
            </h4>
            <div className="flex flex-wrap gap-[8px]">
              {["Photoshop", "Illustrator", "Canva", "Figma"].map((skill) => (
                <span key={skill} className="border border-black px-[10px] py-[5px] rounded-none text-[12px] font-mono bg-white text-black">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
