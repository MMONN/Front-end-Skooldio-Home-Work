import styled, { css } from 'styled-components';

export const Text = styled.p`
    font-family: prompt;
    font-styled: normal;
    font-stretch: normal;
    height: 16px;
    margin: 0 0 0 0;
    ${props => props.faculty && css` 
        text-align: left;
        color: #ff5a5a ;
        font-size: 24px;
        font-weight: 600; 
        line-height: 2.67;
        margin: 0 0 0 5px;
    `}
    ${props => props.department && css` 
        text-align: left;
        color: #9b9b9b ;
        font-size: 20px;
        font-weight: 600; 
        line-height: 4.0;
        margin: 0 0 0 5px;
    `}
    ${props => props.university && css` 
        text-align: left;
        color: #9b9b9b ;
        font-size: 20px;
        font-weight: 300;
        line-height: 6.0; 
        margin: 0 0 0 5px;
    `}
    ${props => props.roundNumber && css` 
        text-align: left;
        color: #ff5a5a ;
        font-size: 16px;
        font-weight: 600; 
        margin-left:20px;
    `}
    ${props => props.round && css` 
        text-align: left;
        color: #5f5f5f;
        font-size: 20px;
        font-weight: 300; 
        margin-left:20px;
        height: 0;
        line-height: 0.1;
    `}
    ${props => props.editScore && css` 
        text-align: left;
        color: #ff5a5a ;
        font-size: 12px;
        font-weight: 500; 
`}
    ${props => props.yourScore && css` 
        text-align: right;
        color: #4a4a4a;
        font-size: 12px;
        font-weight: 300; 
        margin-right: 20px;
    `}
    ${props => props.score && css` 
        text-align: right;
        color:#4a4a4a ;
        font-size: 42px;
        font-weight: 300; 
        height: 64px;
        margin-right: 20px; 
    `}
    ${props => props.socres && css` 
        text-align: center;
        color: #5f5f5f;
        font-size: 19.6px;
        font-weight: 300; 
        height: 25px;
    `}
    ${props => props.textScore && css` 
        text-align: center;
        color: #5f5f5f;
        font-size: 11.2px;
        font-weight: 300; 
        height: 25px;
    `}
    ${props => props.CountPeople && css` 
        text-align: left;
        color:#9b9b9b;
        font-size: 12px;
        font-weight: 300; 
        font-style: italic;
        margin: 0 0 0 10px;
        line-height: 1.1;
    `}
    ${props => props.propotionScore && css` 
        text-align: left;
        color:#48b6a3;
        font-size: 16px;
        font-weight: 300; 
        line-height: 0.9;
        margin: 0 0 0 18px;
    `}
   
`;
export const CircleRound = styled.div`
    display: flex;
    justify-content: center;
    width:1.5em;
    height: 1.5em;
    border-radius: 50%;     
    background: ${props => props.bgColor};
    color: white;
    margin-left:8px;
`;