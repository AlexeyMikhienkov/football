import React from "react";
import InfoContent from "./infoContent";

export default function Info({className, onAction, result, score, onResetGame}) {
    return (
        <div className={`info ${className ?? ""}`}>
            <InfoContent className={`info__content ${result ? "info__content_result" : null}`}
                         result={result} score={score} onAction={onAction} onResetGame={onResetGame}/>
            <img className={"info__image"} alt={"Бутса и мяч"} src={"/images/start.png"}/>
        </div>
    )
}