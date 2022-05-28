import React from 'react';

const Blogs = () => {
    const example = `let friend = {
        job: 'web development'
    };

    let GFGuser = {
        __proto__: friend, 
    };`;
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Answer of some ques:</h1>
                    <h3 class="py-6 text-3xl">How to improve the performance of a react?</h3>
                    <ul className="text-left">
                        <li>1.component state local er modde rakha.</li>
                        <li>2.unnecessary re-renders dur korar jonno react components memoizing kora.</li>
                        <li>3.dynamic import use kore react e Code-splitting kora.</li>
                        <li>4.Immutable Data Structures use kora.</li>
                        <li>5.Webpack e Production Mode Flag use kora.</li>
                    </ul><br /><br />
                    <h3 class="py-6 text-3xl">What are the different ways to manage a state in a React application?</h3>
                    <ul className="text-left">
                        <li>Local State: eta diye 1 ta component manage kora jai.</li>
                        <li>Global state: eta diye onek gulo component manage kora jai.</li>
                        <li>Server State: eta ekshate  local and global UI state ke manage krte pare.</li>
                        <li>Url state: eta url data, pathname and query parameters ke manage kore</li>
                    </ul><br /><br />
                    <h3 class="py-6 text-3xl">How does prototypical inheritance work?</h3>
                    <p className="text-left">
                        Portotypical inheritance holo js er ekta feature.ei method er maddome ek object theke arek object inherit vabe properties pai. _porto_ evabe lekhe muloto inheritence vabe properties paoya jai.
                        <br />
                        example:
                        {example}
                    </p>
                    <br /><br />

                    <h3 class="py-6"></h3>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;