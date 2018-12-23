import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <div className="Header">
        <h1 className="title">Nick Through the Ages</h1>
        <h3>I've tried out a lot of looks through the ages, can you keep them sorted?</h3>
        <p>Click a card to get started.  Click one you've already clicked and you're finished!</p>
        <div className="scoreBoard">
        Score: {props.score} Top Score: {props.topScore}
        </div>
        </div>
        

    )
}

export default Header;