import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <div className="Header">
        <h2 className="title">Click Wig</h2>
        <p>Click a card to get started.  Click one you've already clicked and you're finished!</p>
        <div className="scoreBoard">
        Score: {props.score} Top Score: {props.topScore}
        </div>
        </div>
        

    )
}

export default Header;