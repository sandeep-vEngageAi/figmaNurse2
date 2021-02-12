import React, { useState, useEffect } from "react";
import telephoneS3 from "../../../../AllIcons/telephoneS3.png";
import CircularIcon from "../../../CircularIcon/CircularIcon";
import Body1List from "./Body1List/Body1List";
import "./Body1.css";
import CustomButton1 from "../../../Buttons/customButton1/CustomButton1";
const Body1 = () => {
  const [fetchedData, setFectchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchedDataFunc = () => {
    setLoading(true);
      var requestOptions = {
        method: "POST",
        body: JSON.stringify({
          "qr_code": "JSWJZU"
        }),
        
        headers: { "content-type": "application/x-www-form-urlencoded" },
      };
    try {
      fetch(
        `${process.env.REACT_APP_SCREEN2_URL}/api/v1/getPatientMedicineDetails`,requestOptions)
        .then((res) => {
          setLoading(false);
          console.log(res);
          return res.json();
        })
        .then((result) => {
          
          // console.log("MedicalResponse",result);
          if (Array.isArray(result) === true) {
            setFectchedData(result);
          }
        });
    } catch (err) {
      console.log("ERROR OCCURED", err);
    }
  };
  useEffect(() => {
    fetchedDataFunc();
  }, []);
  let renderedData = [];

  renderedData = fetchedData.map((item, index) => {
    return (
      <Body1List
        key={index}
        medicineName={item["medicineName"]}
        dosage={item["dosage"]}
        frequency={item["frequency"]}
      />
    );
  });

  return (
    <div className="screen3__body1__container">
      <div className="screen3__body1__header">
        <div className="screen3__body1__header_date">Discharge date</div>
        <div className="screen3__body1__header_approvals">
          <CustomButton1 name="Approve" />
          <CircularIcon imgSrc={telephoneS3} alt="telephone" />
        </div>
      </div>
      <div style={{ height: "64px" }}>
        <div className="screen3__body1__Names">
          <div className="screen3__body1__brandName">
            <p>BRAND NAME</p>
          </div>
          <div className="screen3__body1__medicineTime">MEDICINE TIME</div>
          <div className="screen3__body1__timeline">TIMELINE</div>
        </div>
        <div className="screen3__body1__Names">
          <div className="screen3__body1__dose">(Dosage)</div>
          <div className="screen3__body1__emptySpace"></div>
          <div className="screen3__body1__dates">
            <div className="screen3__body1__date">Aug 1</div>
            <div className="screen3__body1__date">Aug 2</div>
            <div className="screen3__body1__date">Aug 3</div>
          </div>
        </div>
      </div>
      <div className="screen3__body1__lists">
        {renderedData}
      </div>
    </div>
  );
};

export default Body1;
