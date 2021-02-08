import "./App.css";
import React from "react";
import Screen1 from "./screens/screen1/Screen1";
import Screen2 from './screens/screen2/Screen2';
import Screen3 from './screens/screen3/Screen3';
import Screen4 from './screens/screen4/Screen4'
function App() {
  return (
    <div className="app__container">
      <p className="vEngageLogoClass">
        <img style={{width:"70px",objectFit:"contain"}} src="https://lh3.googleusercontent.com/P5HdyDEA_1W5PJ3d12bO7Qyks7hITUNl_joUu31atU48sDGm7UyFnPfEbXr1CxLsJG4H=s104" />
       </p>
      {/* <Screen1 /> */}
      {/* <Screen2 /> */}
      <Screen3 />
      {/* <Screen4 /> */}
    </div>
  );
}

export default App;
