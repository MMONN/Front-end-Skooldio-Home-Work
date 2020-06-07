import React from 'react';
import { Text } from '../stlyed/stlyed';
import math from '../img/editScore.png'
import '../css/Bodycss.css'

function EditScoreButton(props) {
      return (
            <>
                  <button className="editScore">
                        <Text editScore>{props.buttonName} </Text>
                        <img src={math} className="math" />
                  </button>
            </>
      );
}
export default EditScoreButton;
