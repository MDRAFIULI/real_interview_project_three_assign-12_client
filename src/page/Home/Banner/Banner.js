import React from 'react';
import { Link } from 'react-router-dom';
import Banner1 from '../../../img/banner/Banner.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={Banner1} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-[#0AA1DD]">Heaven Tools Factory!</h1>
                    <p class="py-6">The most popular tools factory in this district.</p>
                    <Link to='/login'><button class="btn bg-[#0AA1DD] border-none">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;