import React from 'react'
import './email.css'
import {Link} from 'react-router-dom'

const Email = () => {
  return (
    <div className='email'>
        <div className='container'>
            <div className='email__wrapper'>
                <div className='email__text'>
                    <p>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</p>
                </div>
                <div className='email__input'>
                    <input type="text" placeholder='Enter Your Email address' />
                  <Link to="/About"><button>Subscribe to Newsletter</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Email