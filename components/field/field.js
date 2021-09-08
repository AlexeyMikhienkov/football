import React, {useState, useEffect} from "react";
import PlayerInfo from "../player-info/playerInfo";
import {animationDuration, players} from "../../constants/constants";
import Controls from "../controls/controls";
import {controls} from "../../constants/copyright";
import {CSSTransition} from "react-transition-group";

export default function Field({className, shuffled, offset, onSetAttempts, onSetScore, onSetOffset, answer, onSetAnswer}) {
    const [sequence, ] = useState(shuffled);
    const [leftPlayer, setLeftPlayer] = useState(sequence[offset]);
    const [rightPlayer, setRightPlayer] = useState(sequence[offset + 1]);
 //   const [inPropLeft, setInPropLeft] = useState(false);
 //   const [inPropRight, setInPropRight] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!answer && offset > 0)
                onSetAttempts();
            //    rightPlayer.className = "player-info";

            setLeftPlayer(sequence[offset]);
            setRightPlayer(sequence[offset + 1]);
            onSetAnswer(null);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [offset]);

    function onSetInPropLeft(value) {
        setInPropLeft(value);
    }

    function onSetInPropRight(value) {
        setInPropRight(value);
    }

    return (
        <div className={`field ${className ?? ""}`}>
            <PlayerInfo className={"field__player-info"} player={leftPlayer} isQuestion={false} answer={answer}/>

            <>
                <PlayerInfo className={"field__player-info"} player={rightPlayer} isQuestion={true}
                            afterClick={answer !== null} answer={answer}/>
                {answer === null ? <Controls className={"player-info__controls"}
                                             onAction={(title) =>
                                                 checkClick(leftPlayer, rightPlayer, onSetOffset, onSetAnswer, onSetAttempts,
                                                     onSetScore, title)}/> : null}
            </>
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

    if (answer)
        onSetScore();

    onSetAnswer(answer);
    onSetOffset();
}
