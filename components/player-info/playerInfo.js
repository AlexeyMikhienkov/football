import React from "react";
import PlayerPrice from "./playerPrice";
import {infoFrom} from "../../constants/copyright";
import Image from "next/image";

export default function PlayerInfo({className, player}) {
    const {name, about, price, src} = player;

    return (
        <div className={`player-info ${className ?? ""}`}>
            <p className={"player-info__name"}>{name}</p>
            <div className={"player-info__about-container"}>
                <Image className={"player-info__image"} alt={"Флаг Польши"} src={src} width={45} height={45}/>
                <p className={"player-info__about"}>{about}</p>
            </div>
            <PlayerPrice className={"player-info"} price={price}/>
            <p className={"player-info__mark"}>{infoFrom}</p>

        </div>
    )
}