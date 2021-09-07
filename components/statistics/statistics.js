import React from "react";
import Stats from "./stats";

export default function Statistics({className, score, attempts}) { // game__statistics
    return (
        <div className={`statistics ${className ?? ""}`}>
            <Stats className={"statistics__container"} score={score} attempts={attempts}/>
        </div>
    )
}