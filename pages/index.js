import PlayerInfo from "../components/player-info/playerInfo";
import React from "react";
import {players} from "../constants/constants";
import ControlButton from "../components/controls/control-button";
import Field from "../components/field/field";
import Game from "../components/game/game";
import Controls from "../components/controls/controls";

export default function Home() {
  return <Game className={"game"} />
}

//TODO: при навешивании модификатора question поле с игроком превращается в правое поле с кнопками
//  реализовать компонент controls
