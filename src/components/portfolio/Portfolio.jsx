import React from 'react'
import './portfolio.scss'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image:IMG1,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com/kamal-sharma-99',
    demo: 'https://github.com/kamal-sharma-99'
  },
  {
    id: 2,
    image:IMG2,
    title: 'E-Commerce App',
    github: 'https://github.com/kamal-sharma-99',
    demo: 'https://github.com/kamal-sharma-99'
  },
  {
    id: 3,
    image:IMG3,
    title: 'Video Streaming App',
    github: 'https://github.com/kamal-sharma-99',
    demo: 'https://github.com/kamal-sharma-99'
  },
  {
    id: 4,
    image:IMG4,
    title: 'Social Media App',
    github: 'https://github.com/kamal-sharma-99',
    demo: 'https://github.com/kamal-sharma-99'
  },
  {
    id: 5,
    image:IMG5,
    title: 'Chrome Extension',
    github: 'https://github.com/kamal-sharma-99',
    demo: 'https://github.com/kamal-sharma-99'
  },
  {
    id: 6,
    image:IMG6,
    title: 'Chat Messaging App',
    github: 'https://github.com/kamal-sharma-99',
    demo: 'https://github.com/kamal-sharma-99'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo }) =>{
            return(

              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
                <div className="portfolio_item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio