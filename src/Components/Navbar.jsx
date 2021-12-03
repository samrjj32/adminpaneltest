import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell,faCog ,faUserCircle} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-section1">
      <FontAwesomeIcon icon={faBars} />
      {/* <i class="fas fa-bars"></i> */}
      </div>
      <div className="nav-section2">
      
          <select name="cars" id="cars">
            <option value="volvo">https://cookieyes.com</option>
            
          </select>
        
        <div className="second">
        <div className="naviconcontainer">
        <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="naviconcontainer">
        <FontAwesomeIcon icon={faCog} />
        </div>
        <div className="naviconcontainer">
        <FontAwesomeIcon icon={faUserCircle} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
