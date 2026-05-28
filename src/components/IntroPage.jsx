import profilePic from '../../images/661437239_2073039910291131_3076575125004100017_n.jpg';
import { GitHubCalendar } from 'react-github-calendar';
import TiltedCard from './TiltedCard';

export default function IntroPage({ greeting }) {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="max-w-[1200px] mx-auto my-[20px] pt-[30px] relative z-1">
        {/* Profile and Hello Section */}
        <div className="grid grid-cols-[320px_1fr] gap-[60px] items-start mb-[60px]">
          {/* Left Column - Profile Photo */}
          <div>
            <TiltedCard
              imageSrc={profilePic}
              altText="Gerdin Marrera"
              captionText="Gerdin Marrera"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
            />
          </div>

          {/* Right Column - Hello, Description and Contact */}
          <div>
            <h1 className="text-[64px] font-[900] !mt-0 !mb-0 !my-0 !mx-0 text-black text-left leading-none tracking-[-1.5px]">
              HELLO<span className="text-black">!</span>
            </h1>
            <p className="text-[15px] leading-[1.8] text-black mt-[10px] mr-0 mb-[20px] ml-0 text-justify">
              I am Gerdin Marrera, an Information Technology student at Pamantasan ng Lungsod ng Valenzuela. I am passionate to enhance my technical pursuits as an aspiring network engineer, where I aim to blend aesthetic precision with robust, reliable system architecture to push the boundaries of my work and continuously explore new skills.
            </p>

            {/* Contact Buttons */}
            <div className="flex gap-[12px] flex-wrap mt-[20px]">
              <a href="mailto:marreragerdin@gmail.com" className="bg-black text-white px-[20px] py-[10px] rounded-[24px] no-underline text-[12px] font-bold inline-block border-none cursor-pointer tracking-[0.5px] hover:opacity-80 transition-opacity">marreragerdin@gmail.com</a>
              <a href="tel:+639458536282" className="bg-black text-white px-[20px] py-[10px] rounded-[24px] no-underline text-[12px] font-bold inline-block border-none cursor-pointer tracking-[0.5px] hover:opacity-80 transition-opacity">(+63) 945-853-6282</a>
            </div>
          </div>
        </div>

        {/* Education and Hobbies Cards */}
        <div className="grid grid-cols-2 gap-[30px]">
          {/* Education Card */}
          <div className="bg-white border border-black p-[20px] rounded-none transition-transform duration-300 text-black">
            <div className="mb-[15px]">
              <h3 className="text-[18px] font-bold text-black m-0">Education</h3>
            </div>
            <div className="pl-[15px]">
              <p className="text-[13px] text-[#666] m-0 mb-[8px] font-bold">2023 - Present</p>
              <p className="text-[15px] font-bold text-black m-0 mb-[5px]">Pamantasan ng Lungsod ng Valenzuela</p>
              <p className="text-[14px] text-[#333] m-0">Bachelor of Science in Information Technology</p>
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="bg-white border border-black p-[20px] rounded-none transition-transform duration-300 text-black">
            <div className="mb-[15px]">
              <h3 className="text-[18px] font-bold text-black m-0">Hobbies</h3>
            </div>
            <ul className="list-none p-0 m-0">
              <li className="text-[14px] text-[#333] mb-[8px]">• Gaming</li>
              <li className="text-[14px] text-[#333] mb-[8px]">• Cubing</li>
              <li className="text-[14px] text-[#333] mb-[8px]">• Watching Movies</li>
            </ul>
          </div>
        </div>

        {/* GitHub Contributions Calendar */}
        <div className="bg-white border border-black p-[30px] rounded-none transition-transform duration-300 text-black mt-[30px] flex flex-col items-center">
          <h3 className="text-[18px] font-bold text-black mb-[20px] font-sans">
            GitHub Contributions
          </h3>
          <div className="w-full overflow-x-auto flex justify-center">
            <GitHubCalendar
              username="marreragerdin"
              year={new Date().getFullYear()}
              colorScheme="light"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
