import {controls, controlsTitle} from "../../constants/copyright";
import React from "react";
import ControlButton from "./control-button";

export default function Controls({className}) { //className = player-info__controls
    return (
        <div className={`controls ${className ?? ""}`}>
            <p className={"controls__title"}>{controlsTitle}</p>
            <div className={"controls__buttons"}>
                {
                  Object.entries(controls).forEach(([key, value]) => {
                      return <ControlButton key={key} title={value}/>
                  })
                }
            </div>
        </div>
    )
}