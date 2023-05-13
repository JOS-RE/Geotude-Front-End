import React from 'react';
import "./land3.css";
import Aboutimg from "./about-dec.png";
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
                                  <h4>What is <em>AUTH - CODE ?</em></h4>
                                  <div class="line-dec"></div>
                              </div>
                              <p>The user can proceed to the authentication step using either of the two options :<br/> 
                       – QR (Quick Response) code 
    <br />
               – OTP (One Time Password).<br />
                            As per the option selected by the user, the system will generate a QR Code or an OTP. Both the QR code and the OTP will be sent to the user’s mail id, After scanning that QR code user will get a safe and secure link of the site in which he will be logged in.

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