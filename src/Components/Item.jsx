import React from "react";

export default function Item(props) {



  return (
    <div className="item" key={props.data} onClick={() => props.func(props.data,props.rowIndex,props.colIndex)}>

      <img src={`/images/round${props.round}/${props.data}.jpg`} alt="" />

    </div>
  );
}
