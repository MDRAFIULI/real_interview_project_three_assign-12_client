import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const [quantity, setQuantity] = useState(500);
    console.log(quantity);
    let text;
    let x;
    const handleQuantityBlur = (e) => {
        x = e.target.value;
        if (isNaN(x) || x < product.minimumOrderQuantity || x > product.availableOrderQuantity) {
            text = "Input not valid";
            x = e.target.value === '';
        } else {
            text = "Input OK";
        }
        setQuantity(x)
    }
    const handleQuantityChange = (value) => {
        setQuantity(value)
    }
    const handleOnSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='mt-24 mb-24'>
            <h1 className='text-center'>Purchase for: {id}</h1>
            <div class="mockup-window border bg-base-300 w-[800px] mx-auto mt-24">
                <div class="flex justify-center px-4 py-16 bg-base-200">
                    <form onSubmit={handleOnSubmit}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input placeholder='Name' type="text" disabled value={product.name} className='p-1 rounded-sm' />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input placeholder='Email' type="email" disabled value={user?.email} className='p-1 rounded-sm' />
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input placeholder='Address' type="text" className='p-1 rounded-sm' />
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input placeholder='Phone' type="number" className='p-1 rounded-sm' />
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input onBlur={handleQuantityBlur} onChange={(e) => handleQuantityChange(e.target.value)} placeholder='Quantity' type="number" className='p-1 rounded-sm' id='quantity' value={quantity} />
                        {text}
                        <br />
                        <input type="submit" value="Submit" className='btn btn-sm mt-8 bg-[#0AA1DD] border-none' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;