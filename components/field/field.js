import React, {useState, useEffect} from "react";
import PlayerInfo from "../player-info/playerInfo";
import {animationDuration, players, rightAnswerColor, wrongAnswerColor} from "../../constants/constants";
import Controls from "../controls/controls";
import {getRandomInt} from "../../utils/getRandomInt";
import {controls} from "../../constants/copyright";
import {CSSTransition} from "react-transition-group";

export default function Field({className, offset, onSetAttempts, onSetScore, onSetOffset, answer, onSetAnswer}) {
    const [sequence, setSequence] = useState(generatePlayerSequence(players));
    const [leftPlayer, setLeftPlayer] = useState(sequence[offset]);
    const [rightPlayer, setRightPlayer] = useState(sequence[offset + 1]);


    useEffect(() => {
        console.log(offset);
        console.log(players.length);

        const timeout = setTimeout(() => {
            if (!answer && offset > 0)
                onSetAttempts();

            setLeftPlayer(sequence[offset]);
            setRightPlayer(sequence[offset + 1]);
            onSetAnswer(null);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [offset]);

    return (
        <div className={`field ${className ?? ""}`}>
            <PlayerInfo className={"field__player-info"} player={leftPlayer} isQuestion={false} answer={answer}/>
            <PlayerInfo className={"field__player-info"} player={rightPlayer} isQuestion={true}
                        afterClick={answer !== null} answer={answer}/>
            {answer === null ? <Controls className={"player-info__controls"}
                                         onAction={(title) => checkClick(leftPlayer, rightPlayer, onSetOffset, onSetAnswer, onSetAttempts, onSetScore, title)}/> : null}
        </div>
    )
}

function checkClick(leftPlayer, rightPlayer, onSetOffset, onSetAnswer, onSetAttempts, onSetScore, title) {
    console.log("check");
    let answer = false;

    switch (title) {
        case controls.up:
            rightPlayer.price > leftPlayer.price ? answer = true : answer = false;
            break;
        case controls.down:
            rightPlayer.price < leftPlayer.price ? answer = true : answer = false;
            break;
        case controls.equal:
            rightPlayer.price === leftPlayer.price ? answer = true : answer = false;
            break;
    }

    if (answer) {
        onSetAnswer(true);
        onSetScore();
    } else
        onSetAnswer(false);

    onSetOffset();
}

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