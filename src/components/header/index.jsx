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
                <Button children={'Домашня сторінка'} className={'homepage'}/>
                <Button children={'Про мене'} className={'about'}/>
                <Button children={'Зворотній зв`язок'} className={'contact'}/>
                <Button children={'Блог'} className={'blog'}/>
                <Button children={'Для Лікарів'} className={'for-doctors'}/>
            </section>
        </div>
    )
}

export default Header;