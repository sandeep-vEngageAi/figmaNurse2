import React, { useState, useEffect } from "react";
import Row1 from "../../../Components/screen1/S1Row1/Row1";
import Row2 from "../../../Components/screen1/S1Row2/Row2";

const RoutineCalls = () => {
  const [fetchedData, setFectchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchedDataFunc = () => {
    setLoading(true);
    try {
      fetch("http://ba7ef1eb8405.ngrok.io/api/getPatientDepartmentDetails/get", {
        method: "GET",
      })
        .then((res) => {
          setLoading(false);
          console.log(res);
          return res.json();
        })
        .then((result) => setFectchedData(result));
    } catch (err) {
      console.log("ERROR OCCURED", err);
    }
  };
  useEffect(()=>{
     fetchedDataFunc();
  },[])
  let renderedData = null;
  
  renderedData = fetchedData.map((item, index) => {
    return (
      <Row2
        key={index}
        name={item["Patient Name"]}
        dischargeDate={item["Discharge Date"]}
        dischargeDiagnosis={item["Diagnosis"]}
        alert={item["Department"]}
      />
    );
  });
  return (
    <div>
      <Row1 />
     
      {renderedData}
     
    </div>
  );
};

export default RoutineCalls;
