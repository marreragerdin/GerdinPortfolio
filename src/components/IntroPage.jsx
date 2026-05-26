import profilePic from '../../images/661437239_2073039910291131_3076575125004100017_n.jpg';
import { GitHubCalendar } from 'react-github-calendar';
import TiltedCard from './TiltedCard';

export default function IntroPage({ greeting }) {
  return (
    <div style={{ background: '#fff', color: '#000', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

      <div style={{ maxWidth: '1200px', margin: '20px auto', position: 'relative', zIndex: 1 }}>
        {/* Profile and Hello Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '60px', alignItems: 'flex-start', marginBottom: '60px' }}>
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
            <h1 style={{ fontSize: '64px', fontWeight: 'bold', margin: '20px 0 20px 0', color: '#000', textAlign: 'left' }}>
              HELLO<span style={{ color: '#000' }}>!</span>
            </h1>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#000', margin: '0 0 30px 0', textAlign: 'justify' }}>
              My Name is Gerdin Marrera. I am a Information Technology in Pamantasan ng Lungsod ng Valenzuela. I have been working as a freelance graphic designer for about 5 years. I love art and visual things. I usually work on projects like branding, logo design, social media design, poster design, and layouting. I am passionate about pushing the boundaries of design and exploring new skills.
            </p>

            {/* Contact Buttons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="mailto:marreragerdin@gmail.com" style={{ background: '#000', color: '#fff', padding: '8px 14px', borderRadius: '20px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', display: 'inline-block', border: 'none', cursor: 'pointer' }}>marreragerdin@gmail.com</a>
              <a href="tel:+639458536282" style={{ background: '#000', color: '#fff', padding: '8px 14px', borderRadius: '20px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', display: 'inline-block', border: 'none', cursor: 'pointer' }}>(+63) 945-853-6282</a>
            </div>
          </div>
        </div>

        {/* Education and Hobbies Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* Education Card */}
          <div className="info-card" style={{ padding: '20px' }}>
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#000', margin: 0 }}>Education</h3>
            </div>
            <div style={{ paddingLeft: '15px' }}>
              <p style={{ fontSize: '13px', color: '#666', margin: '0 0 8px 0', fontWeight: 'bold' }}>2023 - Present</p>
              <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#000', margin: '0 0 5px 0' }}>Pamantasan ng Lungsod ng Valenzuela</p>
              <p style={{ fontSize: '14px', color: '#333', margin: 0 }}>Bachelor of Science in Information Technology</p>
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="info-card" style={{ padding: '20px' }}>
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#000', margin: 0 }}>Hobbies</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>• Photography and visual storytelling</li>
              <li style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>• Exploring new design trends and tools</li>
              <li style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>• Creating digital art and illustrations</li>
              <li style={{ fontSize: '14px', color: '#333' }}>• Collaborating with creative communities</li>
            </ul>
          </div>
        </div>

        {/* GitHub Contributions Calendar */}
        <div className="info-card" style={{ marginTop: '30px', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#000', marginBottom: '20px', fontFamily: 'Montserrat, sans-serif' }}>
            GitHub Contributions
          </h3>
          <div style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
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
