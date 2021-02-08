import React from "react";
import Card from "../../Components/Card/Card";
import "./Screen3.css";
import medicalHistoryS3 from "../../AllIcons/medicalHistoryS3.png";
import medicalReportS3 from "../../AllIcons/medicalReportS3.png";
import detailsS3 from "../../AllIcons/detailsS3.png";
import electrocardiogramIcon from "../../AllIcons/electrocardiogram.png";
import phoneCallIcon from "../../AllIcons/phoneCallS3.png";
import Body1 from "../../Components/screen3/medication/Body1/Body1";
import Body2 from "../../Components/screen3/medication/Body2/Body2";
import Screen3Column2 from "../../Components/screen3/Screen3Column2/Scree3Column2";

const Screen3 = () => {
  return (
    <div className="screen3__container">
      <div className="screen3">
        <div className="screen3__column1">
          <div className="screen3__header">
            <p className="screen3__header__text">Patient Details </p>
          </div>
          <div className="screen3__firstLine">
            <div className="screen3__firstLine__medicalIcon">
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={medicalReportS3}
              />
            </div>
            <div className="screen3__firstLine__rows">
              <div className="screen3__firstLine__row1">
                <p className="line_alignment">Full Name</p>
                <p className="line_alignment">DOB</p>
                <p className="line_alignment">MRN</p>
                <p className="line_alignment">Discharge Context</p>
                <p className="line_alignment">Medical devices</p>
              </div>
              <div className="screen3__firstLine__row2">
                <p
                  className="line_alignment"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p>Sahil Karia</p>
                  <p>(M)</p>
                </p>
                <p
                  className="line_alignment"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p>July 19, 1992</p>
                  <p>(age 23)</p>
                </p>
                <p className="line_alignment">CAMNp021</p>
                <p className="line_alignment">Post Angioplasty</p>
                <p className="line_alignment">None</p>
              </div>
            </div>
          </div>
          <div className="screen3__sidebar">
            <Card SRC={detailsS3} name="Discharge Details" />
            <Card SRC={medicalHistoryS3} name="Alert Thresholds" />
            <Card SRC={electrocardiogramIcon} name="Follow-up Schedules" />
            <Card
              SRC={phoneCallIcon}
              name="Medication Schedules"
              name="Discharge Details"
              BGColor="#3981E9"
              COLOR="#FFFFFF"
              OPACITY="1"
              name="Medication Schedules"
            />
          </div>
          <div className="screen3__body">
            {/* <Body1 /> */}
            <Body2 />
          </div>
        </div>
        <Screen3Column2 />
      </div>
    </div>
  );
};

export default Screen3;
