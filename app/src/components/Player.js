import React, { useEffect, useState } from "react";

const Player = ({video}) => {
    return (
        <video autoplay muted loop width="100%" height="auto" poster={video} style=
            {{ 
                borderRadius: "18px", 
                boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, .2)"
            }} />
    );
}

export default Player;