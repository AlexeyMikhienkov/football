import Intro from "../intro/intro";
import React, {useState} from "react";
import Game from "../game/game";

export default function Footballers({className}) {
    const [page, setPage] = useState("intro");
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);

    function onChangePage(page) {
        return setPage(page);
    }

    console.log(page);

    return (
        <div className={className ?? ""}>
            {
                page === "game" ?
                    <Game className={"footballers__game"} score={score}
                          onSetScore={() => setScore(score + 1)}
                          onAction={() => {
                              setResult(true);
                              setPage("intro");
                          }}
                    /> :
                    <Intro className={"footballers__intro"}
                           onAction={() => result ? onChangePage("result") : onChangePage("game")}
                           onResetGame={() => {
                               setResult(false);
                               setScore(0);
                               onChangePage("intro")
                           }}
                           result={result} score={score}/>
            }
        </div>
    )
}
