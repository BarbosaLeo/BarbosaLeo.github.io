import React from "react";

export default function ImageCollection(props){
    return(
        <div className="Image-container">
            <img
                className="image"
                src={props.imageURL} 
                alt={props.alt}
            />
        </div >
    );
}
