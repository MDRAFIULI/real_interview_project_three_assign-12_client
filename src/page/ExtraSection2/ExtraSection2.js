import React from 'react';
import { Link } from 'react-router-dom';
import tools from '../../img/tools.jfif';

const ExtraSection2 = () => {
    return (
        <div className='grid grid-cols-2 justify-center items-center mt-40'>
            <div className='mx-auto'>
                <h1 className='text-8xl text-[#0AA1DD] font-bold'>Welcome</h1> <br />
                <p className='text-2xl'>Welcome to our tools world</p>
            </div>
            <div class="mockup-phone border-primary">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <h1 className='text-3xl text-blue-400'>Welcome to our tools world.</h1>
                        <img src={tools} alt="" />
                        <Link to='/blogs'><button className='btn bg-[#0AA1DD] border-none mt-24'>Go to Blogs</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;