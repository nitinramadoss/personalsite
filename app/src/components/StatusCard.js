import React from "react";
import ProfileImg from "../images/profilecartoon.png";
import Circle from '@mui/icons-material/Circle';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import "./StatusCard.css";


const StatusCard = () => {
    return (
        <div id="statusCard">
            <img src={ProfileImg} alt="Avatar"></img>
            <div>
                <div>
                    <Circle size="small" style={{ color: "green" }} />
                    <p>Online</p>
                </div>

                <p className="statusTag"><b>Status:</b> Trying</p>
                <p className="statusTag"><b>Member since:</b> 7/12/2001</p>
            </div>

            {/* <div id="profileEducation">
                <div>
                    <SchoolIcon size="small" style={{ color: "orange" }} />
                    <p>Education</p>
                </div>
                <p className="statusTag">Graduated: 05/05/23</p>
                <p className="statusTag">Degree: BS in CS, Minor in English</p>
                <p className="statusTag">Institution: University of Florida</p>
            </div>


            <div id="profileExperience">
                <div>
                    <StarIcon size="small" style={{ color: "yellow" }} />
                    <p>Experience</p>
                </div>
                <p className="statusTag">Exp: 10+ years coding</p>
                <p className="statusTag">Internships: 3</p>
                <p className="statusTag">Hackathons: 11</p>
                <p className="statusTag">Personal Projects: 30+</p>
                <p className="statusTag">Programming Languages: 7+</p>
            </div> */}
        </div>
    );
}

export default StatusCard;