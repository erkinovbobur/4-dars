import React from 'react'
import './Styl.css'
import dres1 from '../../image/dres1.png'
import dres2 from '../../image/dres2.png'
import dres3 from '../../image/dres3.png'
import dres4 from '../../image/dres4.png'

const Styl = () => {
  return (
    <>
    <div className='dress'>
        <div className='container'>
            <div className='dress__wrapper'>
                <div className='dress__text1'>
                     <h4 className='text__dress'>BROWSE BY DRESS STYLE</h4>
                </div>
                <div className='dress__img'>
                <img  src={dres1} alt="" />
                <img src={dres2} alt="" />
                <img src={dres3} alt="" />
                <img src={dres4} alt="" />
             </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Styl