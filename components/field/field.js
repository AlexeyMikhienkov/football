import React, {useState, useEffect} from "react";
import PlayerInfo from "../player-info/playerInfo";
import {animationDuration, players, rightAnswerColor, wrongAnswerColor} from "../../constants/constants";
import Controls from "../controls/controls";
import {getRandomInt} from "../../utils/getRandomInt";
import {controls} from "../../constants/copyright";
import {CSSTransition} from "react-transition-group";

export default function Field({className, offset, onSetAttempts, onSetScore, onSetOffset}) {
    const [sequence, setSequence] = useState(generatePlayerSequence(players));
    const [leftPlayer, setLeftPlayer] = useState(sequence[offset]);
    const [rightPlayer, setRightPlayer] = useState(sequence[offset + 1]);
    const [answer, setAnswer] = useState(null);
    const [inPropLeft, setInPropLeft] = useState(true);
    const [inPropRight, setInPropRight] = useState(false);

    //  console.log(sequence);
    //  console.log(leftPlayer);
    //  console.log(rightPlayer);

    useEffect(() => {
        console.log(offset);
        console.log(players.length);

        const timeout = setTimeout(() => {
            setLeftPlayer(sequence[offset]);
            setRightPlayer(sequence[offset + 1]);
            setAnswer(null);
        }, 1000);

        if (offset !== 0) {
            setInPropLeft(false);
            setInPropRight(true);
        }

        return () => clearTimeout(timeout);
    }, [offset]);


    function onSetAnswer(value) {
        setAnswer(value);
    }

    /*
    const rightPanel =
        <>
            {answer === null ? (
                    <div className={"field__container field__container_right"}>
                        <>
                            <CSSTransition in={inPropRight} timeout={animationDuration} classNames="player-info_right-panel">
                                <PlayerInfo className={"field__player-info"} player={rightPlayer} isQuestion={true}/>
                            </CSSTransition>
                            <Controls className={"player-info__controls"}
                                      onAction={(title) => checkClick(leftPlayer, rightPlayer, onSetOffset, onSetAnswer, onSetAttempts, onSetScore, title)}/>
                        </>
                    </div>
                ) :
                <div className={"field__container field__container_right"}
                     style={{backgroundColor: `${answer ? rightAnswerColor : wrongAnswerColor}`}}>
                    <CSSTransition in={inPropRight} timeout={animationDuration} classNames="player-info_right-panel">
                        <PlayerInfo className={"field__player-info"} player={rightPlayer} isQuestion={false}
                                    afterClick={true}/>
                    </CSSTransition>
                </div>
            }
        </>;

    return (
        <div className={`field ${className ?? ""}`}>
            <div className={"field__container"}>
                <CSSTransition in={inPropLeft} timeout={animationDuration} classNames="player-info">
                    <PlayerInfo className={"field__player-info"} player={leftPlayer} isQuestion={false}/>
                </CSSTransition>
            </div>
            {rightPanel}
        </div>
    )

     */


    const rightPanel =
        <>
            {answer === null ? (
                    <div className={"field__container field__container_right"}>
                        <>
                            <PlayerInfo className={"field__player-info"} player={rightPlayer} isQuestion={true}/>
                            <Controls className={"player-info__controls"}
                                      onAction={(title) => checkClick(leftPlayer, rightPlayer, onSetOffset, onSetAnswer, onSetAttempts, onSetScore, title)}/>
                        </>
                    </div>
                ) :
                <div className={"field__container field__container_right"}
                     style={{backgroundColor: `${answer ? rightAnswerColor : wrongAnswerColor}`}}>
                    <PlayerInfo className={"field__player-info"} player={rightPlayer} isQuestion={false}
                                afterClick={true}/>
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
    } else {
        onSetAnswer(false);
        onSetAttempts();
    }

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