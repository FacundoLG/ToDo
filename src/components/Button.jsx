import React from 'react';
import '../assets/styles/Button.css'

const Button = (props) => {
    const {text, type, onClick} = props
    return(
        <>
            <button onClick={onClick} className={`button ${type || text}`} >{text}</button>
        </>
    )
}
export default Button