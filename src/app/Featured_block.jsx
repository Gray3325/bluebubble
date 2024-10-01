import React from "react";

export default function Featured (promes){
    return(
        <div className={promes.css}>
            <img src={promes.imgSrc} alt={promes.imgAlt} style={{width:"15em",height:"15em",borderRadius:"1em"}}/>
            <h3>{promes.h5Text}</h3>
            <p>{promes.textText}</p>
        </div>
    );

}