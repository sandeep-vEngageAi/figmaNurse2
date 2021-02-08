import React,{useState,useEffect} from "react";
import Row1 from "../../Components/screen2/S2Row1/S2Row1";
import Row2 from "../../Components/screen2/S2Row2/S2Row2";
import Header1 from "../../Components/screen2/S2Header1/Header";
import addfiles from '../../AllIcons/addFilesS2.png'
import swipeS2 from '../../AllIcons/swipeS2.png';
import imgUpload from '../../AllIcons/uploadS2.png';
import './Screen2.css';
const Screen2 = () => {
  const [fetchedData, setFectchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchedDataFunc = () => {
    setLoading(true);
    try {
      fetch("http://ba7ef1eb8405.ngrok.io/api/getPatientDischargeDetails/get", {
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
        QRCode={item["QR Code"]}
        hospitalID={item["Hospital ID"]}
        dischargeStatus={item["Discharge Status"]}
      />
    );
  });
  return (
    <div>
      <div className="S2_container">
        <div className="S2_app">
          <div className="S2header">
            <Header1 />
          </div>
          <div className="S2body">
            <Row1 />
           {renderedData}
           <Row2 />
           <Row2 />
          </div>
          <div className="sidebarS2">
            <div className="sidebarS2__heading">
              Upload Discharge Summary
            </div>
            <div className="sidebarS2__addfiles" >
              <img src ={addfiles} />
            </div>
            <div className="sidebarS2__chooseFile" >
              <p>Choose a file or drag it here</p>
              <p>
              <img src ={swipeS2} />
              </p>
            </div>
            <div className="sidebarS2__upload" >
              <p><img src ={imgUpload} /></p>
              <p>Upload</p>
           
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Screen2;
