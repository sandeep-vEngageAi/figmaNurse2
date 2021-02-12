import React, { useState, useEffect } from "react";
import Row1 from "../../../Components/screen1/RoutineCalls/RCColNames/RCColNames";
import Row2 from "../../../Components/screen1/RoutineCalls/RCRowData/RCRowData";

const RoutineCalls = () => {
  const [fetchedData, setFectchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  function handleErrors(response) {
    console.log("ERROR", response);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    else if(typeof(response.json()) != Array){
      throw Error(response.statusText);

    }
    return response;
  }
  const fetchedDataFunc = () => {
    setLoading(true);
    try {
      
      fetch(
        `${process.env.REACT_APP_SCREEN1_URL}/api/v1/getDepartmentDetails`,{
          method:"GET"
        }
      )
        // .then(handleErrors)
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
    <div className="S2Routine">
      <div className="S2RoutineHeader">
        <Row1 />
      </div>
      <div className="S2RoutineContent">
        {renderedData}
        </div>
    </div>
  );
};

export default RoutineCalls;
