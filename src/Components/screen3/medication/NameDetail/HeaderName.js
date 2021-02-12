import React,{useState,useEffect} from 'react'
import NameDetail from './NameDetail';
const HeaderName = () => {
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
        `${process.env.REACT_APP_SCREEN2_URL}/api/v1//getLastPatientDetails`,
        {
          method: "GET",
        }
      )
      // .then(handleErrors)
        .then((res) => {
          setLoading(false);
          return res.json();
        })
        .then((result) => {
            console.log("SCREEN3NAMELIST",result)
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

export default HeaderName
