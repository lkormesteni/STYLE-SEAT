import React from "react";
import * as S from "./services.styled";

function ServiceDetails(props) {
  return (
    
    <S.CardService >
      <div className="card--info">
        <img src= {props.element.image} alt= {props.element.image}/>
                <h3>{props.element.service}</h3>
        <p>
          Traditional haircut with scissors and clipper in hand
          professionals who understand the subject VERY WELL.
        </p>
        <span className="price">{props.element.price}</span>
      </div>
    </S.CardService>
  );
}

export default ServiceDetails;
