import React, {useState, useEffect} from "react";
import PlayerInfo from "../player-info/playerInfo";
import {players, rightAnswerColor, wrongAnswerColor} from "../../constants/constants";
import Controls from "../controls/controls";
import {getRandomInt} from "../../utils/getRandomInt";
import {controls} from "../../constants/copyright";

export default function Field({className}) {
    const [sequence, setSequence] = useState(generatePlayerSequence(players));
    const [offset, setOffset] = useState(0);
    const [leftPlayer, setLeftPlayer] = useState(sequence[offset]);
    const [rightPlayer, setRightPlayer] = useState(sequence[offset + 1]);
    const [answer, setAnswer] = useState(null);

    //  console.log(sequence);
    //  console.log(leftPlayer);
    //  console.log(rightPlayer);

    function onSetOffset() {
        setOffset(offset + 1);
    }

    function onSetAnswer(value) {
        setAnswer(value);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLeftPlayer(sequence[offset]);
            setRightPlayer(sequence[offset + 1]);
            setAnswer(null)
        }, 2000);

        return () => clearTimeout(timeout);
    }, [offset]);

    const rightPanel =
        <>
            {answer === null ? (
                <div className={"field__container field__container_right"}>
                    <>
                        <PlayerInfo className={"field__player-info"} player={rightPlayer} isQuestion={true}/>
                        <Controls className={"player-info__controls"}
                                  onAction={(title) => checkClick(leftPlayer, rightPlayer, onSetOffset, onSetAnswer, title)}/>
                    </>
                </div>
            ) : answer ?
                    <div className={"field__container field__container_right"} style={{backgroundColor: rightAnswerColor}}>
                        <PlayerInfo className={"field__player-info"} player={rightPlayer} isQuestion={false}/>
                    </div>
                 :
                <div className={"field__container field__container_right"} style={{backgroundColor: wrongAnswerColor}}>
                    <PlayerInfo className={"field__player-info"} player={rightPlayer} isQuestion={false}/>
                </div>
            }
        </>;

    return (
        <div className={`field ${className ?? ""}`}>
            <div className={"field__container"}>
                <PlayerInfo className={"field__player-info"} player={leftPlayer} isQuestion={false}/>
            </div>
            {rightPanel}
        </div>
    )
}

function checkClick(leftPlayer, rightPlayer, onSetOffset, onSetAnswer, title) {
    console.log("check");

    switch (title) {
        case controls.up:
            //      console.log("Выше");
            rightPlayer.price > leftPlayer.price ? onSetAnswer(true) : onSetAnswer(false);
            break;
        case controls.down:
            //     console.log("Ниже");
            rightPlayer.price < leftPlayer.price ? onSetAnswer(true) : onSetAnswer(false);
            break;
        case controls.equal:
            //    console.log("Равна");
            rightPlayer.price === leftPlayer.price ? onSetAnswer(true) : onSetAnswer(false);
            break;
    }

    onSetOffset();
}

// если ответ верный:
// 1. зеленый фон справа
// 2. отступ + 1

// если ответ неверный:
// 1. красный фон справа
// 2. отступ + 1

function generatePlayerSequence(players) {
    //  console.log("generate");
    const sequence = [];
    /*
       sequence.push(getRandomInt(0, players.length));

       while (sequence.length !== players.length) {
           let num = getRandomInt(0, players.length);
           while (sequence.includes(num)) {
               num = getRandomInt(0, players.length);
           }
           sequence.push(num);
       }\

    const seq = players.map(index => players[index]);
    console.log(seq);

     */

    return players;
}