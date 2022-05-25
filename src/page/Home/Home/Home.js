import React from 'react';
import ExtraSection2 from '../../ExtraSection2/ExtraSection2';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import ExtraSection1 from '../ExtraSection1/ExtraSection1';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
            <Footer></Footer>
        </div>
    );
};

export default Home;