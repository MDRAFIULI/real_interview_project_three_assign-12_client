import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='mt-32'>
            <h1 className='text-6xl text-center text-[#0AA1DD]'>What does our customer say?</h1>
            <div className='grid grid-cols-3 gap-4 mt-12 ml-12'>

                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;