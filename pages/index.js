import PlayerInfo from "../components/player-info/playerInfo";
import React from "react";
import {players} from "../constants/constants";
import ControlButton from "../components/controls/control-button";
import Field from "../components/field/field";
import Game from "../components/game/game";

export default function Home() {
  //return (
  //  <PlayerInfo className={"field__player-info"} player={players[0]} modificator={"right-panel"} />
  //)
  //return <ControlButton title={"Выше"}/>

  return <Game className={"game"} />
}

//TODO: при навешивании модификатора question поле с игроком превращается в правое поле с кнопками
//  реализовать компонент controls
