import React from "react";
import "./mainnav.css";

export default function mainnav() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
<a class="navbar-brand" href="/">
<img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#homevid">Register</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#footer">Contact Us</a>
  </li>
</ul>
</div>
</div>
</nav>
  </div>
    );
}