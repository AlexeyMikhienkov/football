import PlayerInfo from "../components/player-info/playerInfo";
import React from "react";
import {players} from "../constants/constants";
import ControlButton from "../components/controls/control-button";
import Field from "../components/field/field";
import Game from "../components/game/game";
import Controls from "../components/controls/controls";
import {getRandomInt} from "../utils/getRandomInt";
import IntroContent from "../components/intro/introContent";
import Intro from "../components/intro/intro";
import Footballers from "../components/footballers/footballers";

export default function Home() {
  return <Footballers className={"footballers"} />
}

//TODO: менять цвет на белый при ответе в правой панели
// починить рандом
// реализовать итоговую страницу
