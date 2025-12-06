import React from 'react'
import './Hero.css'
import profileimg from '../../assets/profileimg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from '../../assets/Resume.pdf'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profileimg} alt='' />
      <h1><span>I'm Aswin E N,</span> Full Stack Developer</h1>
      <p>Building scalable, real-world software solutions with modern web technologies and AI integration</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        <a href={Resume} download style={{ textDecoration: "none" }}>
          <div className='hero-resume'>My Resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
