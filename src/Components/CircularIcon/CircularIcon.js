import React from 'react'
import './CircularIcon.css'
const CircularIcon = (props) => {
    return (
        <div>
            <div className="circularIcon" style={{backgroundColor:props.BGColor}} >
           {props.imgSrc && <img src={props.imgSrc} {...props}  />}
           <div>{props.text}</div>
          </div>
        </div>
    )
}

export default CircularIcon;
