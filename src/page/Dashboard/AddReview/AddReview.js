import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { refetch } = useQuery();
    console.log(user?.displayName);
    const [name, setName] = useState(null);
    const [ratings, setRatings] = useState(1);
    const [comment, setComment] = useState('');
    const nameRef = useRef('')
    const handleRatingsBlur = (e) => {
        setRatings(e.target.value);
    }
    const handleCommentBlur = (e) => {
        setComment(e.target.value);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value
        const review = {
            name,
            ratings,
            comment
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`${name}'s Comment and ratings Add`)
                }
                else {

                }
                refetch();
            });
    }
    return (
        <div className='mx-auto'>
            <h1 className='text-3xl ml-8 my-8 text-orange-400'>Add A Review</h1>
            <div class="mockup-phone border-primary">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <form onSubmit={handleOnSubmit}>
                            <label htmlFor="">Name</label><br />
                            <input type="text" name="" value={user?.displayName} readOnly ref={nameRef} className='p-2 rounded-md bg-orange-400 text-white font-bold' /><br />
                            <label htmlFor="">Ratings</label><br />
                            {/* <input onBlur={handleRatingsBlur} type="number" name="" id="" className='p-2 rounded-md bg-orange-400 text-white font-bold' /><br /> */}
                            <select className='bg-orange-400 rounded-md w-56 text-white' name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select><br />
                            <label htmlFor="">Comment</label><br />
                            <textarea onBlur={handleCommentBlur} type="text" name="" id="" className='p-2 rounded-md bg-orange-400 text-white font-bold' cols="22" rows="5"></textarea>
                            <br /><br />
                            <input type="submit" value="Add" className='btn btn-md bg-[#0AA1DD] border-none' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;