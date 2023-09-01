import React from 'react'
import './about.scss'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about_content">
            <div className="about_cards">

              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>1+ Year Working</small>
              </article>

              <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </article>

              <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>

            </div>
            <p>Experienced MERN (MongoDB, Express.js, React, Node.js) stack developer with a passion for crafting efficient, user-friendly, and scalable web applications. Proficient in both frontend and backend development, adept at collaborating with cross-functional teams to deliver high-quality software solutions. Strong problem-solving skills and a continuous learner, staying up-to-date with the latest industry trends and best practices.</p>

            <a href="#contact"
            className='btn btn-primary'
            >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About