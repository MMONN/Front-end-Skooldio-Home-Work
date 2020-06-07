import React from 'react';
import { Text } from '../stlyed/stlyed';
import heart from '../img/heart.png';
import '../css/Headercss.css';

function Header(props) {
  return (
    <div className="container" >
      <div className="first-part">
        <div className="box-logo">
          <img src={props.logo} className="logo" />
        </div>
        <div className="box-information">
          <Text faculty>{props.faculty}</Text>
          <Text department>{props.department}</Text>
          <Text university>{props.university}</Text>
        </div>
      </div>
      <div className="second-part">
        <img src={heart} className="love" />
      </div>
    </div>
  );
}
export default Header;
