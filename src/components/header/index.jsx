import React from 'react';

import Button from '../button/index';

import './header.scss';

function Header() {
    return (
        <div className='header-div'>
            <p className='home-page-title'>
                Ваш кращій лікар-ендокринолог :<br/>
                Олена Христенко
            </p>
            <section className='button-section'>
                <Button label={'Домашня сторінка'} className={'homepage'}/>
                <Button label={'Про мене'} className={'about'}/>
                <Button label={'Зворотній зв`язок'} className={'contact'}/>
                <Button label={'Блог'} className={'blog'}/>
                <Button label={'Для Лікарів'} className={'for-doctors'}/>
            </section>
        </div>
    )
}

export default Header;