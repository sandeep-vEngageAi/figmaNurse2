import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <div className="card" style={{backgroundColor:props.BGColor,}}>
            <div><img src={props.SRC} /></div>
            <div className="card__font"
            style={{color:props.COLOR,textAlign:"center",opacity:props.OPACITY}} >{props.name}</div>
        </div>
    )
}

export default Card
