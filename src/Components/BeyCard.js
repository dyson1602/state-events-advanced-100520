import React from "react";

const BeyCard = (props) => {
  return (
    <>
      <div className="card">
        {props.beyObj.name}
        <img src={props.beyObj.img} />
      </div>
    </>
  );
};

export default BeyCard;
