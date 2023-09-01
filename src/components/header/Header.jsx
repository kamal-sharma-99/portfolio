import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.scss'
const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Kamal Sharma</h1>
            <h5 className='text-light'>Full Stack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
                <img src={ME} alt="" />
            </div>
            {/* <a href="/" className='scroll'>Scroll Down</a> */}
        </div>
    </header>
  )
}

export default Header