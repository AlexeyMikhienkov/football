import React from "react";
import PlayerInfo from "../player-info/playerInfo";
import {players} from "../../constants/constants";
import {question} from "../../constants/copyright";

export default function Field({className}) {
    return (
        <div className={`field ${className ?? ""}`}>
            <div className={"field__container"}>
                <PlayerInfo className={"field__player-info"} player={players[0]} isQuestion={false}/>
            </div>
            <div className={"field__container field__container_right"}>
                <PlayerInfo className={"field__player-info"} player={players[1]} isQuestion={true}/>
            </div>
        </div>
    )
}