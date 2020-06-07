import React from 'react';
import { Text, CircleRound } from '../stlyed/stlyed';
import reward from '../img/reward.png'
import EditScoreButton from './EditScoreButton'
import '../css/Bodycss.css'
function Body(props) {  
      return (
            <>
                  <div className="row round" >

                        <Text round>รอบที่เปิด</Text>

                        <div className="circle">
                              {props.detail.map((detail, index) =>
                                    <CircleRound key={index} bgColor={detail.status === true ? "#2ecc71" : "#d8d8d8"}>
                                          <Text>{detail.roundNumber}</Text>
                                    </CircleRound>

                              )}
                        </div>

                  </div>

                  < div className="row" id="row-2">
                        <Text roundNumber>รอบที่ {props.detail[3].roundNumber} : {props.detail[3].roundName}</Text>
                        <EditScoreButton buttonName="แก้ไขคะแนน"/>
                  </div>

                  <div className="row" id="row-2">
                        <img src={reward} className="reward" />
                        <div className="showScore">
                              <Text yourScore> คะแนนของคุณคือ</Text>
                              <Text score> {props.detail[3].yourScore}</Text>
                        </div>
                  </div>
                  
                  <div className="row" id="row-2">
                        <div className="lowestScore">
                              <Text socres> {props.detail[3].lowestScore}</Text>
                              <Text textScore> คะแนนต่ำสุด {props.detail[3].year.substring(2)}</Text>
                        </div>
                        <div className="avgScore">
                              <Text socres> {props.detail[3].highestScore}</Text>
                              <Text textScore> คะแนนเฉลี่ย {props.detail[3].year.substring(2)}</Text>
                        </div>
                        <div className="highestScore">
                              <Text socres> {props.detail[3].avgScore}</Text>
                              <Text textScore> คะแนนสูงสุด {props.detail[3].year.substring(2)}</Text>
                        </div>
                  </div>
            </>
      )
}
export default Body;