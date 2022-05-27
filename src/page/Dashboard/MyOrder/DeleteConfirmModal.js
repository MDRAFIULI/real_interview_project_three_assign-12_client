import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingOrder, refetch, setDeletingOrder, setOrders, orders }) => {
    const { _id, name, quantity, address, phone, email } = deletingOrder;
    /* const handleDelete = () => {
        fetch(`https://secret-dusk-46242.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted.`)
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    } */
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
                    toast.success(`order: ${name} is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500"> Do you want to delete {name}</h3>
                    <h3 class="font-bold text-lg text-black"> ID: {_id}</h3>
                    <h3 class="font-bold text-lg text-black"> Email: {email}</h3>
                    <h3 class="font-bold text-lg text-black"> Address: {address}</h3>
                    <h3 class="font-bold text-lg text-black"> Phone: {phone}</h3>
                    <h3 class="font-bold text-lg text-black"> Quantity: {quantity}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Confirm</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;