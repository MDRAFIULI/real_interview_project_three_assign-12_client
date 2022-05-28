import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import Product from '../Product/Product';

const Products = () => {
    const { isLoading, error, data: products } = useQuery('products', () =>
        fetch('https://powerful-meadow-41010.herokuapp.com/products').then(res =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-24'>
            <h1 className="text-4xl text-center text-[#0AA1DD]">Tools Of Heaven Brand!</h1>
            <div className='grid lg:grid-cols-2 gap-24 mt-16 container ml-8'>
                {
                    products?.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;