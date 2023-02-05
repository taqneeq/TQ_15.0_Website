import React, { useState } from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import videobg from '../assets/svid.mp4'
import alpha8 from '../assets/Sponsors/Alpha8.png'
import herody from '../assets/Sponsors/Herody.png'
import kettle from '../assets/Sponsors/Kettle.png'
import misfits from '../assets/Sponsors/misfits.png'
import mojoco from '../assets/Sponsors/Mojoco.png'
import molly from '../assets/Sponsors/Molly.png'
import nikist from '../assets/Sponsors/Nikist.png'
import sc from '../assets/Sponsors/SC.png'
import unibic from '../assets/Sponsors/Unibic.png'
import wtf from '../assets/Sponsors/wtf.png'


export default function Head()
{

    const [mode, Setmode] = useState(false);

    useEffect(() =>
    {
        Aos.init()
    }, []);


    function show_display()
    {
        Setmode(true);
        document.getElementById("hide_sponsor").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("heading-div").style.display = "none";
    }

    function remove_display()
    {
        Setmode(false);
        document.getElementById("menu").style.display = "block";
        document.getElementById("hide_sponsor").style.display = "flex";
        document.getElementById("heading-div").style.display = "flex";
    }

    function reveal()
    {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++)
        {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 10;

            if (elementTop < windowHeight - elementVisible)
            {
                reveals[i].classList.add("active");
            } else
            {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    const height = "600px";
    return (
        <>
            <div className="bgvideolg">
                <video src={videobg} autoPlay loop muted />
                <div className='overlay'></div>
            </div>


            <div className="sponsortext mt-6">
                <h2 className="text-white display-4 text-center fw-bold">SPONSORS</h2>
            </div>

            <div className='sponsorspage'>
                
            <div className="position-absolute text-white d-flex flex-column justify-content-md-center" style={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <div className="container-md px-5 mt-12">
                    <section class="gallery min-vh-100" id="hide_sponsor">
                        <div class="container-lg" data-aos="fade-up">
                            <div class="sponsor row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3" data-aos="fade-up">
                                <div class="col" data-aos="fade-up">
                                    <img data-aos="fade-up" data-aos-delay="500" src={alpha8} class="gallery-item alpha8" alt="gallery" />
                                </div>
                                <div class="col" data-aos="fade-up">
                                    <img data-aos="fade-up" data-aos-delay="600" src={herody} class="gallery-item herody" alt="gallery" />
                                </div>
                                <div class="col" data-aos="fade-up">
                                    <img data-aos="fade-up" data-aos-delay="700" src={kettle} class="gallery-item" alt="gallery" />
                                </div>
                                <div class="col" data-aos="fade-up">
                                    <img data-aos="fade-up" data-aos-delay="800" src={misfits} class="gallery-item misfits" alt="gallery" />
                                </div>
                                <div class="col" data-aos="fade-up">
                                    <img data-aos="fade-up" data-aos-delay="900" src={mojoco} class="gallery-item mojoco" alt="gallery" />
                                </div>
                                <div class="col" data-aos="fade-up">
                                    <img data-aos="fade-up" data-aos-delay="1000" src={molly} class="gallery-item molly" alt="gallery" />
                                </div>
                                <div class="col" data-aos="fade-up">
                                    <img data-aos="fade-up" data-aos-delay="1100" src={nikist} class="gallery-item nikist" alt="gallery" />
                                </div>
                                <div class="col" data-aos="fade-up">
                                    <img data-aos="fade-up" data-aos-delay="1200" src={sc} class="gallery-item sc" alt="gallery" />
                                </div>
                                <div class="col" data-aos="fade-up">
                                    <img data-aos="fade-up" data-aos-delay="1300" src={wtf} class="gallery-item wtf" alt="gallery" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}
