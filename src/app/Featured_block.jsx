import React from "react";

export default function Featured (promes){
    return(
        <div className={promes.css}>
            <img src={promes.imgSrc} alt={promes.imgAlt} className={promes.imgCss}/>
            <p className={promes.textCss}>{promes.textText}</p>
        </div>
    );

}