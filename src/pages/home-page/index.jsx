import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import InfoCard from '../../components/info-card';

import './homepage.scss';

function HomePage() {
    return (
        <div className='home-page-div'>
            <Header/>
            <InfoCard/>
            <Footer/>
        </div>
    )
}

export default HomePage;