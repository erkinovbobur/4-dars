import React from 'react'
import mail from '../image/mail.svg'
import phone from '../image/phone.svg'
import locat from '../image/locat.svg'
import linked from '../image/linked.svg'
import be from '../image/be.svg'
import insta from '../image/insta.svg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
        <div className='address'>
          <div>
          <div className='row'>
           <h1>Les’t talk <br />
              on something great  <br />
                together</h1>
           </div>
           
           <div className='col'>
            <img src= {mail} alt="" /> 
            <p className='text'>andreaDesign@gmail.com</p>
           </div>
           <div className='col'>
            <img src= {phone} alt="" /> 
            <p className='text'>+34 123 456 789</p>
           </div>
           <div className='col'>
            <img src= {locat} alt="" /> 
            <p className='text'>123 Street 487 House</p>
           </div>
           <div className='local'>
            <img src= {linked} alt="" />
            <img src= {be} alt="" />
            <img src= {insta} alt="" />
           </div>
          
         
          </div>
          <div className='line'>
            <div className='line__text'>
          <div> <p>I’m interested in:</p>
              <div className='line__span'>
                <span style={{ color: '#176B87' }}>Web Development</span>
                <span>Mobile Development</span>
                <span>UI/UX</span> <br />
                <span>Photography</span>
                <span>Branding</span>
              </div>
            </div>
            <div className='line__input'>
              <h5>Your name</h5>
              <form action="">
                <input required className='input' type="text" />
              </form>
              <h5>Your email</h5>
              <form action="">
                <input required className='input' type="text" />
              </form>
              <h5>Your Message</h5>
              <form action="">
                <input  className='input' type="text" />
              </form>
              <Link  to="/"> <button className='btn'>Send Message </button></Link>
            </div>
           </div></div>
             
        </div>
    </div>
  )
}

export default About