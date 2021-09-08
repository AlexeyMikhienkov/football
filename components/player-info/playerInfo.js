import React from "react";
import PlayerPrice from "./playerPrice";
import {infoFrom, question} from "../../constants/copyright";
import {rightAnswerColor, wrongAnswerColor} from "../../constants/constants";

export default function PlayerInfo({className, player, isQuestion, afterClick, answer}) { // isQuestion - проверка на панель справа
    const {name, about, price, src, alt} = player;

    return (
        <div className={`player-info ${className ?? ""} ${isQuestion ? `player-info_right-panel` : ""}`}
             style={{backgroundColor: chooseColor(isQuestion, answer)}}>
            <p className={"player-info__name"} style={{color: `${afterClick ? "#ffffff" : null}`}}>{name}</p>
            <div className={"player-info__about-container"}>
                <img className={"player-info__image"} alt={alt} src={src} width={45} height={45}/>
                <p className={"player-info__about"} style={{color: `${afterClick ? "#ffffff" : "#000000"}`}}>{about}</p>
            </div>
            {renderIfRight(isQuestion, price, afterClick)}
        </div>
    )
}

//TODO: сделать читаемым
function chooseColor(isQuestion, answer) {
    if (isQuestion) {
        if (answer === null) {
            return "#19c0f5"
        } else {
            return answer ? rightAnswerColor : wrongAnswerColor;
        }
    } else {
        return "#ffffff";
    }
}

//TODO: сделать читаемым
function renderIfRight(isQuestion, price, afterClick) {
    if (isQuestion) {
        if (afterClick) {
            return (
                <>
                    <PlayerPrice className={"player-info"} price={price} afterClick={afterClick}/>
                    <p className={"player-info__mark"}>{infoFrom}</p>
                </>
            )
        } else {
            return <p className={"player-info__question"}>{question}</p>;
        }
    } else {
        return (
            <>
                <PlayerPrice className={"player-info"} price={price} afterClick={afterClick}/>
                <p className={"player-info__mark"}>{infoFrom}</p>
            </>
        )
    }
}
