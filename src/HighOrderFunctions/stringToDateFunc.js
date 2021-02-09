export const stringToDateFunc = (props)=>{
 

    let appntDate = props.dischargeDate;
    var options = {
      hour: "numeric",
      minute: "numeric",
      day: "short",
      month: "short",
      year: "numeric",
    };

    // console.log(appntDate);
    if (appntDate !== "") {
      appntDate = appntDate.toLocaleString("en-US", options);
    }

    // console.log("AppointmentDate", appntDate);
    if (appntDate === "NONE") {
      appntDate = "";
    } else {
      appntDate = appntDate.replace("T", " ");
    }
    return{
        dateRequired:AppntDate(appntDate),
        timeRequired:Time(appntDate)
    }
}
    const AppntDate = (appntDate) => {
      if (appntDate !== "") {
        let Date = appntDate.substring(0, 10);
        var month = Date.substring(5, 7);
        let Appoint = `${Number(Date.substr(8))}-${Month(
          Number(month)
        )}-${Date.substr(0, 4)}`;
        return Appoint;
      }
    };
    // AppntDate();

    const Time = (appntDate) => {
      if (appntDate !== "") {
        var [k, t] = appntDate.split(" ");

        var [h, m, l] = t.split(":");
        let time =
          ((h % 12) + 12 * (h % 12 == 0) + ":" + m, h >= 12 ? "PM" : "AM");

        return `${h}:${m} ${time}`;
      }
    };

    const Month = (id) => {
        switch (id) {
          case 1:
            return "Jan";
    
          case 2:
            return "Feb";
    
          case 3:
            return "Mar";
    
          case 4:
            return "April";
    
          case 5:
            return "May";
    
          case 6:
            return "Jun";
    
          case 7:
            return "July";
    
          case 8:
            return "Aug";
    
          case 9:
            return "Sep";
    
          case 10:
            return "Oct";
    
          case 11:
            return "Nov";
    
          case 12:
            return "Dec";
        }
      };