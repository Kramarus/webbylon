import React from 'react';

export default function Hero() {
  return (
  <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade"
    data-aos-delay="1500">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h2>Gewinne mehr Kunden <br />mit einer professionellen Webseite</h2>
          <p>
            Mit unserer Webdesign-Lösung verleihen wir Deinem Unternehmen eine digitale Identität,
            die beeindruckt und überzeugt.
          </p>

          <a href="https://wa.me/4917643234283?text=Hallo!"
            className="btn-get-started d-sm-inline-block d-md-none d-lg-none"><i className="bi bi-whatsapp"></i> WhatsApp</a>
          <a type="button" data-bs-toggle="modal" data-bs-target="#contactform"
            className="btn-get-started d-none d-md-inline-block d-lg-inline-block">Kontakt aufnehmen</a>
        </div>
      </div>
    </div>
    
  </section>
  )
}
