import React from "react";

function Section(props){
    return(
        <section>
            <div className="Section">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <ul>{props.children}</ul>
            </div>
        </section>
    );
}
export default Section;