import React from 'react';
import Divider from '../divider/index';
import Button from '../button';
import UserIcon from '../../assets/icons/user-icon';

import './footer.scss';


function Footer() {
    return (
        <footer className='footer'>
            <section className='desc-section'>
            <h1 className='desc-text'>Давайте зробимо ваше здоров'я краще - разом.</h1>
            <h2 className='transparent-desc-text'>Корисна інформація:</h2>
            </section>
            <section className='desc-button-section'>
                <Button children={'Про мене'} className={'about'} icon={<UserIcon/>}/>
                <Button children={'Зворотній зв`язок'} className={'contact'} />
                <Button children={'Для Лікарів'} className={'for-doctors'} />
            </section>
        </footer>
    )
}

export default Footer;