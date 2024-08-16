import React from 'react';
import Header from '../../components/header/index';
import InfoCard from '../../components/info-card';
import Footer from '../../components/footer';

import './home-page.scss';
import Copyright from '../../components/copyright';

// TODO: change classnames to modules

function HomePage() {
    return (
        <main className='home-page-main'>
            <div className='home-page-div'>
                <Header />

                <section className='info-card-section'>
                    <InfoCard />
                </section>

                <Footer />

                <Copyright />
            </div>
        </main>
    )
}

export default HomePage;
