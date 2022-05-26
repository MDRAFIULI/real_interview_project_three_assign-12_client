import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Nav = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#0AA1DD]">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a class="justify-between">
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul class="p-2 text-[#0AA1DD]">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl text-[#0AA1DD]">HEAVEN TOOLS FACTORY</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-[#0AA1DD]">
                    <li><a>Item 1</a></li>
                    <li tabindex="0">
                        <Link to='dashboard'>
                            Dashboard
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul class="p-2 text-white bg-[#0AA1DD]">
                            <li><Link to='/dashboard'>My Order</Link></li>
                            <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                            <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                {user ? <button className='btn' onClick={logout}>Sign Up</button> : <Link to='/login' class="btn">Login</Link>}
            </div>
        </div>
    );
};

export default Nav;