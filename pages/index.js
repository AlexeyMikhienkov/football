import React from "react";
import Footballers from "../components/footballers/footballers";
import {shuffle} from "../utils/shuffleArray";
import {players} from "../constants/constants";

export default function Home() {
  const shuffled = shuffle(players);
  return <Footballers className={"footballers"} shuffled={shuffled}/>
}

//TODO: починить рандом
// поправить рсположение строк в statistics
// сделать анимацию

