import React from "react";
import '../css/Card.css'

const Card = (props) => {
  return (
    <>
      
      <div className="card">
        <h2 className="quote">{props.main}</h2>
        <hr className="hr" />
        <p className="author">{props.author}</p>
      </div>
    </>
  );
};

export default Card;
