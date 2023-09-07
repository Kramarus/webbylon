import React from "react";

export default function Footer() {
  return (
    <section className="black" id="footer">
      <div className="row">
        <div className="col s3">
          <h3>Webbylon</h3>
          <a href="#" className="btn btn-primary">Kontakt</a>
        </div>
        <div className="col s3">
          <ul>
            <li>
              <h3>Links</h3>
            </li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Dienstleistungen</a></li>
            <li><a href="#about">Über uns</a></li>
          </ul>
        </div>
        <div className="col s3">
          <ul>
            <li>
              <h3>Kontakte</h3>
            </li>
            <li>
              <p>rkramarev@gmail.com</p>
            </li>
            <li>
              <p>+49 176 432 342 83</p>
            </li>
          </ul>
        </div>
        <div className="col s3">
          <h3>Newsletter</h3>
        </div>
      </div>
      <div className="copyright">
        <div className="row">
          <div className="col">
            <p>&copy; 2023 Webbylon | All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
