import React, { useRef } from 'react'
import './contact.scss'
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import emailjs from "@emailjs/browser";
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lozjjj1', 'contact_form', form.current, 'OUUNdDWoeLHbkI0UW')

      e.target.reset()
  }

  return (
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">

            <article className='contact_option'>
              <MdOutlineEmail className='contact_option-icon' />
              <h4>Email</h4>
              <h5>kamaloct1999@gmail.com</h5>
              <a href="mailto:kamaloct1999@gmail.com" target='_blank' >Send a message</a>
            </article>
            
            <article className='contact_option'>
              <BsInstagram className='contact_option-icon' />
              <h4>Instagram</h4>
              <h5>kamal sharma</h5>
              <a href="https://ig.me/m/kamal_sharma30/" target='_blank' >Send a message</a>
            </article>

            <article className='contact_option'>
              <BsWhatsapp className='contact_option-icon' />
              <h4>WhatsApp</h4>
              <h5>8619720103</h5>
              <a href="https://api.whatsapp.com/send?phone=+918619720103" target='_blank' >Send a message</a>
            </article>

          </div>
          {/* contact option */}
          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary' >Send Message</button>
          </form>
        </div>
      </section>
    )
}

export default Contact