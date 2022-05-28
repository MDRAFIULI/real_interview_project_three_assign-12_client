import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { refetch } = useQuery();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const nameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const phoneRef = useRef('');
    const quantityRef = useRef('');

    useEffect(() => {
        const url = `https://powerful-meadow-41010.herokuapp.com/products/${id}`;
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
        const name = nameRef.current.value
        const email = emailRef.current.value
        const address = addressRef.current.value
        const phone = phoneRef.current.value
        const quantity = quantityRef.current.value

        const order = { name, email, address, phone, quantity }

        fetch('https://powerful-meadow-41010.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    toast(`${name}'s Comment and ratings Add`)
                }
                else {

                }
                refetch();
            });
    }

    return (
        <div className='mt-24 mb-24'>
            <h1 className='text-center text-3xl text-[#0AA1DD]'>Give Order for: {product?.name}</h1>
            <h1 className='text-center'>Tool ID: {id}</h1>
            <div class="mockup-window border bg-base-300 w-[800px] mx-auto mt-12">
                <div class="flex justify-center px-4 py-16 bg-base-200">
                    <form onSubmit={handleOnSubmit}>
                        <label className="label">
                            <span className="label-text">Tool Name</span>
                        </label>
                        <input ref={nameRef} placeholder='Tools Name' type="text" disabled value={product.name} className='p-1 rounded-sm text-white bg-gray-500' />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} placeholder='Email' type="email" disabled value={user?.email} className='p-1 rounded-sm text-white bg-gray-500' />
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input ref={addressRef} placeholder='Address' type="text" className='p-1 rounded-sm' />
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input ref={phoneRef} placeholder='Phone' type="number" className='p-1 rounded-sm' />
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input ref={quantityRef} onBlur={handleQuantityBlur} onChange={(e) => handleQuantityChange(e.target.value)} placeholder='Quantity' type="number" className='p-1 rounded-sm' id='quantity' value={quantity} />
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