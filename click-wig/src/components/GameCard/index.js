// OK
import React from "react";
import "./GameCard.css";

function GameCard(props) {
    return (
        <div 
        role="img"
        aria-label="click item"
        onclick={() => props.handlesClick(props.id)}
        style={{ backgroundImage: `url('${props.image}')` }}
        className={`click-item${props.flip ? " flip " : ""}`}
        />

    )

}
export default GameCard;