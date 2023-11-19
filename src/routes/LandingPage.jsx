import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import '../styles/landingpage.css';
import scrollDown from '../assets/scrolldown_icon.svg';

function LandingPage() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <React.Fragment>
      <section className="landing-bg">
        <Header />
        <HeroSection />
        <div className="scroll-down" onClick={scrollToNextSection}>
          <span>Scroll</span>
          <img src={scrollDown} alt="down" />
        </div>
      </section>
      <section className='temp-section'>

      </section>
    </React.Fragment>
  );
}

export default LandingPage;
