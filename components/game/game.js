import Field from "../field/field";
import React, {useState, useEffect} from "react";
import Statistics from "../statistics/statistics";

export default function Game({className}) {
 //   const window = global.window;
 //   const storage = window.localStorage;
    //  console.log(storage);

    //   storage.setItem("record", "0");

    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(2);
    const [gameOver, setGameOver] = useState(false);
    const [record, setRecord] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setRecord(Number(global.window.localStorage.getItem("record")));
    }, []);

    useEffect(() => {
        const item = Number(global.window.localStorage.getItem("record"));
        console.log("item", item);
        console.log("score", score);
        if (item < score) {
            global.window.localStorage.setItem("record", String(item + 1));
            setRecord(item + 1);
        }
    }, [offset]);

    useEffect(() => {
        if (attempts < 0) {
            setGameOver(true);
        }
    }, [attempts]);

    return (
        gameOver ?
            <div>ГАМОВЕР</div> :
            <div className={className ?? ""}>
                <Statistics className={"game__statistics"} score={score} attempts={attempts} record={record}/>
                <Field className={`game__field`} offset={offset} onSetScore={() => setScore(score + 1)}
                       onSetAttempts={() => setAttempts(attempts - 1)} onSetOffset={() => setOffset(offset + 1)}/>
            </div>
    )
}

// рекорд - общий счет (хранится в local storage)
// счет - счет текущей игры (обнуляется при проигрыше)
// попытки - число попыток (когда 0 и неверный ответ - переход на экран с окончанием игры)