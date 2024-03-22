import React from 'react';
import "./land3.css";
import Aboutimg from "./Humaaans - Wireframe.png";
export default function home() {
    return (
      <div id="about" class="about section">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="about-left-image  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                              <img src={Aboutimg} alt=""/>
                          </div>
                      </div>
                      <div class="col-lg-6 align-self-center  wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                          <div class="about-right-content">
                              <div class="section-heading">
                                  <h6>About Us</h6>
                                  <h4>What is <em>WEBGEN ?</em></h4>
                                  <div class="line-dec"></div>
                              </div>
                              <p>The user can proceed to the authentication step using either of the two options :<br/> <br/>
                              ⭐ User Name
    <br />
    ⭐ Facial Recognition<br /><br />
                            
The system provides users with the capability to engage with it through voice and facial recognition, enabling them to securely store personal and medical information in a centralized location. The system also grants access to authorized medical professionals who have been thoroughly vetted and approved by the system's administrative panel, facilitating seamless and convenient retrieval of information from anywhere at any time.
                             </p>
                              <div class="row">
                                  <div class="col-lg-4 col-sm-4">
                                      <div class="skill-item first-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                          <div class="progress" data-percentage="90">
                                              <span class="progress-left">
                        <span class="progress-bar"></span>
                                              </span>
                                              <span class="progress-right">
                        <span class="progress-bar"></span>
                                              </span>
                                              <div class="progress-value">
                                                  <div>
                                                      95%<br/>
                                                      <span>Secure</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 col-sm-4">
                                      <div class="skill-item second-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                          <div class="progress" data-percentage="90">
                                              <span class="progress-left">
                        <span class="progress-bar"></span>
                                              </span>
                                              <span class="progress-right">
                        <span class="progress-bar"></span>
                                              </span>
                                              <div class="progress-value">
                                                  <div>
                                                      90%<br/>
                                                      <span>Simplicity</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 col-sm-4">
                                      <div class="skill-item third-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                          <div class="progress" data-percentage="90">
                                              <span class="progress-left">
                        <span class="progress-bar"></span>
                                              </span>
                                              <span class="progress-right">
                        <span class="progress-bar"></span>
                                              </span>
                                              <div class="progress-value">
                                                  <div>
                                                      90%<br/>
                                                      <span>Faster</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

    )
}