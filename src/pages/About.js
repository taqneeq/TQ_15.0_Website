import React from "react";
import logo1 from "../assets/img1.png"
import tqbg from "../assets/bg4.jpg"
import videobg from '../assets/svid.mp4'
const About = () =>
{
    return (
        <>
                <div className="bgvideolg">
                    <video src={videobg} autoPlay loop muted />
                    <div className="overlay"></div>
                </div>

                {/* <div className="overlay"></div> */}
               
                <div className="position-absolute text-white d-flex flex-column justify-content-md-center" style={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <div className="container-md px-5 mt-20-mobile">
                        <div className="row h-100">
                            <div className="col my-auto text-center">
                                <h1 className="text-center display-5">ABOUT TAQNEEQ</h1>

                            </div>
                            <div className="mt-5 text-center fs-5 heynigga">
                                <p className="about-tq-text">Over the years, Taqneeq has turned out to be an exceptional tech fest with 3 fun-filled & power-packed days in a row,
                                    it has illuminated each & every side of technology, with immense successes in organising remarkable events such as
                                    The Talk, Dare2Compete, Internship Fair, Game Development Workshop, Light Reaction, to name a few.</p>

                                <br></br>

                                <p className="about-tq-text">
                                    This year, as we reminisce about its previous versions, we seek to make it even more imposing & memorable for
                                    all of us. Episode 15 of Taqneeq encircles around
                                </p>

                                <br></br>

                                <p className="about-tq-text">
                                    What meets the eye is not necessarily as it seems to be. TQ 15.0 is back with even more energy & enthusiasm!
                                    Times are busy and calendars full — save the dates!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default About;
