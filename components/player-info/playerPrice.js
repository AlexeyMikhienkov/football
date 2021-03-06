import {euro, millions} from "../../constants/copyright";
import React from "react";

export default function PlayerPrice({className, price, afterClick}) { // className = player-info
    return (
        <div className={className ? `${className}__price-container` : ""}>
            <p className={className ? `${className}__euro` : ""} style={{color: `${afterClick ? "#ffffff" : null}`}}>{euro}</p>
            <p className={className ? `${className}__player-price` : ""} style={{color: `${afterClick ? "#ffffff" : null}`}}>{price}</p>
            <p className={className ? `${className}__mln` : ""} style={{color: `${afterClick ? "#ffffff" : null}`}}>{millions}</p>
        </div>
    )
}