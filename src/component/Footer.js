import React from 'react';
import { Text } from '../stlyed/stlyed';
import user from '../img/user.png'
import arrow from '../img/arrow.png'
import bitmap from '../img/bitmap.png'
import '../css/Footercss.css'

function Footer(props) {
      return (
            <>
                  <div className="row">
                        <button>
                              <img src={arrow} className="arrow" />
                              <Text propotionScore> ดูสัดส่วนคะแนน</Text>
                        </button>

                  </div>
                  
                  <hr className="line-three"/>

                  <div className="row" id="row-footer">
                        <div className="row">
                              <img src={user} className="user" />
                              <Text CountPeople> {props.countLike} คนที่สนใจ</Text>
                        </div>
                        <img src={bitmap} className="bitmap" />
                  </div>
            </>
      );
}
export default Footer;
