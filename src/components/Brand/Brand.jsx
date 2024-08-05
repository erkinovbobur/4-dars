import React from 'react'
import './brand.css'
import versage from '../../image/versage.svg'
import zara from '../../image/zara.svg'
import gucci from '../../image/gucci.svg'
import prada from '../../image/prada.svg'
import calvin from '../../image/calvin.svg'
const Brand = () => {
  return (
    <div className='brand'>
        <div className='container'>
            <div className='brand__wrapper'>
                <img src={versage} alt="" />
                <img src={zara} alt="" />
                <img src={gucci} alt="" />
                <img src={prada} alt="" />
                <img src={calvin} alt="" />
            </div>
        </div>
    </div>

  )
}

export default Brand