import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
<section id='experience' class="experience-education">
  <h2>Experience & <span class="highlight">Education</span></h2>
  <p class="subheading">My academic journey and professional milestones</p>

  <div class="container">
    <div class="column">
      <h3><i class="icon-briefcase"></i> Experience</h3>
      <div class="item">
        <h4>Software Development Intern</h4>
        <p class="company">TechaSoft</p>
        <p class="date">July 2025 - Sept 2025</p>
        <ul>
          <li>Assisted in developing and maintaining client-facing web applications.</li>
          <li>Improved UI consistency, optimized responsiveness, and enhanced cross-device compatibility.</li>
          <li>Performed debugging, manual testing, and documentation of multiple modules.</li>
        </ul>
      </div>
    </div>

    <div class="column">
      <h3><i class="icon-graduation"></i> Education</h3>
      <div class="item">
        <h4>Master of Computer Applications (MCA)</h4>
        <p class="company">Bangalore University</p>
        <p class="date">2023 - 2025</p>
        <p>Status: Results Awaited</p>
      </div>
      <div class="item">
        <h4>Bachelor of Computer Applications (BCA)</h4>
        <p class="company">University of Calicut</p>
        <p class="date">2019 - 2022</p>
        <p>CGPA: 7.2</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Experience
