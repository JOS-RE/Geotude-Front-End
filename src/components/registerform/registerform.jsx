import React from "react";

import "./registerform.css";

export default function Registerform() {
    const openCam= () => {
        document.getElementById("videoCamreg").style.display="block";
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
           var video = document.getElementById('videoCamreg');
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
        <div id="form1">
            
                   <h3>Register Here</h3>

                  <label for="username">Username</label>
                  <input type="text" placeholder="Enter Username" id="usernamereg"/>

                  <label for="password">Password</label>
                  <input type="password" placeholder="Enter Password" id="passwordreg"/>
                  <label for="password">Confirm Password</label>
                  <input type="password" placeholder="Passwords should match" id="cpasswordreg"/>

                   <button>Register</button><br/><br/>
                   <p id="or">---------------</p>
                    <a href="#videoCamreg"><button id="facelog" onClick={openCam}>Register using face authentication</button></a>
                    <video id="videoCamreg"></video>
                    <button id="clp">Click Picture</button><br/>
      </div>
    );
}