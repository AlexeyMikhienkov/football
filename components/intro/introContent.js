import React from "react";
import {gameIntroSubtitle, gameIntroTitle, startGame} from "../../constants/copyright";

export default function IntroContent({className, onAction}) {
    return (
        <div className={className ?? ""}>
            <p className={"intro__title"}>{gameIntroTitle}</p>
            <p className={"intro__subtitle"}>{gameIntroSubtitle}</p>
            <button className={"intro__button"} onClick={onAction}>{startGame}</button>
        </div>
    )
}