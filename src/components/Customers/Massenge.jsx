import React, { useEffect, useState } from 'react'
import "./Massenge.css"
import rating from '../../image/rating.svg'
import prem from '../../image/prem.svg'


const Comments= () => {
    const [comments, setComments] = useState([]);

 useEffect(() => {
  fetch('https://dummyjson.com/comments '  )
    .then((res) => res.json())
    .then((data) => setComments(data.comments));
}, []);
 
  return (
 <>
    <div>
   <h1 className='our'>OUR HAPPY CUSTOMERS</h1>
      </div>
    <div className='commit'>
     
     {
      comments.slice(10,13).map((comments) => (
        <div className='commit-cards'  key={comments.id}>
         <img src={rating} alt="" />
         <div className='commit__like'> <p>{comments.user.fullName}</p>
          <img src={prem} alt="" ></img></div>
           <p>{comments.body}</p>
           <p> Likes {comments.likes}</p>
          
          

        </div>
      ))
     }
     
    </div>
 </>
  )
}

export default Comments