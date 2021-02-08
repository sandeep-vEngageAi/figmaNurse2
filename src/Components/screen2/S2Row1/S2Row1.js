import React from 'react'
import './S2Row1.css';
const Row1 = () => {
    return (
        <div className="row1">
            <div className="row1__name">
                <p>PATIENT NAME</p>
                <p className="row1__name__dob">(DOB)</p>
                </div>
            <div className="row1__name">QR CODE</div>
            <div className="row1__name">HOSPITAL ID</div>
            <div className="row1__name">DISCHARGE STATUS</div>
            <div className="row1__status">STATUS</div>
        </div>
    )
}

export default Row1
