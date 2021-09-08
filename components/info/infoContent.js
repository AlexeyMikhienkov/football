import React from "react";
import {
    gameIntroSubtitle,
    gameIntroTitle,
    gameResultSubtitle,
    gameResultTitle, resetGame,
    startGame
} from "../../constants/copyright";

export default function InfoContent({className, onAction, result, score, onResetGame}) {
    return (
        result ?
            <div className={className ?? ""}>
                <div className={"info__result-heading"}>
                    <p className={"info__title_result"}>{gameResultTitle}</p>
                    <p className={"info__score"}>{score}</p>
                </div>
                <p className={"info__subtitle"}>{gameResultSubtitle}</p>
                <button className={"info__button"} onClick={onResetGame}>{resetGame}</button>
            </div> :
            <div className={className ?? ""}>
                <p className={"info__title"}>{gameIntroTitle}</p>
                <p className={"info__subtitle"}>{gameIntroSubtitle}</p>
                <button className={"info__button"} onClick={onAction}>{startGame}</button>
            </div>
    )
}