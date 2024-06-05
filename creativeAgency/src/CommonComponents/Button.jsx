import React from "react";
import "./Button.css";

function Button({clss, content}){
    return(
        <>
            <button className={clss}>
            {content? content:'missing'}
            </button>
        </>
    )
}
export default Button;