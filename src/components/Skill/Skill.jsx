import React from 'react'
import './Skill.css'

const Skill = () => {
  return (
    <div id='skills' className="skills-section">
      <h2 className="skills-title">
        Technical <span>Skills</span>
      </h2>
      <p className="skills-subtitle">
        My technical toolkit and areas of expertise
      </p>

      <div className="skills-grid">

        {/* Programming */}
        <div className="skill-card">
          <h3 className="skill-category blue">Programming</h3>
          <div className="skill-items">
            <span>C</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
          </div>
        </div>

        {/* Web Technologies */}
        <div className="skill-card">
          <h3 className="skill-category purple">Web Technologies</h3>
          <div className="skill-items">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h3 className="skill-category green">Database</h3>
          <div className="skill-items">
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Prisma</span>
            <span>Supabase</span>
          </div>
        </div>

        {/* APIs & Tools */}
        <div className="skill-card">
          <h3 className="skill-category orange">APIs & Tools</h3>
          <div className="skill-items">
            <span>Stripe API</span>
            <span>Git & Github</span>
            <span>Clerk auth</span>
            <span>Render</span>
            <span>Postman</span>
            <span>Vercel</span>
            <span>Thunder Client</span>
          </div>
        </div>

      </div>
    </div>
  )
}

 

export default Skill
