import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import useScroll from '../helpers/LandingScroll'
import '../styles/landingpage.css'
import scrollDown from '../assets/scrolldown_icon.svg'

gsap.registerPlugin(ScrollToPlugin)

function LandingPage() {
  const triggered = useScroll(10)
  const section2Ref = useRef(null)

  useEffect(() => {
    if (triggered) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

      tl.to(window, {
        scrollTo: {
          y: section2Ref.current.offsetTop,
          autoKill: false,
        },
      })

      return () => tl.kill()
    }
  }, [triggered])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

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

      <section
        className="temp-section"
        ref={section2Ref}
        style={{paddingTop: '10vh'}}
      >
        <p style={{color: 'white'}}> scroll snap</p>
      </section>
    </React.Fragment>
  )
}

export default LandingPage
