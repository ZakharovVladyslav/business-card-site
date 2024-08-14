import React from 'react';

import './button.scss';

function Button({label, className}) {
    return (
        <button className={`button + ${className}`}>{label}</button>
    )
}

export default Button;