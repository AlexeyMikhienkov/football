import {statisticTitles} from "../../constants/constants";
import React from "react";

export default function Stats({className, score, attempts, record}) {
    const elems = statisticTitles.map((item, index) => {
        return (
            <div key={index} className={"statistics__item"}>
                {addTitle(item, score, attempts, record)}
            </div>
        )
    });

    return (
        <div className={className ?? ""}>
            {elems}
        </div>
    )
}

function addTitle(item, score, attempts, record) {
    switch (item.title) {
        case "record":
            return (
                <>
                    <p className={"statistics__item-title"}>{item.value}</p>
                    <p className={"statistics__item-value"}>{record}</p>
                </>
            );
        case "score":
            return (
                <>
                    <p className={"statistics__item-title"}>{item.value}</p>
                    <p className={"statistics__item-value"}>{score}</p>
                </>
            );
        case "attempts":
            return (
                <>
                    <p className={"statistics__item-title"}>{item.value}</p>
                    <p className={"statistics__item-value"}>{attempts}</p>
                </>
            );
    }
}