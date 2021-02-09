import React from 'react'
import './CardForLogin.css'
const CardForLogin = (props) => {
    return (
        <div className="cardForLogin" style={{backgroundColor:props.BGColor,}}>
            {props.children}
        </div>
    )
}

export default CardForLogin;
