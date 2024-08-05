import React, { useEffect, useState } from 'react'
import './Products.css'

const Products2 = () => {
    const [products, setProducts] = useState([]);

 useEffect(() => {
  fetch('https://dummyjson.com/products '  )
    .then((res) => res.json())
    .then((data) => setProducts(data.products));
}, []);
  return (
    <>
   <div>
    <h1 className='NEW'>TOP SELLING</h1>
     </div> 
     <div className='product-wrappers'>
     
     {
      products.slice(25,29).map((product) => (
        <div id='brands2' className='product-cards'  key={product.id}>
          <img src={product.thumbnail} alt="" />
          <h1>{product.title}</h1>
         <p>⭐⭐⭐⭐ {product.rating} / 5</p>
         <div className='price-brand'>
          <p> ${product.price}</p>
         </div>
          
        </div>
      ))
     }
     
    </div>
   <div className='view__btn'>
   <button className='view'>View All</button>
   </div>
     </>
  )
}

export default Products2