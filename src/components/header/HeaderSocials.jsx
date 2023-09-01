import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import './header.scss'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/kamal-sharma-s" target='_blank'> <BsLinkedin/> </a>
        <a href="https://github.com/kamal-sharma-99" target='_blank'> <FaGithub/> </a>
        <a href="https://ig.me/m/kamal_sharma30" target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials