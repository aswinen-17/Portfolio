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
        <p class="company">CodeCraft InfoTech</p>
        <p class="date">August 2026 - Sept 2026</p>
        <ul>
          <li>Developed and delivered software projects with a focus on responsive, interactive, and user-friendly interfaces.</li>
          <li>Implemented functional features including user input handling, validation, dynamic components, and responsive layouts.</li>
          <li>Managed project development and deployments while maintaining organized and accessible project repositories.</li>
        </ul>
      </div>
    </div>

    <div class="column">
      <h3><i class="icon-graduation"></i> Education</h3>
      <div class="item">
        <h4>Master of Computer Applications (MCA)</h4>
        <p class="company">Bangalore University</p>
        <p class="date">2023 - 2025</p>
        <p>CGPA: 7.4</p>
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
