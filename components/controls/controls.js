import {controls, controlsTitle} from "../../constants/copyright";
import React from "react";
import ControlButton from "./control-button";

export default function Controls({className}) { //className = player-info__controls
    return (
        <div className={`controls ${className ?? ""}`}>
            <p className={"controls__title"}>{controlsTitle}</p>
            <div className={"controls__buttons"}>
                {renderControls()}
            </div>
        </div>
    )
}

function renderControls() {
    return Object.values(controls).map((value, index) => <ControlButton key={index} title={value}/>
    );
}