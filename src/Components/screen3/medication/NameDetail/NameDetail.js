import React from 'react';
import './NameDetail.css';
import stringtoDateFunc from '../../../../HighOrderFunctions/stringToDateFunc';
const NameDetail = (props) => {
    return (
            <div className="Screen3__NameDetails">
                <p
                  className="line_alignment"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p>{props.name}</p>
                  <p>(M)</p>
                </p>
                <p
                  className="line_alignment"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {/* <p>July 19, 1992</p> */}
                  <p>{props.age}</p>
                </p>
                <p className="line_alignment">{props.hospitalID}</p>
                <p className="line_alignment">{props.dischargeContext}</p>
                <p className="line_alignment">{props.medicalDevices}</p>
              </div>
    )
}

export default NameDetail
