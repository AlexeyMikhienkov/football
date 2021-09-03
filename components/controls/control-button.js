import React from "react";

export default function ControlButton({title}) {
    return (
        <button className={`controls__button`}>
            <p className={"controls__button-text"}>{title}</p>
        </button>
    )
}