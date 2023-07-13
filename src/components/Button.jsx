
import React from 'react';

const Button = ({ toggleLogIn }) => {

    const handleClick = () => {
        toggleLogIn()
    }

    return (
        
        <button onClick={toggleLogIn}>Toggle LogIn</button>
        
    )
}

export default Button