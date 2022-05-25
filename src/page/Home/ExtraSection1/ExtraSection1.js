import React from 'react';
import { Link } from 'react-router-dom';

const ExtraSection1 = () => {
    return (
        <div className=' bg-base-300 mt-32 ml-10 mr-10'>
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">No Secret Popularity</h1>
                        <p class="py-6">Our company is very popular in Bangladesh,India,Pakistan. It's not secret. You can search about our popularity.</p>
                        <Link to='/login'><button class="btn  bg-[#0AA1DD] border-none">Explore By Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;