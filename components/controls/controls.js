import {controls, controlsTitle} from "../../constants/copyright";
import React from "react";
import ControlButton from "./control-button";

export default function Controls({className, onAction}) {
    return (
        <div className={`controls ${className ?? ""}`}>
            <p className={"controls__title"}>{controlsTitle}</p>
            <div className={"controls__buttons"}>
                {renderControls(onAction)}
            </div>
        </div>
    )
}

function renderControls(onAction) {
    return Object.values(controls).map((value, index) => <ControlButton key={index} index={index + 1} title={value} onAction={onAction} />
    );
}