import React, { useState, useEffect } from "react";
import Row1 from "../../Components/screen2/S2Row1/S2Row1";
import Row2 from "../../Components/screen2/S2Row2/S2Row2";
import Header1 from "../../Components/screen2/S2Header1/Header";
import FileUpload from "../../Components/screen2/FileUpload/FileUpload";
import { connect } from "react-redux";
import { fetchingAgain } from "../../Store/action";
import "./Screen2.css";
const Screen2 = (props) => {
  const [fetchedData, setFectchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchedDataFunc = () => {
    setLoading(true);
    try {
      fetch(`${process.env.REACT_APP_SCREEN2_URL}/api/v1/getDischargeDetails`, {
        method: "GET",
      })
        .then((res) => {
          setLoading(false);
          return res.json();
        })
        .then((result) => {
          if (Array.isArray(result) === true) {
            setFectchedData(result);
          }
        });
    } catch (err) {
      console.log("ERROR OCCURED", err);
    }
  };
  let fetchingStatus = props.fetchingStatus;
  useEffect(() => {
    if(fetchingStatus ===true){
      fetchedDataFunc();
      props.fetchingStatusToFalseFunc(false)
    }
  }, [fetchingStatus]);


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

const mapStateToProps = (state) => {
  return {
    fetchingStatus: state.fetchAgain,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchingStatusToFalseFunc: () => dispatch(fetchingAgain(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);
