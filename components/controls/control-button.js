import React from "react";

export default function ControlButton({title, onAction}) {
    return (
        <button className={`controls__button`} onClick={() => onAction(title)}>
            <p className={"controls__button-text"}>{title}</p>
        </button>
    )
}