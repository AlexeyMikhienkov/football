import React from "react";
import IntroContent from "./introContent";

export default function Intro({className, onAction}) {
    return (
        <div className={`intro ${className ?? ""}`}>
            <IntroContent className={"intro__content"} onAction={onAction} />
            <img className={"intro__image"} alt={"Бутса и мяч"} src={"/images/start.png"} />
        </div>
    )
}