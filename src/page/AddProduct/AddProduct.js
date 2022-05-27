import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { refetch } = useQuery('products');

    const nameRef = useRef('');
    const imageRef = useRef('');
    const descriptionRef = useRef('');
    const perUnitPriceRef = useRef('');
    const minimumOrderRef = useRef('');
    const availableOrderRef = useRef('');


    const handleOnSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value
        const img = imageRef.current.value
        const description = descriptionRef.current.value
        const minimumOrderQuantity = perUnitPriceRef.current.value
        const availableOrderQuantity = minimumOrderRef.current.value
        const perUnitPrice = availableOrderRef.current.value
        const product = { name, img, description, minimumOrderQuantity, availableOrderQuantity, perUnitPrice }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`${name}'s Add new product by admin`)
                }
                else {

                }
                refetch();
            });
    }
    return (
        <div className='mx-auto'>
            <h1 className='text-3xl ml-8 my-8 text-red-400 font-bold'>Add A Product</h1>
            <div class="mockup-phone border-primary">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <form onSubmit={handleOnSubmit}>
                            <label htmlFor="">Name</label><br />
                            <input ref={nameRef} type="text" name="" id="" className='p-2 rounded-md bg-blue-400 text-white font-bold' /><br />
                            <label htmlFor="">Image Url</label><br />
                            <input ref={imageRef} type="text" name="" id="" className='p-2 rounded-md bg-blue-400 text-white font-bold' /><br />
                            <label htmlFor="">Description</label><br />
                            <input ref={descriptionRef} type="text" name="" id="" className='p-2 rounded-md bg-blue-400 text-white font-bold' /><br />
                            <label htmlFor="">Per Unit Price</label><br />
                            <input ref={perUnitPriceRef} type="text" name="" id="" className='p-2 rounded-md bg-blue-400 text-white font-bold' /><br />
                            <label htmlFor="">Minimum order quantity</label><br />
                            <input ref={minimumOrderRef} type="text" name="" id="" className='p-2 rounded-md bg-blue-400 text-white font-bold' /><br />
                            <label htmlFor="">Available order quantity</label><br />
                            <input ref={availableOrderRef} type="text" name="" id="" className='p-2 rounded-md bg-blue-400 text-white font-bold' /><br /><br />
                            <input type="submit" value="Add" className='btn btn-md bg-[#0AA1DD] border-none' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;