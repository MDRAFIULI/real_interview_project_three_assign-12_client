import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile mt-8">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ml-32">
                <h2 className='text-4xl font-bold text-blue-700 ml-8'>Welcome to your <br /> <strong className='text-blue-400'>Dashboard</strong></h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <>
                        <li><Link to='/dashboard'>My Order</Link></li>
                        <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                    </>
                    }
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>

                    {admin && <>
                        <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                        <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                        <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                        {/* <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li> */}
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;