import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-8">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ml-32">
                <h2 className='text-4xl font-bold text-blue-700'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    {/* {admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                    </>} */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;