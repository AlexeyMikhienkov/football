import React from "react";
import {
    gameIntroSubtitle,
    gameIntroTitle,
    gameResultSubtitle,
    gameResultTitle, hyphen, resetGame,
    startGame
} from "../../constants/copyright";

export default function IntroContent({className, onAction, result, score}) {
    return (
        result ?
            <div className={className ?? ""}>
                <div className={"intro__result-heading"}>
                    <p className={"intro__title_result"}>{gameResultTitle}</p>
                    <p className={"intro__hyphen"}>{hyphen}</p>
                    <p className={"intro__score"}>{score}</p>
                </div>
                <p className={"intro__subtitle"}>{gameResultSubtitle}</p>
                <button className={"intro__button"} onClick={onAction}>{resetGame}</button>
            </div> :
            <div className={className ?? ""}>
                <p className={"intro__title"}>{gameIntroTitle}</p>
                <p className={"intro__subtitle"}>{gameIntroSubtitle}</p>
                <button className={"intro__button"} onClick={onAction}>{startGame}</button>
            </div>
    )
}