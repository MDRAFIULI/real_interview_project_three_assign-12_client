import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';

const ManageAllOrders = () => {
    const { isLoading, error, data: allOrders } = useQuery('allOrders', () =>
        fetch('http://localhost:5000/allOrders').then(res =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            length: {allOrders.length}

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
                            allOrders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td>{order?.phone}</td>
                                <td>{order?.quantity}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;