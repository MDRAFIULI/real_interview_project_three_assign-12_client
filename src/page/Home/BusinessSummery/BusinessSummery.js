import React from 'react';
import customer from '../../../img/icon/customer.png';
import revenue from '../../../img/icon/revenue.png';
import review from '../../../img/icon/review.png';
import journey from '../../../img/icon/journey.png';
import flag from '../../../img/icon/flag.png';
import wrench from '../../../img/icon/wrench.png';
const BusinessSummery = () => {
    return (
        <div className='mt-44'>
            <h1 className=' text-[#0AA1DD] ml-16 text-7xl font-bold'>Business Summery of <br /> <span className='text-blue-300'>Heaven tools!</span></h1>
            <div className='grid grid-cols-3 gap-4 mt-8 ml-16'>
                <div class="card w-96 bg-red-400 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={customer} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Total Customer: 70k</h2>
                    </div>
                </div>
                <div class="card w-96 bg-orange-400 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={revenue} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Yearly Revenue: 1.1M usd $ </h2>
                    </div>
                </div>
                <div class="card w-96 bg-green-400 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={review} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Total review: 33k+</h2>
                    </div>
                </div>
                <div class="card w-96 bg-teal-300 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={journey} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Since 2006 we produce best tools</h2>
                    </div>
                </div>
                <div class="card w-96 bg-pink-300 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={flag} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Business Area: Bangladesh,India,Pakistan</h2>
                    </div>
                </div>
                <div class="card w-96 bg-rose-300 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={wrench} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Available type of products: 15+</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;