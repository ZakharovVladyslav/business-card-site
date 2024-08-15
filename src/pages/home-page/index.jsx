import React from 'react';
import Header from '../../components/header/index';
import BodySpan from '../../components/body-span/index';
import InfoCard from '../../components/info-card';
import Footer from '../../components/footer';

import './home-page.scss';

function HomePage() {
    return (
        <main className='home-page-main'>
            <div className='home-page-div'>
                <Header />
                <section className='info-card-section'>
                    <InfoCard />
                </section>
                <BodySpan/>
                <Footer/>
            </div>
        </main>
    )
}

export default HomePage;