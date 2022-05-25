import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Product from '../Product/Product';

const Products = () => {
    /* const { isLoading, error, data: products } = useQuery('products', () =>
        fetch('tools.json').then(res =>
            res.json()
        )
    ) */
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mt-24'>
            <h1 className="text-4xl text-center text-[#0AA1DD]">Tools Of Heaven Brand!</h1>
            <div className='grid lg:grid-cols-2 gap-24 mt-16 container ml-8'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;