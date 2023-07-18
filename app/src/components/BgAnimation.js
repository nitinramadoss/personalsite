import React from "react";
import "./BgAnimation.css";

const BgAnimation = ({ img }) => {
    return (
        <div id="bgAnimation">
            <div className="circle one" />
            <div className="circle three" />
            <div className="circle two" />
            <div className="circle four"/>
        </div>
    );
}

export default BgAnimation;