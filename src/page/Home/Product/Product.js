import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { img, name, description, minimumOrderQuantity, availableOrderQuantity, perUnitPrice, _id } = product;
    const navigate = useNavigate();
    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} style={{ width: '300px', height: '280px' }} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}.</p>
                <p>Per unit price: ${perUnitPrice}</p>
                <p><span>Minimum order quantity: {minimumOrderQuantity}</span></p>
                <p><span>Available order quantity: {availableOrderQuantity}</span></p>
                <div class="card-actions justify-end">
                    <button onClick={() => handlePurchase(_id)} class="btn bg-[#0AA1DD] border-none">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;