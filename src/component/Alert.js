import React from "react";

export default function Alert(props) {
  // const capatalize = (word) =>{
  //   const lower = word.toLowerCase();
  //   return (lower.charAt(0).toUpperCase() + lower.slice(1));
  // }
  return (
    <div>
     
     <div
        className={`alert alert-${props.alert.Type} alert-dismissible fade show`}
        role="alert"
      >
        <strong> {props.alert.Type}</strong>: {props.alert.msg}
        

      </div>
    </div>
  );
}
