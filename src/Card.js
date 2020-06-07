import React, { useState } from 'react';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import logo from './img/logo.png';
import './css/Cardcss.css';

function Card() {
  const [faculty, setFaculty] = useState('คณะวิศวกรรมศาสตร์');
  const [department, setDepartment] = useState('สาขาวิศวกรรมทั่วไป');
  const [university, setUniversity] = useState('จุฬาลงกรณ์มหาวิทยาลัย');
  const [detail, setDetail] = useState([
    {
      roundNumber: 1,
      roundName: 'Portfolio',
      yourScore: '23,453',
      lowestScore: '20,845',
      highestScore: '23,415',
      avgScore: '21,345',
      year: '2560',
      status: true,
    },
    {
      roundNumber: 2,
      roundName: 'Quota',
      yourScore: '23,453',
      lowestScore: '20,845',
      highestScore: '23,415',
      avgScore: '21,345',
      year: '2560',
      status: true,
    },
    {
      roundNumber: 3,
      roundName: 'รับตรงร่วมกัน',
      yourScore: '',
      lowestScore: '',
      highestScore: '',
      avgScore: '',
      year: '2560',
      status: false,
    },
    {
      roundNumber: 4,
      roundName: 'Admisson',
      yourScore: '23,453',
      lowestScore: '20,845',
      highestScore: '23,415',
      avgScore: '21,345',
      year: '2560',
      status: true,
    },
    {
      roundNumber: 5,
      roundName: 'รับตรงอิสระ',
      yourScore: '',
      lowestScore: '',
      highestScore: '',
      avgScore: '',
      year: '2560',
      status: false,
    },
  ]);
  const [countLike, setCountLike] = useState('10')

  return (
    <div className="App">
      <Header faculty={faculty}
        department={department}
        university={university}
        logo={logo} />
      <hr className="line-one" />
      <Body detail={detail} />
      <hr className="line-two" />
      <Footer
        countLike={countLike} />
    </div>
  );
}

export default Card;
