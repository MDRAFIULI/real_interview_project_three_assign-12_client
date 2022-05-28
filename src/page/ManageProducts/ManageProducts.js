import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const { refetch } = useQuery('orders');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        fetch('http://localhost:5000/products', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setProducts(data);
            });
    }, []);


    const handleDelete = (id) => {


        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                    toast.success(`Tools is deleted.`)
                    refetch();
                }
            })
    }
    return (
        <div className='mx-auto'>
            <h1>my Products</h1>
            <p>orders length: {products?.length}</p>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-24 rounded">
                                        <img src={product?.img} alt="" />
                                    </div>
                                </div></td>
                                <td>{product?.name}</td>
                                <td>{product?.minimumOrderQuantity}</td>
                                <td>{product?.availableOrderQuantity}</td>
                                <td>{product?.perUnitPrice}</td>
                                <td>
                                    <label onClick={() => handleDelete(product._id)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;