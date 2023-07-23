import React from "react";
import ProfileImg from "../images/newprofilepic.png";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import "./StatusCard.css";


const StatusCard = () => {
    return (
        <div>
            <img id="avatar" src={ProfileImg} alt="Avatar"></img>
            <div id="bioBox">
                <p>
                    Hey, I'm a new grad software engineer who's interested in building challenging applications that can provide real solutions to real problems. I have over 10 years of experience developing Android apps, websites, extensions, AR/VR apps, and more. I'm always eager to learn and ready to try something new.
                </p>
            </div>
            <div id="infoContainer">
                <div className="infoBox">
                    <WorkIcon size="small" style={{ color: "brown" }} />
                    <p className="infoBoxText">Software Engineer</p>
                </div>
                <div className="infoBox two">
                    <LocationOnIcon size="small" style={{ color: "red" }} />
                    <p className="infoBoxText">Mountain View, California</p>
                </div>
                <div className="infoBox three">
                    <SchoolIcon size="small" style={{ color: "orange" }} />
                    <p className="infoBoxText">BS in CS, English Minor - UF '23</p>
                </div>
                <div className="infoBox four">
                    <InfoIcon size="small" style={{ color: "lightblue" }} />
                    <p className="infoBoxText">Developer, Writer, and Student</p>
                </div>
            </div>
        </div>
    );
}

export default StatusCard;