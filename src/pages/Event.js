import React from 'react'
import videobg from "../assets/svid.mp4"

export default function Event()
{
    return (
        <>

            <div className="bgvideolg">
                <video src={videobg} autoPlay loop muted />
            </div>  

            <h1 className="text-white text-center display-5 mt-12">EVENTS</h1>

            <div className='eventpage'>
                <main class="epage-content">
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Pinewood Derby</h2>
                        <p class="ecopy">Participants build and race a soapbox car, applying basic physics and mechanical principals</p>
                        <button class="ebtn">Register</button>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Maze Solver</h2>
                        <p class="ecopy">Line tracing cars coded by players have to make their way through a maze. The bot that solves the maze the fastest wins</p>
                        <button class="ebtn">Register</button>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Smart Football</h2>
                        <p class="ecopy">Participants try to shoot a goal against a robot goalkeeper at the goal post</p>
                        <button class="ebtn">Register</button>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Mission Impossible</h2>
                        <p class="ecopy">Participants dodge the laser beams and cross the three levels, each harder than the previous one</p>
                        <button class="ebtn">Register</button>
                        </div>
                    </div>

                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Piano Tiles </h2>
                        <p class="ecopy">Players walk on tiles creating the notes of piano as they walk</p>
                        <button class="ebtn">Register</button>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Earthquake Proof</h2>
                        <p class="ecopy">Participants have to build an earthquake-proof building using sticks, straws and other materials given which can last the longest in the earthquake simulator.</p>
                        <button class="ebtn">Register</button>
                        </div>
                    </div>

                    
                </main>
            </div>
            </>
    )
}
