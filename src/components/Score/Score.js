import React from "react";
import "./Score.css";
import { FaArrowRight } from 'react-icons/fa';

//stateless component
const Score = props => (
  <div className="gameScore">
    <h3 className="score">Your Score < FaArrowRight /> {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;
