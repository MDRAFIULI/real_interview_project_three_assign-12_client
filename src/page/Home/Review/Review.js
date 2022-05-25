import React from 'react';

const Review = ({ review }) => {
    const { name, comment, ratings } = review;
    return (
        <div class="card w-96 bg-blue-300 shadow-xl">
            <div class="card-body">
                <h2 className='text-3xl'>{name}</h2>
                <p>Ratings: {ratings}</p>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Review;