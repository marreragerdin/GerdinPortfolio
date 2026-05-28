import { useState } from 'react';

const mockProjects = {
  "web & mobile": [
    {
      id: 101,
      title: "EsCee Hub Admin",
      category: "Website",
      description: "A web-based management system built to organize the administration of students' duty assignments and hours verification. The platform uses advanced tools including Geofenced QR attendance tracking, an integrated duty chatbox for communication, and automated hours verification system by a Confidence-Based Score algorithm.",
      images: ["/escee_hub_preview.png", "/escee_hub_overview.png", "/escee_hub_requests.png", "/escee_hub_create.png", "/escee_hub_record.png", "/escee_hub_details.png", "/escee_hub_departments.png", "/escee_hub_accounts.png"],
      demoUrl: "https://es-cee-hub-admin.vercel.app",
      technologies: ["React.js", "Expo", "Tailwind CSS", "Supabase"]
    },
    {
      id: 102,
      title: "EduTrack",
      category: "Website",
      description: "A web application designed to simplify the monitoring, recording, and analysis of student academic performance. It allows faculty to manage grades, student records, and reports efficiently, while enabling students to track their academic progress through a centralized online platform.",
      images: ["/edutrack_preview.png", "/edutrack_record.png", "/edutrack_score.png", "/edutrack_setup.png", "/edutrack_subject.png"],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "SQLite", "Scikit-learn"]
    },
    {
      id: 103,
      title: "SatisFacts",
      category: "Website",
      description: "Official municipal service finder and information directory built using reactive design schemas.A web-based system designed to automate the ARTA Customer Satisfaction Survey (CSS) for the City Government of Valenzuela. It allows feedback to be collected easily, ensures better data privacy, and generates accurate reports on the city government's public services.",
      images: ["/satisfacts_preview.png", "/satisfacts_homepage.png", "/satisfacts_work.png", "/satisfacts_accounts.png", "/satisfacts_support.png", "/satisfacts_survey.png", "/satisfacts_receipt.png"],
      technologies: ["HTML", "CSS", "JavaScript", "React", "MySQL", "Express.js", "Node.js"]
    },
    {
      id: 201,
      title: "EsCee Hub App",
      category: "Mobile App",
      description: "A student-facing mobile application designed to manage and verify duty operations for the EsCee Hub ecosystem. It enables students to log attendance through geofenced QR verification and real-time selfie documentation, while facilitating communication via an integrated chatbox and providing a centralized portal for compliance scheduling and required project documentation.",
      images: ["/escee_hub_app_login.jpg", "/escee_hub_app_home.jpg", "/escee_hub_app_duties.jpg", "/escee_hub_app_duty.jpg", "/escee_hub_app_progress.jpg", "/escee_hub_app_profile.jpg"],
      demoUrl: "https://escee-hub-website.vercel.app/",
      technologies: ["React Native", "Expo", "Supabase"]
    },
  ],
  multimedia: [
    {
      id: 301,
      title: "Book Cover",
      category: "Multimedia",
      description: "A striking minimalist book cover featuring a bold, high-contrast aesthetic. The design utilizes a stark black, white, and vibrant yellow color palette to depict a suspenseful noir scene, where a silhouetted figure stands in a doorway, casting a long, ominous shadow over a crime scene marked by a textured red stain.",
      images: ["/book cover.jpg"],
      technologies: ["Photoshop"]
    },
    {
      id: 302,
      title: "Minimalist Product Poster",
      category: "Multimedia",
      description: "An inviting promotional flyer for Serenora designed to encourage guests to Escape, Relax, Unwind. The visual layout highlights a tranquil resort scene featuring a swimming pool and beach.",
      images: ["minimalist product.jpg"],
      technologies: ["Photoshop"]
    },
    {
      id: 303,
      title: "Grunge Poster",
      category: "Multimedia",
      description: "A visually striking grunge-style poster with a bold, distressed aesthetic, centered around the environmental message PLANT TREES!. The design features oversized, semi-transparent typography overlaid on a textured, dark background, framing a prominent image of a tree that visually anchors the composition amidst dramatic light streaks.",
      images: ["grunge poster.jpg"],
      technologies: ["Photoshop"]
    },
    {
      id: 304,
      title: "Shed",
      category: "Multimedia",
      description: "As the director of SHED, I crafted this digital thriller to explore the unsettling intersection of identity and the permanence of our data. My goal was to visualize the claustrophobia of a protagonist who believes they have successfully erased their past, only to realize that modern technology ensures their digital footprint remains a weapon. By blending a suspenseful narrative with a gritty, glitch-filled aesthetic, I aimed to force audiences to confront the terrifying reality that even when you pay to disappear, your past never truly stops hunting you, byte by byte.",
      images: ["shed.png"],
      demoUrl: "https://youtu.be/8VznnROyvIs?si=nlYkk8Z-cZbWtkyy",
      technologies: ["Adobe After Effects", "Adobe Premiere", "Alight Motion"]
    }
  ],
  game: [
    {
      id: 401,
      title: "SINGKO O TRES",
      category: "Game",
      description: "This is a 2D side-scrolling platformer game developed in Java, featuring a charming pixel-art aesthetic. The game includes classic platforming elements like health and energy bars, environmental obstacles such as hazardous pits, and a detailed background setting, showcasing a foundational approach to game engine development and sprite-based interaction.",
      images: ["/singkootres.png"],
      technologies: ["JAVA"]
    },
    {
      id: 402,
      title: "BARIKADA: NATIONS UNITE!",
      category: "Game",
      description: "Barikada Tower Defense is a strategic spinoff title based on the original Barikada card-battle game. While the main game focuses on tactical deckbuilding inspired by Filipino history and folklore, Barikada Tower Defense reimagines these elements into a fast-paced defense strategy experience.",
      images: ["/barikada_menu.png", "/barikada_stage.png", "/barikada_game.png"],
      demoUrl: "https://toneecru.itch.io/barikada-nations-unite",
      technologies: ["Unity", "C#"]
    },
    {
      id: 403,
      title: "Accord",
      category: "Game",
      description: "Accord is an immersive, choice-based interactive narrative that draws inspiration from the suspenseful themes of slasher cinema. The gameplay centers on high-stakes moral dilemmas, where every decision shapes the story's progression and impacts the fate of the characters involved. Featuring a distinct, stylized aesthetic that bridges cinematic visuals with retro-inspired interface design, Accord challenges players to navigate a web of secrets and conflict, forcing them to balance loyalty, truth, and the weight of their own actions.",
      images: ["/accord_menu.png", "/accord_scene.png", "/accord_choice.png", "/accord_pause.png"],
      technologies: ["Unity", "C#", "Da Vinci Resolve"]
    }
  ],
  network: [
    {
      id: 501,
      title: "Simple Networking Project",
      category: "Network",
      description: "This network project demonstrates the design and implementation of an enterprise-level topology connecting two distinct departments, ACCOUNTS and DELIVERY, via a centralized router. Using the 192.168.40.0 address space, the architecture employs sub-netting to segment departmental traffic, utilizing access-layer switches for local host connectivity and a router for inter-departmental communication. Key technical competencies showcased include VLAN-like separation through subnetting, static IP allocation for host devices, precise router interface configuration, and successful end-to-end verification of packet delivery across the simulated environment.",
      images: ["/Simple Networking Project.png"],
      technologies: ["Cisco Packet Tracer"]
    },
    {
      id: 502,
      title: "Simple Office Home Office Network - SOHO",
      category: "Network",
      description: "Designed a scalable network architecture for the XYZ company's new branch, utilizing a Router-on-a-Stick topology to support three distinct departments. This solution integrates VLAN-based traffic segmentation for Admin/IT, Finance/HR, and Customer Service, combined with automated IP addressing via a router-based DHCP server and seamless wireless connectivity. The project demonstrates technical proficiency in inter-VLAN routing, Cisco hardware configuration, and the establishment of a robust, self-contained network environment.",
      images: ["Small Office Home Office Network -SOHO.png"],
      technologies: ["Cisco Packet Tracer"]
    },
    {
      id: 503,
      title: "Hotel System Network",
      category: "Network",
      description: "Designed a hierarchical, multi-floor network infrastructure for the Vic Modern Hotel, integrating eight distinct departmental VLANs across three levels. This implementation features a robust core routing architecture utilizing OSPF for dynamic path advertisement and inter-floor connectivity via serial DCE links. Key technical highlights include a Router-on-a-Stick configuration for inter-VLAN routing, centralized router-based DHCP services for automated host addressing, and secure remote management via SSH. The design further incorporates comprehensive security measures, including port security with sticky MAC learning on the IT department switch and integrated wireless access for mobile and portable devices.",
      images: ["Hotel System Network Design.png"],
      technologies: ["Cisco Packet Tracer"]
    }
  ]
};

export default function ProjectsPage() {
  const tabs = ["web & mobile", "multimedia", "game", "network"];
  const [activeTab, setActiveTab] = useState("web & mobile");
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
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-[15px] top-1/2 -translate-y-1/2 bg-white text-black border-2 border-black w-[38px] h-[38px] flex items-center justify-center rounded-full font-black text-[18px] cursor-pointer transition-all hover:scale-105 active:translate-x-[2px] z-10"
                  >
                    ‹
                  </button>
                )}

                {/* Right/Next Arrow */}
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={handleNextImage}
                    className="absolute right-[15px] top-1/2 -translate-y-1/2 bg-white text-black border-2 border-black w-[38px] h-[38px] flex items-center justify-center rounded-full font-black text-[18px] cursor-pointer transition-all hover:scale-105 active:translate-x-[-2px] z-10"
                  >
                    ›
                  </button>
                )}
              </div>

              {/* Bottom Carousel Navigation Belt */}
              {selectedProject.images.length > 1 && (
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
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
