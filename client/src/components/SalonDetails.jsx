import React from "react";

function SalonDetails(props) {
    
  return (
    <div className="container-list-pic">
        <img src={props.element.image} alt={props.element.image}/>
        <span>Name : {props.element.salonName}</span> <br/>
        <span>Address : {props.element.address}</span> <br/>
        <span>PhoneNumber : {props.element.description}</span> <br/>
        <button className="button-order">RESERVE</button>
    </div>
  )
}

export default SalonDetails