import React from "react";

import "./landmain.css";

export default function landmain() {
    return (
        <div>
            <div className="landmain">
            <div class="row justify-content-evenly" >
        
            <div id="info"  class="col-4 ">
            <p id="landmainp">Geotude.</p>
            <p id="landmainp2">An Ultimate tool to help you diagnose your disease.</p>
        </div>
            <div class="col-1 text-center"></div>
            <div id="carousel" class="col-4 text-center">      
                  <img id="landmainimg"  src="https://i.insider.com/611426773dd01000199d33bd?width=1000&format=jpeg&auto=webp" alt="landingImg"/>
            </div>
            </div>
        </div>
        </div>
    );
    }