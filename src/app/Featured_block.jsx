import React from "react";

export default function Featured (promes){
    return(
        <div className={promes.css}>
            <img src={promes.imgSrc} alt={promes.imgAlt} className={promes.imgCss}/>
            <h3 className={promes.h5Css}>{promes.h5Text}</h3>
            <p className={promes.textCss}>{promes.textText}</p>
        </div>
    );

}