import React from "react";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './SocialMediaButtons.css';

const SocialMediaButtons = () => {
    const links = [
        "https://github.com/nitinramadoss",
        "https://www.instagram.com/tech_nkr",
        "https://www.linkedin.com/in/nitin-r-b8aaa4107"

    ]
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <IconButton className= "SocialMediaButton" size="large" href={links[0]} target="_blank">
                <GitHubIcon className= "SocialMediaIcon" />
            </IconButton>

            <IconButton className= "SocialMediaButton" size="large" href={links[1]} target="_blank">
                <InstagramIcon className= "SocialMediaIcon" />
            </IconButton>

            <IconButton className= "SocialMediaButton" size="large" href={links[2]} target="_blank">
                <LinkedInIcon className= "SocialMediaIcon" />
            </IconButton>
        </div>
    );
}

export default SocialMediaButtons;