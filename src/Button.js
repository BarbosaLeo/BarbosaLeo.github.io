import React from "react";

function Button(props){
    return(
    
    <button className="btn"><span>{props.btnContent}</span></button>

    );
}

export default Button;