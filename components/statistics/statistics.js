import React from "react";
import Stats from "./stats";

export default function Statistics({className, score, attempts, record}) { // game__statistics
    return (
        <div className={`statistics ${className ?? ""}`}>
            <Stats className={"statistics__container"} score={score} attempts={attempts} record={record}/>
        </div>
    )
}