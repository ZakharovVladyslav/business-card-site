import clsx from 'clsx';
import React from 'react';

import s from './divider.module.scss';

function Divider({ axis = 'x', variant = 'primary', size = 'm' }) {
    return (
        <div className={clsx((s.divider, s[axis], s[variant], s[`${axis}-${size}`]))}></div>
    )
}

export default Divider;
