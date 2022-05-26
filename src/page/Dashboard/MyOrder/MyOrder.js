import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../shared/Loading/Loading';
import { useQuery } from 'react-query';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const { refetch } = useQuery('orders');
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET'
                /* headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                } */
            })
                .then(res => {
                    /* console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    } */
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user]);
    const handleDelete = (id) => {


        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
            /* headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            } */
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                    toast.success(`order: ${id} is deleted.`)
                    refetch();
                }
            })
    }
    return (
        <div className='mx-auto'>
            <h1>my order</h1>
            <p>orders length: {orders?.length}</p>
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
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td>{order?.phone}</td>
                                <td>{order?.quantity}</td>
                                <td>
                                    {
                                        <button onClick={() => handleDelete(order._id)} className='btn btn-xs bg-red-500 border-none'>Cancel</button>
                                    }
                                </td>
                                {/* <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;