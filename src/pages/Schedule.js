import videobg from '../assets/svid.mp4'

const Timeline = () =>
{
    return (
        <>

            <div className="sch">
                <video src={videobg} autoPlay loop muted />
                <div className='overlay'></div>
            </div>


            <div>
                <div className="position-absolute text-white d-flex flex-column justify-content-md-center" style={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <div className="container px-5 mt-20">
                        <div className="row">
                            <div className="col my-auto text-center">
                                <h2 className="text-white display-2 text-center fw-bold schedulepageheader">SCHEDULE</h2>
                            </div>
                            <div className="timeline">
                              
{/* lazer heist */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>10:00 AM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Laser Heist
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Participants dodge lasers on their way to the vault </p>
                                        </div>
                                    </div>
                                </div>
{/* high iq puzzel solver */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>11:00 AM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        High IQ Puzzle Solver
                                       </div>
                                        <div className="timeline__event__description">
                                            <p>Participants must develop a program that can traverse the nodes of a maze in a way
such that every single valid node is visited exactly once.
</p>
                                        </div>
                                    </div>
                                </div>
{/* the talk */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>5:00 PM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        The Talk
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Don't miss this chance to hear their powerful messages and achieve your full potential! </p>
                                        </div>
                                    </div>
                                </div>
{/* pinewood derby */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Pinewood Derby
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Participants build and race a soapbox car, applying basic physics and mechanical principals </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>


                                    </div>
{/* light reaction */}
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Piano Tiles  
                                      </div>
                                        <div className="timeline__event__description">
                                            <p>Players walk on tiles creating the notes of piano as they walk</p>
                                        </div>
                                    </div>
                                </div>
{/*Unbeatable Tic Tac Toe  */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Unbeatable Tic-Tac-Toe                                        </div>
                                        <div className="timeline__event__description">
                                            <p>A Robotic arm with AI which can play and beat you at tic tac toe. </p>
                                        </div>
                                    </div>
                                </div>
{/* seismic ShutDown */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Seismic Shutdown                                    </div>
                                        <div className="timeline__event__description">
                                            <p>Participants have to build an earthquake-proof building using sticks, straws and other
materials given which can last the longest in the earthquake simulator. </p>
                                        </div>
                                    </div>
                                </div>
    {/* seismic ShutDown */}
    <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Flash Coding      </div>
                                        <div className="timeline__event__description">
                                            <p>Code the problem statements given in any language within a given time limit 3 times in a
row to win prizes. </p>
                                        </div>
                                    </div>
                                </div>
{/* maze solver */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Maze Solver      </div>
                                        <div className="timeline__event__description">
                                            <p>Line tracing cars coded by participants have to make their way through a maze. The bot
that solves the maze the fastest wins</p>
                                        </div>
                                    </div>
                                </div>
{/* Rubicks Cube solver */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Rubik's Cube Solver   </div>
                                        <div className="timeline__event__description">
                                            <p>Spectators can jumble a cube for our Rubik's cube solving robot, which can solve the
cube in a surprisingly short span of time. </p>
                                        </div>
                                    </div>
                                </div>
{/* Rubicks Cube solver */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Abhiyantriki    </div>
                                        <div className="timeline__event__description">
                                            <p>Showcase your technical prowess in a trifecta of challenges: CAD, debates, quizzes, and
racing presentations!</p>
                                        </div>
                                    </div>
                                </div>
{/* 3D Printing Workshop */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: 3D Printing Equipments   </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Wol3d India Limited</p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Autonomous Wheelchair & Robot */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Autonomous Wheelchair & Robot   </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Professor Vivek Nair from D. J. Sanghvi CoE</p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Brainwave Robotics */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Brainwave Robotics  </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: FT&S Mindlink</p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Drones*/}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Drones </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Samika Systems</p>
                                        </div>
                                    </div>
                                </div>
{/*Display: Electric Car */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Electric Car</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Jash Raval </p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Serving Bot */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                       Display: Serving Bot</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: UVrobots Pvt Ltd </p>
                                        </div>
                                    </div>
                                </div>
{/* Display: VR Headset */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>6 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: VR Headset</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Vighnesh Simulation Pvt Ltd</p>
                                        </div>
                                    </div>
                                </div>





{/* day 2 */}




{/* lazer heist */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>10:00 AM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Laser Heist
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Participants dodge lasers on their way to the vault </p>
                                        </div>
                                    </div>
                                </div>
{/* RC Plane Workshop solver */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>12:00 AM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title"> RC PLANE WORKSHOP</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: MPSTME’s Team Victor Tango</p>
                                        </div>
                                    </div>
                                </div>
{/* the bug bounty */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>4:00 PM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        The Bug Bounty
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Live machine hacking so you can get the black hat experience at our event for
penetration testing</p>
                                        </div>
                                    </div>
                                </div>
{/* F1 Motorsport Workshop */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>4:00 PM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        F1 Motorsport Workshop                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Jamie Shaw, Motorsport Athlete & Trainer</p>
                                        </div>
                                    </div>
                                </div>
{/*Web It 2 Win It */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Web It 2 Win It                                         </div>
                                        <div className="timeline__event__description">
                                            <p>A Robotic arm with AI which can play and beat you at tic tac toe. </p>
                                        </div>
                                    </div>
                                </div>
{/* pinewood derby */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Pinewood Derby
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Participants build and race a soapbox car, applying basic physics and mechanical principals </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>


                                    </div>
{/* light reaction */}
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Piano Tiles  
                                      </div>
                                        <div className="timeline__event__description">
                                            <p>Players walk on tiles creating the notes of piano as they walk</p>
                                        </div>
                                    </div>
                                </div>
{/*Unbeatable Tic Tac Toe  */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Unbeatable Tic-Tac-Toe                                        </div>
                                        <div className="timeline__event__description">
                                            <p>A Robotic arm with AI which can play and beat you at tic tac toe. </p>
                                        </div>
                                    </div>
                                </div>
{/* seismic ShutDown */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Seismic Shutdown                                    </div>
                                        <div className="timeline__event__description">
                                            <p>Participants have to build an earthquake-proof building using sticks, straws and other
materials given which can last the longest in the earthquake simulator. </p>
                                        </div>
                                    </div>
                                </div>
    {/* seismic ShutDown */}
    <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Flash Coding      </div>
                                        <div className="timeline__event__description">
                                            <p>Code the problem statements given in any language within a given time limit 3 times in a
row to win prizes. </p>
                                        </div>
                                    </div>
                                </div>
{/* maze solver */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Maze Solver      </div>
                                        <div className="timeline__event__description">
                                            <p>Line tracing cars coded by participants have to make their way through a maze. The bot
that solves the maze the fastest wins</p>
                                        </div>
                                    </div>
                                </div>
{/* Rubicks Cube solver */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Rubik's Cube Solver   </div>
                                        <div className="timeline__event__description">
                                            <p>Spectators can jumble a cube for our Rubik's cube solving robot, which can solve the
cube in a surprisingly short span of time. </p>
                                        </div>
                                    </div>
                                </div>
{/* Rubicks Cube solver */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Abhiyantriki    </div>
                                        <div className="timeline__event__description">
                                            <p>Showcase your technical prowess in a trifecta of challenges: CAD, debates, quizzes, and
racing presentations!</p>
                                        </div>
                                    </div>
                                </div>
{/* 3D Printing Workshop */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: 3D Printing Equipments   </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Wol3d India Limited</p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Autonomous Wheelchair & Robot */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Autonomous Wheelchair & Robot   </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Professor Vivek Nair from D. J. Sanghvi CoE</p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Brainwave Robotics */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Brainwave Robotics  </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: FT&S Mindlink</p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Drones*/}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Drones </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Samika Systems</p>
                                        </div>
                                    </div>
                                </div>
{/*Display: Electric Car */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Electric Car</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Jash Raval </p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Serving Bot */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                       Display: Serving Bot</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: UVrobots Pvt Ltd </p>
                                        </div>
                                    </div>
                                </div>
{/* Display: VR Headset */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>7 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: VR Headset</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Vighnesh Simulation Pvt Ltd</p>
                                        </div>
                                    </div>
                                </div>

{/* day 3 */}
{/* lazer heist */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>10:00 AM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Laser Heist
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Participants dodge lasers on their way to the vault </p>
                                        </div>
                                    </div>
                                </div>
{/* Drone workshop */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>12:00 AM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Drone Workshop
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Samika Systems</p>
                                        </div>
                                    </div>
                                </div>                   
{/*  Game Development Workshop */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>4:00 PM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Game Development Workshop                                      </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: FuturisTech Gamification
</p>
                                        </div>
                                    </div>
                                </div>                               
{/* RC Plane Workshop solver */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>12:00 AM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title"> RC PLANE WORKSHOP</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: MPSTME’s Team Victor Tango</p>
                                        </div>
                                    </div>
                                </div>
{/* the bug bounty */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>4:00 PM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        The Bug Bounty
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Live machine hacking so you can get the black hat experience at our event for
penetration testing</p>
                                        </div>
                                    </div>
                                </div>
{/* F1 Motorsport Workshop */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>4:00 PM</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        F1 Motorsport Workshop                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Jamie Shaw, Motorsport Athlete & Trainer</p>
                                        </div>
                                    </div>
                                </div>
{/*Web It 2 Win It */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Web It 2 Win It                                         </div>
                                        <div className="timeline__event__description">
                                            <p>TQ Collab Workshop </p>
                                        </div>
                                    </div>
                                </div>
{/* pinewood derby */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Pinewood Derby
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Participants build and race a soapbox car, applying basic physics and mechanical principals </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>


                                    </div>
{/* light reaction */}
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Piano Tiles  
                                      </div>
                                        <div className="timeline__event__description">
                                            <p>Players walk on tiles creating the notes of piano as they walk</p>
                                        </div>
                                    </div>
                                </div>
{/*Unbeatable Tic Tac Toe  */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Unbeatable Tic-Tac-Toe                                        </div>
                                        <div className="timeline__event__description">
                                            <p>A Robotic arm with AI which can play and beat you at tic tac toe. </p>
                                        </div>
                                    </div>
                                </div>
{/* seismic ShutDown */}
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Seismic Shutdown                                    </div>
                                        <div className="timeline__event__description">
                                            <p>Participants have to build an earthquake-proof building using sticks, straws and other
materials given which can last the longest in the earthquake simulator. </p>
                                        </div>
                                    </div>
                                </div>
    {/* seismic ShutDown */}
    <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Flash Coding      </div>
                                        <div className="timeline__event__description">
                                            <p>Code the problem statements given in any language within a given time limit 3 times in a
row to win prizes. </p>
                                        </div>
                                    </div>
                                </div>
{/* maze solver */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Maze Solver      </div>
                                        <div className="timeline__event__description">
                                            <p>Line tracing cars coded by participants have to make their way through a maze. The bot
that solves the maze the fastest wins</p>
                                        </div>
                                    </div>
                                </div>
{/* Rubicks Cube solver */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Rubik's Cube Solver   </div>
                                        <div className="timeline__event__description">
                                            <p>Spectators can jumble a cube for our Rubik's cube solving robot, which can solve the
cube in a surprisingly short span of time. </p>
                                        </div>
                                    </div>
                                </div>
{/* Rubicks Cube solver */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Abhiyantriki    </div>
                                        <div className="timeline__event__description">
                                            <p>Showcase your technical prowess in a trifecta of challenges: CAD, debates, quizzes, and
racing presentations!</p>
                                        </div>
                                    </div>
                                </div>
{/* 3D Printing Workshop */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: 3D Printing Equipments   </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Wol3d India Limited</p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Autonomous Wheelchair & Robot */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Autonomous Wheelchair & Robot   </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Professor Vivek Nair from D. J. Sanghvi CoE</p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Brainwave Robotics */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Brainwave Robotics  </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: FT&S Mindlink</p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Drones*/}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Drones </div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Samika Systems</p>
                                        </div>
                                    </div>
                                </div>
{/*Display: Electric Car */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: Electric Car</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Jash Raval </p>
                                        </div>
                                    </div>
                                </div>
{/* Display: Serving Bot */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                       Display: Serving Bot</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: UVrobots Pvt Ltd </p>
                                        </div>
                                    </div>
                                </div>
{/* Display: VR Headset */}
<div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>8 Feb<br/>All Day</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                        Display: VR Headset</div>
                                        <div className="timeline__event__description">
                                            <p>Conducted by: Vighnesh Simulation Pvt Ltd</p>
                                        </div>
                                    </div>
                                </div>






                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Timeline;