import React from "react";
import IntroContent from "./introContent";

export default function Intro({className, onAction, result, score}) {
    return (
        <div className={`intro ${className ?? ""}`}>
            <IntroContent className={`intro__content ${result ? "intro__content_result" : null}`}
                          result={result} score={score} onAction={onAction}/>
            <img className={"intro__image"} alt={"Бутса и мяч"} src={"/images/start.png"}/>
        </div>
    )
}