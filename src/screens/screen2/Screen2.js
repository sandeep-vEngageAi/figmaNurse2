import React, { useState, useEffect } from "react";
import Row1 from "../../Components/screen2/S2Row1/S2Row1";
import Row2 from "../../Components/screen2/S2Row2/S2Row2";
import Header1 from "../../Components/screen2/S2Header1/Header";
import addfiles from "../../AllIcons/addFilesS2.png";
import swipeS2 from "../../AllIcons/swipeS2.png";
import imgUpload from "../../AllIcons/uploadS2.png";
import FileUpload from '../../Components/screen2/FileUpload/FileUpload';
import "./Screen2.css";
const Screen2 = () => {
  const [fetchedData, setFectchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  function handleErrors(response) {
    console.log("ERROR", response);
    if (!response.ok) {
    }else if(Array.isArray(response.json()) != true){
      throw Error(response.statusText);
      
    }
    return response;
  }
  const fetchedDataFunc = () => {
    setLoading(true);
    try {
      fetch(
        `${process.env.REACT_APP_SCREEN2_URL}/api/v1/getDischargeDetails`,
        {
          method: "GET",
        }
      )
      // .then(handleErrors)
        .then((res) => {
          setLoading(false);
          console.log(res);
          return res.json();
        })
        .then((result) => {
          if(Array.isArray(result)===true){
            setFectchedData(result);

          }
        })

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
      <Row2
        key={index}
        name={item["patientName"]}
        QRCode={item["qrCode"]}
        hospitalID={item["hospitalId"]}
        dischargeStatus={item["dischargeStatus"]}
        age={item["age"]}
      />
    );
  });
  return (
    <div className="S2_container">
      <div className="S2_app">
        <div className="S2header">
          <Header1 />
        </div>
        <div className="S2body">
          <div className="S2bodyHeader">
            <Row1 />
          </div>
          <div className="S2bodyContent">{renderedData}</div>
        </div>
        <div className="sidebarS2">
          <FileUpload />

        </div>
      </div>
    </div>
  );
};

export default Screen2;
