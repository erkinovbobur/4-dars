import React from 'react'
import Brand from '../components/Brand/Brand'
import Products from '../components/Products/Products'
import Products2 from '../components/Products/Products2'
import Styl from '../components/Styl/Styl'
import Comments from '../components/Customers/Massenge'
import Email from '../components/emai/Email'
import Footer from '../components/Footer/Footer'
import Hover from '../components/Hover/Hover'





const Home = () => {
  return (
    <>
    <Hover/>
    <Brand/>
    <Products/> 
    <Products2/>
    <Styl/>
    <Comments/>
    <Email/>
    <Footer/>
  
  
    </>
  )
}

export default Home