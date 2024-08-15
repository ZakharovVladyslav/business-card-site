import React from 'react';

import './button.scss';

function Button({ children, className, icon }) {
    return (
        <button className={`button + ${className}`}>
            {children}
        </button>
    )
}

export default Button;