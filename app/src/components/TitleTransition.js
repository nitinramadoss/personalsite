import React, { useEffect, useState } from "react";
import "./TitleTransition.css";

const TEXTS = ['Student', 'Software Engineer', 'Visionary', 'Mentor'];
const DURATION = 4000;

const TitleTransition = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            DURATION,
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <h1 id="title">
            {TEXTS[index % TEXTS.length]}
        </h1>
    );
}

export default TitleTransition;