import React, { useState, useEffect } from "react";
import Row1 from "../../../Components/screen1/RoutineCalls/RCColNames/RCColNames";
import Row2 from "../../../Components/screen1/RoutineCalls/RCRowData/RCRowData";

const RoutineCalls = () => {
  const [fetchedData, setFectchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchedDataFunc = () => {
    setLoading(true);
    try {
      fetch(`${process.env.REACT_APP_SCREEN1_URL}/api/getPatientDepartmentDetails/get`, {
        method: "GET",
      })
        .then((res) => {
          setLoading(false);
          return res.json();
        })
        .then((result) => {
          console.log("DISCHARGE",result);
          setFectchedData(result)
        });
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
        name={item["patientName"]}
        dischargeDate={item["dischargeDate"]}
        dischargeDiagnosis={item["diagnosis"]}
        department={item["department"]}
      />
    );
  });
  return (
    <div>
      <Row1 />
     <Row2 />
      {renderedData}
     
    </div>
  );
};

export default RoutineCalls;
