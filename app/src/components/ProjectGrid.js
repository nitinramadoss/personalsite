import React from "react";
import Demo from './Demo.js';
import Player from "./Player.js";
import Grid from '@mui/material/Grid';
import LiveLinkImg2 from "../images/livelinkimg2.png"
import Livelinkvideo from "../videos/livelink.gif";
import Canvasboard from "../images/canvasboard.png"
import CanvasboardImg2 from "../images/Canvasboardimg2.png"
import Canvasboardvideo from "../videos/CanvasBoard.gif";
import Kolam from "../images/kolamimg2.png"
import Kolamvideo from "../videos/okaykolam.gif"
import Imagecompare from "../images/ic.png"
import ImagecompareImg2 from "../images/icimg2.png"
import Docvrvideo from "../videos/docvr.gif"
import DocvrImg2 from "../images/docvrimg2.png"
import Deena from "../images/deena.png"
import DeenaImg2 from "../images/deenaimg2.png"
import Deenavideo from "../videos/deena.gif"
import "./ProjectGrid.css";

const ProjectGrid = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
            <Grid item key={0}>
                <div className="project">
                    <div className="demoContainer LL">
                        <Demo img={LiveLinkImg2} />
                        <div className="demoExtPlayerContainer">
                            <Player video={Livelinkvideo} />
                        </div>
                    </div>

                    <div className="descContainer">
                        <h2>Livelink</h2>
                        <p><em>Vision for Social Media: A Mixed Reality Lens</em></p>
                        <div className="descContainerBody">
                            <p>
                                Utilizes AR, speech recognition, and facial detection to help recruiters screen candidates during job fairs.
                            </p>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item key={1}>
                <div className="project">
                    <div className="demoContainer IC">
                        <Demo img={Imagecompare} />
                        <div className="demoExtPlayerContainer">
                            <Demo img={ImagecompareImg2} />
                        </div>
                    </div>

                    <div className="descContainer">
                        <h2>Image Compare</h2>
                        <p><em>Open source project for Flutter</em></p>
                        <div className="descContainerBody">
                            <p>
                                Compare images for difference using a variety of algorithms with this extensible Dart Package.
                            </p>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item key={2}>
                <div className="project">
                    <div className="demoPhoneContainer">
                        <Demo img={Kolam} />
                        <div className="demoExtPhoneContainer">
                            <Player video={Kolamvideo} />
                        </div>
                    </div>

                    <div className="descContainer">
                        <h2>Okay Kolam</h2>
                        <p><em>Mobile game for learning kolam</em></p>
                        <div className="descContainerBody">
                            <p>
                                Practice kolam from a collection of 750+ uniquely generated designs in this fun game that makes it easy for beginners to learn.
                            </p>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item key={3}>
                <div className="project">
                    <div className="demoContainer CB">
                        <Player video={Canvasboardvideo} />

                        <div className="demoExtContainer">
                            <Demo img={CanvasboardImg2} />
                        </div>
                        <div className="demoExtPlayerContainer">
                            <Demo img={Canvasboard} />
                        </div>
                    </div>

                    <div className="descContainer">
                        <h2>Canvas Board</h2>
                        <p><em>Digital board for video conferencing</em></p>
                        <div className="descContainerBody">
                            <p>
                                Enables educators to draw out concepts and diagrams with vocal commands and manipulate them on-screen with their hands.
                            </p>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item key={4}>
                <div className="project">
                    <div className="demoContainer DVR">
                        <Player video={Docvrvideo} />
                        <div className="demoExtPlayerContainer">
                            <Demo img={DocvrImg2} />
                        </div>
                    </div>

                    <div className="descContainer">
                        <h2>DocVR</h2>
                        <p><em>AI-powered, intelligent virtual doctor</em></p>
                        <div className="descContainerBody">
                            <p>
                                Allows users, patients, to speak with a virtual doctor in a fully immersive experience. DocVR keeps track of user prescriptions and appointments.
                            </p>
                        </div>
                    </div>
                </div>
            </Grid>

            
            <Grid item key={5}>
                <div className="project">
                    <div className="demoContainer D">
                        <Player video={Deenavideo} />
                        <div className="demoExtContainer">
                            <Demo img={DeenaImg2} />
                        </div>
                        <div className="demoExtPlayerContainer">
                            <Demo img={Deena} />
                        </div>
                    </div>

                    <div className="descContainer">
                        <h2>Deena</h2>
                        <p><em>Chrome extension for personal care</em></p>
                        <div className="descContainerBody">
                            <p>
                             Enables users to anonymously rate Amazon personal care products across a range of characteristics.
                            </p>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default ProjectGrid;