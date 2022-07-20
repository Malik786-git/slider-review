import React, { useState } from 'react';
import reviews from './data';

const Review = () => {

   const [index, setIndex] = useState(0); 
   const { name , job, image, text} = reviews[index]

   const setIndexNumber = (num)=> {
       if (num  >  reviews.length-1) {
            setIndex(0);
       }
       else 
       if (num < 0) {
          setIndex(reviews.length-1);
       }
       else{

        setIndex(num);
       }
   }

   const nextReview = ()=> {
     let newIndex = index + 1;
     setIndexNumber(newIndex)
    }
    const prevReview = ()=> {
        let newIndex = index - 1;
        setIndexNumber(newIndex)
   }

  return (
    <div className='review-container'>
        <figure>
            <img src={image} alt="img"/>
        </figure>
          <h1>{name}</h1>
          <h2>{job}</h2>
          <p>{text}</p>
          <div className="btn-container">
            <button onClick={prevReview}> <i className="fa fa-chevron-left" aria-hidden="true"></i> </button>
            <button onClick={nextReview}> <i className="fa fa-chevron-right" aria-hidden="true"></i> </button>
          </div>
    </div>
  )
}

export default Review;
