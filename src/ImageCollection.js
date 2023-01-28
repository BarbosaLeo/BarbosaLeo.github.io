import React from "react";

export default function ImageCollection(props){
    return(
        <li>
            <img
                className="image"
                src={props.imageURL} 
                alt={props.alt}
            />
        </li>
    );
}
