import {statisticTitles} from "../../constants/constants";
import React from "react";

export default function Stats({className, score, attempts}) {
    const elems = statisticTitles.map((item, index) => {
        return (
            <div key={index} className={"statistics__item"}>
                {addTitle(item, score, attempts)}
            </div>
        )
    });

    return (
        <div className={className ?? ""}>
            {elems}
        </div>
    )
}

function addTitle(item, score, attempts) {
    switch (item.title) {
        case "record":
            return (
                <>
                    <p className={"statistics__item-title"}>{item.value}</p>
                    <p className={"statistics__item-value"}>{0}</p>
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