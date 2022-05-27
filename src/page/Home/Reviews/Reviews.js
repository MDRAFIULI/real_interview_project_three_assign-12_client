import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import Review from '../Review/Review';

const Reviews = () => {
    const { isLoading, error, data: reviews } = useQuery('reviews', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-32'>
            <h1 className='text-6xl text-center text-[#0AA1DD]'>What does our customer say?</h1>
            <div className='grid grid-cols-3 gap-4 mt-12 ml-12'>

                {
                    reviews?.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;