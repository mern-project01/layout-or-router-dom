import React from 'react';

const Card = ({props}) => {
  // console.log(props)
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{props.name} </h2>
        <p>{props.address.city} </p>
        
      </div>
    </div>
  );
};

export default Card;