import PlayerInfo from "../components/player-info/playerInfo";
import React from "react";
import {players} from "../constants/constants";
import ControlButton from "../components/controls/control-button";
import Field from "../components/field/field";
import Game from "../components/game/game";
import Controls from "../components/controls/controls";
import {getRandomInt} from "../utils/getRandomInt";

export default function Home() {
  return <Game className={"game"} />
}

//TODO: менять цвет на белый при ответе в правой панели
// починить рандом
