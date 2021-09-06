import React from "react";
import PlayerInfo from "../player-info/playerInfo";
import {players} from "../../constants/constants";
import Controls from "../controls/controls";
import {getRandomInt} from "../../utils/getRandomInt";

export default function Field({className}) {





    return (
        <div className={`field ${className ?? ""}`}>
            <div className={"field__container"}>
                <PlayerInfo className={"field__player-info"} player={players[0]} isQuestion={false}/>
            </div>
            <div className={"field__container field__container_right"}>
                <PlayerInfo className={"field__player-info"} player={players[1]} isQuestion={true}/>
                <Controls className={"player-info__controls"}/>
            </div>
        </div>
    )
}

function generatePlayerSequence(players) {
    const sequence = [];

    sequence.push(getRandomInt(0, players.length));

    while (sequence.length !== players.length) {
        let num = getRandomInt(0, players.length);
        while (sequence.includes(num)) {
            num = getRandomInt(0, players.length);
        }
        sequence.push(num)
    }

    return sequence;
}