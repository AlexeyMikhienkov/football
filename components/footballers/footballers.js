import Intro from "../intro/intro";
import React, {useState} from "react";
import Game from "../game/game";

export default function Footballers({className}) {
    const [page, setPage] = useState("intro");

    function onChangePage(page) {
        return setPage(page);
    }

    console.log(page);

    return (
        <div className={className ?? ""}>
            {returnPage(page, onChangePage)}
        </div>
    )
}

function returnPage(page, onChangePage) {
    switch (page) {
        case "intro":
            return <Intro className={"footballers__intro"} onAction={() => onChangePage("game")}/>;
        case "game":
            return <Game className={"footballers__game"}/>;
        case "result":
            return <div>result</div>;
    }
}