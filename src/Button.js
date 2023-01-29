import React from "react";

function Button(props){
    return(
    
    <button className={props.className} onClick={props.onClick}><span>{props.btnContent}</span></button>

    );
}

export default Button;