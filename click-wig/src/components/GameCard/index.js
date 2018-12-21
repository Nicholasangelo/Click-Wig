// OK
import React from "react";
import "./GameCard.css";

function GameCard(props) {
    return (
        <div 
        role="img"
        aria-label="click item"
        onClick={() => props.handleItemClick(props.id)}
        style={{ backgroundImage: `url('${props.image}')` }}
        className={`click-item${props.flip ? " flip " : ""}`}
        />

    )

}
export default GameCard;