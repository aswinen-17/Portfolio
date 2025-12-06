import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me </h1>
        <p className='about-para'>I'm <span>MCA</span> graduate passionate about building modern, scalable digital experiences. I have hands-on experience in full-stack development, AI-powered applications, and cloud-ready web technologies.<br /> With strong fundamentals in <span>C and Java</span>, and practical expertise in the <span>MERN stack and Next.js</span>, I enjoy solving complex problems and turning ideas into functional products.
          <br />Currently, I’m exploring how <span>AI</span> can enhance web development and create smarter, more intuitive applications. I’m motivated, curious, and always excited to work on meaningful projects that challenge me to grow.</p>
      </div>
    </div>
  )
}

export default About
