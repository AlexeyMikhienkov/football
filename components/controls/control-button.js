import React from "react";
import Symbol from "./symbol";

export default function ControlButton({title}) {
    return (
        <button className={`controls__button`}>
            <div className={"controls__button-symbol"}>
                <Symbol/>
            </div>
            <p className={"controls__button-text"}>{title}</p>
        </button>
    )
}