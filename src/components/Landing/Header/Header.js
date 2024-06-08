import React from 'react';

export default function Header() {
  return (
    <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center  me-auto me-lg-0">
        {/* <img src="assets/img/logo.png" alt="" /> */}
        <i class="bi bi-gear"></i>
        <h1>Webbylon</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      <div class="header-social-links">
        <a href="https://www.facebook.com/rkramarev" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/rkramarev" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/rkramarev/" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
  )
}
