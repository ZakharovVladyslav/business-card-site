import React from 'react';

import Button from '../button/index';

import s from './header.module.scss';

function Header() {
    return (
        <header className={s.header}>
            <h1 className={s.homePageTitle}>
                Ваш лікар-ендокринолог
            </h1>

            <section className={s.buttonSection}>
                <Button>Домашня сторінка</Button>
                <Button>Про мене</Button>
                <Button>Зворотній зв'язок</Button>
                <Button>Блог</Button>
                <Button>Для лікарів</Button>
            </section>
        </header>
    )
}

export default Header;
