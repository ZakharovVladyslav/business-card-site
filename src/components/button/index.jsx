import clsx from 'clsx';
import React from 'react';

import s from './button.module.scss';

function Button({ children, className, size = 'm' }) {
    return (
        <button className={clsx(s.button, className)}>
            {children}
        </button>
    )
}

export default Button;
