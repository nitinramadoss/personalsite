import React, { useEffect, useState } from "react";
import "./Demo.css";

const Demo = ({ img }) => {
    return (
        <img className = "demo" src= {img} alt="LiveLink"/>
    );
}

export default Demo;