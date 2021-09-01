import PlayerInfo from "../components/player-info/playerInfo";
import React from "react";
import {player} from "../constants/constants";

export default function Home() {
  return (
    <PlayerInfo className={"main__player-info"} player={player} />
  )
}
