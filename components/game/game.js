import Field from "../field/field";
import React, {useState, useEffect} from "react";
import Statistics from "../statistics/statistics";
import {players} from "../../constants/constants";

export default function Game({className, onAction, score, onSetScore}) {
    const [attempts, setAttempts] = useState(5);
    const [record, setRecord] = useState(0);
    const [offset, setOffset] = useState(0);
    const [answer, setAnswer] = useState(null);

    useEffect(() => {
        setRecord(Number(global.window.localStorage.getItem("record")));
    }, []);

    useEffect(() => {
        const item = Number(global.window.localStorage.getItem("record"));

        if (offset + 1 === players.length) {
            setTimeout(() => onAction(), 900);
        }

        if (item < score) {
            global.window.localStorage.setItem("record", String(item + 1));
            setRecord(item + 1);
        }
    }, [offset]);

    useEffect(() => {
        if (attempts < 0) {
            onAction();
        }
    }, [attempts]);

    return (
        <div className={`game ${className ?? ""}`}>
            <Statistics className={"game__statistics"} score={score} attempts={attempts} record={record}/>
            <Field className={`game__field`} offset={offset} onSetScore={onSetScore} answer={answer} onSetAnswer={setAnswer}
                   onSetAttempts={() => setAttempts(attempts - 1)} onSetOffset={() => setOffset(offset + 1)}/>
        </div>
    )
}
