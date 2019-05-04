import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SublasaImg from '../../assets/sublasa_landing.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import resumeFile from '../../assets/resume.pdf';
import host from '../../assets/radio-host.svg';
import host2 from '../../assets/host.svg';

export default function Home() {
  return (
    <div className='home-wrapper'>
      <header className="landing-wrapper">
        <div>
          <h1 className="landing-title">
            Mark Romero
          </h1>
  
          <h4 className='landing-subtext space-divider'>
            HI Im a Software Developer <br /> With a passion for learning and exploring. 
          </h4>
  
          <div className="landing-logos space-divider">
            <a href='https://github.com/mromero1591' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a href='https://linkedin.com/in/markromero1591' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            <a href={resumeFile} download><FontAwesomeIcon icon='file-alt' /></a>
          </div>
        </div>
        
        <div className='landing-img show-img'>
          <img src={host2} alt='radio host'/>
        </div>
      </header>

      <section className="home-projects-wrapper space-divider">        
        <h1 className='section-title'>
          Projects
        </h1>

        <div className="project-cards-container">
          <ProjectCard img={SublasaImg} title={'Sublasa'} />

          <button className='btn'>More Projects</button>
        </div>
      </section>

      <section className='home-about-me-wrapper space-divider'>
        <h1 className='section-title'>
            Get To Know Me
        </h1>

        <div className="sub-title">
          My Experience
        </div>

        <div className="about-me-container">
          <p>I’ve been working for the last 5 years at Entrata, One of the most innovative Software companies in Utah.</p>
          <div>Software Development Manager - 4 years</div>
          <div>Migration Consultant - 1 year</div>
        </div>
      </section>

      <section className='home-skills-wrapper space-divider'>
        <h1 className='section-title'>
            Skills
        </h1>
        <div className="skills-list">
          <span><FontAwesomeIcon icon={['fab', 'html5']} />HTML5 </span>
          <span><FontAwesomeIcon icon={['fab', 'css3-alt']} />CSS3</span>
          <span><FontAwesomeIcon icon={['fab', 'js']} />JavaScript</span>
          <span><FontAwesomeIcon icon='code' />C++</span>
          <span><FontAwesomeIcon icon={['fab', 'node']} />NodeJs</span>
          <span><FontAwesomeIcon icon='database' />PostgresSQL</span>
        </div>
      </section>

      <section className='home-contact-me space-divider'> 
        <h1 className='section-title'>
            Contact Me
        </h1>

        <div className="contact-list">
        <FontAwesomeIcon icon='envelope' />
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </div>
      </section>
    </div>
  )
}
