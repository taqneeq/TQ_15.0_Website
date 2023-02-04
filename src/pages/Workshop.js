import React from 'react'
import videobg from '../assets/svid2.mp4'

export default function Workshop()
{

    const drone = () =>
    {
        window.open("https://ugf11b5z0iy.typeform.com/to/m5XyietS", "_blank");
    };

    const motorsport = () =>
    {
        window.open("https://ugf11b5z0iy.typeform.com/to/a7eYqxQJ", "_blank");
    };

    const arvr = () =>
    {
        window.open("https://ugf11b5z0iy.typeform.com/to/XZiyRPMX", "_blank");
    };

    const gamedev = () =>
    {
        window.open("https://ugf11b5z0iy.typeform.com/to/XZiyRPMX", "_blank");
    };

    return (
        <>
            <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />


            <div className="bgvideolg">
                    <video src={videobg} autoPlay loop muted />
                </div>

            <div className="mt-10">
                <h1 className='text-white text-center display-2 fw-bold ml-5'>
                    WORKSHOPS
                </h1>
            </div>
            <div className="wcontainer mt-6">
                <div className="wcard">
                    <h2>Drone Building</h2>
                    <i className="fas fa-arrow-right" />
                    <p>Click here to register!</p>
                    <div className="pic" />
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />

                    </ul>
                    <div className="social">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-github" />
                    </div>
                    <button data-bs-toggle="modal" data-bs-target="#Modal-1" ></button>
                </div>


                <div className="wcard wcard2">
                    <h2>Motorsport</h2>
                    <i className="fas fa-arrow-right" />
                    <p>Click here to register!</p>
                    <div className="pic pic2" />
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                    <div className="social">
                        <i>
                            12/1/2023
                        </i>

                    </div>
                    <button data-bs-toggle="modal" data-bs-target="#Modal-2"></button>
                </div>

                <div className="wcard wcard3">
                    <h2>AR/VR</h2>
                    <i className="fas fa-arrow-right" />
                    <p>Click here to register!</p>
                    <div className="pic pic3" />
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                    <div className="social">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-github" />
                    </div>
                    <button onClick={arvr}></button>
                </div>

                <div className="wcard wcard4">
                    <h2>Game Dev</h2>
                    <i className="fas fa-arrow-right" />
                    <p>Click here to register!</p>
                    <div className="pic pic4" />
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                    <div className="social">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-github" />
                    </div>
                    <button ></button>
                </div>


{/* modal's For Workshop */}
<div class="modal fade" id="Modal-1" tabindex="-1" aria-labelledby="Modal-1Label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title" id="Modal-1Label">
            <img class="workshop-modal-image" src='https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="drone" />
        </div>
      </div>
      <div class="modal-body">
        <h1>DroneSystem Coretech</h1>
      A FREE hands-an session where participants will learn about drone types, core technology, flight principles and control of drones followed by actual assembly, configuration and flight of a simple quadcopter.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a  class="btn btn-primary" href="https://ugf11b5z0iy.typeform.com/to/m5XyietS">Register</a>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="Modal-2" tabindex="-1" aria-labelledby="Modal-2Label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title" id="Modal-2Label">
            <img class="workshop-modal-image" src='https://images.unsplash.com/photo-1485906441524-ed91f8315b4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="motorsport" />
        </div>
      </div>
      <div class="modal-body">
        <h1>Unlearning Motorsport</h1>
        Here's Jamie Shaw, the brand ambassador of Motorsport, to share his knowledge about racing.Join us at the seminar & get your adrenaline pumping!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a  class="btn btn-primary" href="https://ugf11b5z0iy.typeform.com/to/a7eYqxQJ">Register</a>
      </div>
    </div>
  </div>
</div>
                </div>
                </div>
        </>
    )
}
