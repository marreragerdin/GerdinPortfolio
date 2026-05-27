import { useState } from 'react';

const mockProjects = {
  website: [
    {
      id: 101,
      title: "EsCee Hub",
      category: "Website",
      description: "A web-based management system built to organize the administration of students' duty assignments and hours verification. The platform uses advanced tools including Geofenced QR attendance tracking, an integrated duty chatbox for communication, and automated hours verification system by a Confidence-Based Score algorithm.",
      images: ["/escee_hub_preview.png", "/escee_hub_overview.png", "/escee_hub_requests.png", "/escee_hub_create.png", "/escee_hub_record.png", "/escee_hub_details.png", "/escee_hub_departments.png", "/escee_hub_accounts.png"],
      demoUrl: "https://es-cee-hub-admin.vercel.app",
      technologies: ["React.js", "Expo", "Tailwind CSS", "Supabase"]
    },
    {
      id: 102,
      title: "EduTrack Portal",
      category: "Website",
      description: "An interactive analytics dashboard built to monitor, record, and evaluate student academic progress in real time.",
      images: ["/edutrack_preview.png", "/satisfacts_preview.png", "/escee_hub_preview.png"],
      demoUrl: "https://github.com/marreragerdin",
      technologies: ["Next.js", "Tailwind", "Firebase"]
    },
    {
      id: 103,
      title: "Valenzuela Portal",
      category: "Website",
      description: "Official municipal service finder and information directory built using reactive design schemas.",
      images: ["/satisfacts_preview.png", "/escee_hub_preview.png", "/edutrack_preview.png"],
      technologies: ["HTML5", "Sass", "JavaScript"]
    }
  ],
  "mobile app": [
    {
      id: 201,
      title: "Citizen App",
      category: "Mobile App",
      description: "A cross-platform React Native community tool for accessing local public services, announcements, and reporting systems.",
      images: ["/escee_hub_preview.png", "/edutrack_preview.png", "/satisfacts_preview.png"],
      demoUrl: "https://github.com/marreragerdin",
      technologies: ["React Native", "Expo", "Redux"]
    },
    {
      id: 202,
      title: "Studio Go",
      category: "Mobile App",
      description: "A high-fidelity mobile companion for freelance graphic designers to track project progress, invoices, and client mockups.",
      images: ["/edutrack_preview.png", "/satisfacts_preview.png", "/escee_hub_preview.png"],
      technologies: ["Flutter", "Dart", "SQLite"]
    },
    {
      id: 203,
      title: "Valenzuela Transport",
      category: "Mobile App",
      description: "Real-time navigation and shuttle booking mobile tracker tailored for urban commuters.",
      images: ["/satisfacts_preview.png", "/escee_hub_preview.png", "/edutrack_preview.png"],
      technologies: ["Kotlin", "Google Maps", "Express"]
    }
  ],
  multimedia: [
    {
      id: 301,
      title: "SatisFacts Brand",
      category: "Multimedia",
      description: "Creative visual brand kit and interactive media assets designed to modernize public feedback systems in Valenzuela.",
      images: ["/satisfacts_preview.png", "/escee_hub_preview.png", "/edutrack_preview.png"],
      technologies: ["Photoshop", "Illustrator", "Figma"]
    },
    {
      id: 302,
      title: "Motion Showreel",
      category: "Multimedia",
      description: "A premium suite of custom keyframe micro-animations, logo transitions, and interactive design prototypes.",
      images: ["/satisfacts_preview.png", "/edutrack_preview.png", "/escee_hub_preview.png"],
      technologies: ["After Effects", "Premiere Pro", "Lottie"]
    },
    {
      id: 303,
      title: "Valenzuela Identity",
      category: "Multimedia",
      description: "Comprehensive corporate identity overhaul, incorporating high-contrast vector layout designs and prints.",
      images: ["/escee_hub_preview.png", "/satisfacts_preview.png", "/edutrack_preview.png"],
      technologies: ["InDesign", "Vector", "Print"]
    }
  ],
  game: [
    {
      id: 401,
      title: "Pixel Quest",
      category: "Game",
      description: "A lightweight canvas-based WebGL game featuring rich custom graphics, scrolling backgrounds, and spring physics.",
      images: ["/edutrack_preview.png", "/escee_hub_preview.png", "/satisfacts_preview.png"],
      demoUrl: "https://github.com/marreragerdin",
      technologies: ["Three.js", "WebGL", "Physics"]
    },
    {
      id: 402,
      title: "Architect Sim",
      category: "Game",
      description: "An educational interactive networking game where players map and configure node routing topologies under budget bounds.",
      images: ["/escee_hub_preview.png", "/satisfacts_preview.png", "/edutrack_preview.png"],
      technologies: ["Unity", "C#", "Networking"]
    },
    {
      id: 403,
      title: "Space Terminal",
      category: "Game",
      description: "An 8-bit retro aesthetic sci-fi strategy game emphasizing optimal routing through node-based logic trees.",
      images: ["/satisfacts_preview.png", "/edutrack_preview.png", "/escee_hub_preview.png"],
      technologies: ["Phaser.js", "Canvas", "Audio"]
    }
  ]
};

