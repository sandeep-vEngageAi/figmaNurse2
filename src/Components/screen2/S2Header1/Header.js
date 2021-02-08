import React from "react";
import hamburgerIcon from "../../../AllIcons/hamburger.png";
import searchIcon from "../../../AllIcons/mdi_search.png";
import filterS2   from '../../../AllIcons/filterS2.png'
import "./Header.css";
const Header1 = () => {
  return (
    <div className="header">
      <div className="  header_name">Dashboard</div>
      <div className="  header__items">
        <div className="  header__input">
          <div className="  header__input__icon">
            <img src={searchIcon} />
          </div>
          <div className="  header__input__search">
            {/* <input type="text" /> */}
          </div>
        </div>
       
        <div className="  header__filter">
          <img  src={filterS2} />
        </div>
        <div className="  header__icon">
          <img style={{ width: "100%", height: "100%" }} src={hamburgerIcon} />
        </div>
      </div>
    </div>
  );
};

export default Header1;
