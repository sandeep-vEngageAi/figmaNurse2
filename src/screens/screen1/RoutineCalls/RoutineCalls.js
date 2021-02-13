import React, { useState, useEffect } from "react";
import Row1 from "../../../Components/screen1/RoutineCalls/RCColNames/RCColNames";
import Row2 from "../../../Components/screen1/RoutineCalls/RCRowData/RCRowData";
import './RoutineCalls.css'
const RoutineCalls = () => {
  const [fetchedData, setFectchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchedDataFunc = () => {
    setLoading(true);
    try {
      
      fetch(
        `${process.env.REACT_APP_SCREEN1_URL}/api/v1/getDepartmentDetails`,{
          method:"GET"
        }
      )
        .then((res) => {
          setLoading(false);
          return res.json();
        })
        .then((result) => {
          console.log("DISCHARGE", result);
          if(Array.isArray(result)===true){
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
    <div className="S1Routine">
      <div className="S1RoutineHeader">
        <Row1 />
      </div>
      <div className="S1RoutineContent">
        {renderedData}
        </div>
    </div>
  );
};

export default RoutineCalls;
