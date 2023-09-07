import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav-logo">
            <h2>Webbylon</h2>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#services">Dienstleistungen</a>
            </li>
            <li>
              <a href="#about">Über uns</a>
            </li>
            <li>
              <a href="#" className="btn btn-primary">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
