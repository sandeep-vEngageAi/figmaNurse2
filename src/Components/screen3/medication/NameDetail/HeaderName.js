import React,{useState,useEffect} from 'react'
import NameDetail from './NameDetail';
import { connect } from "react-redux";
import {setQRCodeFunc} from '../../../../Store/action';

const HeaderName = (props) => {
    const [fetchedData, setFectchedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchedDataFunc = () => {
    setLoading(true);
    try {
      fetch(
        `${process.env.REACT_APP_SCREEN2_URL}/api/v1//getLastPatientDetails`,
        {
          method: "GET",
        }
      )
        .then((res) => {
          setLoading(false);
          return res.json();
        })
        .then((result) => {
          if(Array.isArray(result)===true){
            setFectchedData(result);
            props.updateQRCodeFunc(result[0]["qr_code"])
            console.log("QRCODE SETTING",result[0]["qr_code"])
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
      <NameDetail
        key={index}
        name={item["patientName"]}
        hospitalID={item["hospitalId"]}
        dischargeStatus={item["dischargeStatus"]}
        age={item["age"]}
        dischargeContext ={item['dischargeContext']}
        medicalDevices ={item['medicalDevices']}

      />
    );
  });
    return (
        <div>
            {renderedData}
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
   updateQRCodeFunc: (updatedQRCode)=>dispatch(setQRCodeFunc(updatedQRCode))
  };
};
export default  connect(null,mapDispatchToProps)(HeaderName)
