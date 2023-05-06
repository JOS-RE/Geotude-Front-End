import React from "react";

import "./loginform.css";

export default function Loginform() {
    const openCam= () => {
        document.getElementById("videoCam").style.display="block";
        document.getElementById("clp").style.display="block";
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
           var video = document.getElementById('videoCam');
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
        });}
    return (
      <div id="loginform">
        <div id="form">
            
                   <h3>Login Here</h3>

                  <label for="username">Username</label>
                  <input type="text" placeholder="Enter Username" id="username"/>

                  <label for="password">Password</label>
                  <input type="password" placeholder="Enter Password" id="password"/>

                   <button>Log In</button><br/><br/>
                   <p id="or">---------------</p>
                    <a href="#videoCam"><button id="facelog" onClick={openCam}>Login using face authentication</button></a>
                    <video id="videoCam"></video>
                    <button id="clp">Click Picture</button><br/>
      </div>
      </div>
    );
}