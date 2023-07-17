import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavLink, Badge } from "react-bootstrap";
import SocialMediaButtons from './SocialMediaButtons.js';
import ProfileImg from "../images/profilecartoon.png";
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar className="navbar" collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Navbar.Brand href="javascript:document.getElementById('home').scrollIntoView()">
                    <img id="brandImg"
                        src={ProfileImg}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>

                <Nav>
                    <NavLink bsPrefix="link" href="javascript:document.getElementById('home').scrollIntoView()">Home</NavLink>
                    <NavLink bsPrefix="link" href="javascript:document.getElementById('projectSection').scrollIntoView()">Projects</NavLink>
                    <NavLink bsPrefix="link" href="javascript:document.getElementById('skillsSection').scrollIntoView()">Skills</NavLink>
                </Nav>

                <Navbar.Collapse className="justify-content-end">
                    <Badge className="justify-content-end" bg="dark" pill>
                        <SocialMediaButtons />
                    </Badge>
                </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;