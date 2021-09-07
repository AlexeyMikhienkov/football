import Field from "../field/field";
import React, {useState, useEffect} from "react";
import Statistics from "../statistics/statistics";

export default function Game({className}) {
 //   const storage = window.localStorage;
 //   storage.setItem("record", "0");

    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(5);

    // useEffect(() => {
    //     if (attempts < 0) {
    //
    //     }
    // });

    return (
        <div className={className ?? ""}>
            <Statistics className={"game__statistics"} score={score} attempts={attempts}/>
            <Field className={`game__field`} onSetScore={() => setScore(score + 1)} onSetAttempts={() => setAttempts(attempts - 1)}/>
        </div>
    )
}

// рекорд - общий счет (хранится в local storage)
// счет - счет текущей игры (обнуляется при проигрыше)
// попытки - число попыток (когда 0 и неверный ответ - переход на экран с окончанием игры)