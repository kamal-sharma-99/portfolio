import React from 'react'
import CV from '../../assets/Kamal_Sharma_Full_Stack_Developer.pdf'
import './header.scss'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >Download CV</a>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
    </div>
  )
}

export default CTA