export default function ProjectsPage() {
  const tabs = ["website", "mobile app", "multimedia", "game"];
  const [activeTab, setActiveTab] = useState("website");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div className="overflow-visible w-full text-left pt-[30px]">
      <div className="flex justify-between items-center mb-[30px]">
        <h2 style={{ fontSize: '36px', fontWeight: 800, textAlign: 'left', margin: '0px', color: '#000' }}>
          PROJECTS
        </h2>
      </div>

      {/* Tabs Menu (Space Between, No Scrollbar) */}
      <div className="flex justify-between border-b-2 border-black mb-[35px] select-none w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-[24px] py-[12px] text-[14px] font-sans font-bold uppercase tracking-[1px] border-t-2 border-x-2 border-transparent cursor-pointer rounded-t-[8px] translate-y-[2px] transition-all duration-200 ${activeTab === tab
              ? 'bg-black text-white border-black'
              : 'bg-transparent text-black hover:bg-gray-100 hover:text-black'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid Grid Layout: 3 Columns, Smaller Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] pb-[80px]">
        {mockProjects[activeTab].map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group flex flex-col bg-white border-2 border-black rounded-[8px] overflow-hidden cursor-pointer transition-all duration-300 hover:translate-y-[-4px]"
          >
            {/* Project Image Frame with Hover Overlay */}
            <div className="relative w-full h-[140px] overflow-hidden border-b-2 border-black bg-black">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-40 group-hover:scale-105"
              />
              {/* Darken Overlay and Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <span className="bg-white text-black font-sans font-extrabold text-[12px] uppercase tracking-[1px] border-2 border-black px-[14px] py-[8px] rounded-[6px] transform translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300">
                  View Project
                </span>
              </div>
            </div>

            {/* Project Copy Info */}
            <div className="p-[14px] flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-black text-white text-[9px] font-mono font-bold tracking-[1px] px-[6px] py-[3px] uppercase rounded-[3px] mb-[8px]">
                  {project.category}
                </span>
                <h3 className="text-[16px] font-sans font-extrabold text-black mt-0 mb-[6px] uppercase tracking-[-0.5px] truncate">
                  {project.title}
                </h3>
                <p className="text-[12px] text-[#444] leading-[1.5] font-sans font-[500] m-0 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup Component with Side-by-Side Split Layout */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-[20px] bg-black/60 backdrop-blur-[4px] animate-fadeIn">
          <div
            className="relative bg-white border-4 border-black w-full max-w-[1200px] rounded-[16px] overflow-hidden text-left transform scale-95 animate-scaleUp flex flex-col md:flex-row h-[680px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button at top right of the whole modal */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-[20px] right-[20px] bg-black text-white border-2 border-black w-[40px] h-[40px] flex items-center justify-center rounded-full font-bold text-[18px] cursor-pointer hover:bg-white hover:text-black transition-colors z-30"
            >
              ✕
            </button>

            {/* Left Side: Copy Info & CTA (40% width) */}
            <div className="w-full md:w-[42%] p-[40px] flex flex-col justify-between h-full bg-white box-border border-r-2 border-black">
              <div className="flex-1 flex flex-col justify-center">
                <span className="inline-block bg-black text-white text-[10px] font-mono font-bold tracking-[1.5px] px-[8px] py-[4px] uppercase rounded-[4px] w-fit mb-[25px]">
                  {selectedProject.category}
                </span>

                <h2 className="text-[36px] font-sans font-black text-black uppercase tracking-[-1px] leading-tight mt-0 mb-[20px]">
                  {selectedProject.title}
                </h2>

                <p className="text-[14px] text-[#333] leading-[1.7] font-sans font-[500] m-0 mb-[35px]">
                  {selectedProject.description}
                </p>

                {/* Dynamic Tech Pills (Unique per project entry) */}
                {selectedProject.technologies && (
                  <div className="flex flex-wrap gap-[10px] mb-[35px]">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="border border-black px-[12px] py-[6px] rounded-none text-[11px] font-mono uppercase bg-white text-black">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-[12px] mt-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-black text-white font-sans font-extrabold text-[13px] uppercase tracking-[1px] border-2 border-black px-[24px] py-[12px] rounded-[8px] cursor-pointer hover:bg-white hover:text-black transition-colors"
                >
                  Close
                </button>
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black font-sans font-extrabold text-[13px] uppercase tracking-[1px] border-2 border-black px-[24px] py-[12px] rounded-[8px] no-underline inline-block text-center hover:bg-black hover:text-white transition-colors"
                  >
                    View Live Demo ↗
                  </a>
                )}
              </div>
            </div>

            {/* Right Side: High Fidelity Slider Gallery (58% width) */}
            <div className="w-full md:w-[58%] h-full bg-white relative flex items-center justify-center p-[40px] box-border">
              {/* Slider Main View */}
              <div className="w-full h-full relative overflow-hidden rounded-[8px] border-2 border-black bg-black flex items-center justify-center">
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.title} ${activeImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Left/Prev Arrow */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-[15px] top-1/2 -translate-y-1/2 bg-white text-black border-2 border-black w-[38px] h-[38px] flex items-center justify-center rounded-full font-black text-[18px] cursor-pointer transition-all hover:scale-105 active:translate-x-[2px] z-10"
                >
                  ‹
                </button>

                {/* Right/Next Arrow */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-[15px] top-1/2 -translate-y-1/2 bg-white text-black border-2 border-black w-[38px] h-[38px] flex items-center justify-center rounded-full font-black text-[18px] cursor-pointer transition-all hover:scale-105 active:translate-x-[-2px] z-10"
                >
                  ›
                </button>
              </div>

              {/* Bottom Carousel Navigation Belt */}
              <div className="absolute bottom-[15px] left-[40px] right-[40px] flex justify-between items-center z-10 select-none">
                {/* Visual Position Pills */}
                <div className="flex gap-[8px] bg-black/40 px-[10px] py-[6px] rounded-full">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-[8px] h-[8px] rounded-full transition-all border-none cursor-pointer ${idx === activeImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                    />
                  ))}
                </div>

                {/* Position Index Number Label */}
                <div className="text-[12px] font-sans font-bold text-black/60 tracking-[0.5px]">
                  {activeImageIndex + 1} <span className="opacity-40">/</span> {selectedProject.images.length}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
