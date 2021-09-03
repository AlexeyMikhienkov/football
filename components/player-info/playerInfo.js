import React from "react";
import PlayerPrice from "./playerPrice";
import {infoFrom, question} from "../../constants/copyright";
import Controls from "../controls/controls";

export default function PlayerInfo({className, player, isQuestion}) {
    const {name, about, price, src, alt} = player;

    return (
        <div className={`player-info ${className ?? ""} ${isQuestion ? `player-info_right-panel` : ""}`}>
            <p className={"player-info__name"}>{name}</p>
            <div className={"player-info__about-container"}>
                <img className={"player-info__image"} alt={alt} src={src} width={45} height={45}/>
                <p className={"player-info__about"}>{about}</p>
            </div>

            {isQuestion ?
                <p className={"player-info__question"}>{question}</p> :
                <>
                    <PlayerPrice className={"player-info"} price={price}/>
                    <p className={"player-info__mark"}>{infoFrom}</p>
                </>
            }
        </div>
    )
}

//                    <Controls className={"player-info__controls"}/>
