import React from "react";

function Section(props){
    return(
        <section>
            <div className="Section">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <div className="Section-children">{props.children}</div>
            </div>
        </section>
    );
}
export default Section;