import React, { useEffect, useState } from "react";
import ProfileImg from "../images/profilecartoon.png";
import "./BgAnimation.css";

const BgAnimation = ({ img }) => {
    return (
        <div>
            <div className="circle one" />
            <div className="circle three" />
            <div className="circle two" />
            <div className="circle four"/>
        </div>
    );
}

export default BgAnimation;