import React from "react";
import "./maincam.css";


export default function maincam() {
    const openCam= () => {
        document.getElementById("videoCamm").style.display="block";
        document.getElementById("facelogm").style.display="none";
        let All_mediaDevices=navigator.mediaDevices
        if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
           console.log("getUserMedia() not supported.");
           return;
        }
        All_mediaDevices.getUserMedia({
           audio: false,
           video: true
        })
        .then(function(vidStream) {
           var video = document.getElementById('videoCamm');
           if ("srcObject" in video) {
              video.srcObject = vidStream;
           } else {
              video.src = window.URL.createObjectURL(vidStream);
           }
           video.onloadedmetadata = function(e) {
              video.play();
           };
        })
        .catch(function(e) {
           console.log(e.name + ": " + e.message);
        });
    }
    return (
      <div id="mainpg">
        <div id="cammain">
                    <a href="#videoCamm"><button id="facelogm" onClick={openCam}>Open Camera</button></a>
            <video id="videoCamm"></video>
                 <br/>
        </div>
        
        </div>
    );
}