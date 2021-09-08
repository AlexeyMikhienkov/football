import Info from "../info/info";
import React, {useState} from "react";
import Game from "../game/game";

export default function Footballers({className}) {
    const [page, setPage] = useState("info");
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);

    function onChangePage(page) {
        return setPage(page);
    }

    return (
        <div className={className ?? ""}>
            {
                page === "game" ?
                    <Game className={"footballers__game"} score={score}
                          onSetScore={() => setScore(score + 1)}
                          onAction={() => {
                              setResult(true);
                              setPage("info");
                          }}
                    /> :
                    <Info className={"footballers__info"}
                          onAction={() => result ? onChangePage("result") : onChangePage("game")}
                          onResetGame={() => {
                               setResult(false);
                               setScore(0);
                               onChangePage("info")
                           }}
                          result={result} score={score}/>
            }
        </div>
    )
}
