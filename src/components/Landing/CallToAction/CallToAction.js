import React from 'react'

export default function CallToAction() {
  return (
    <section class="section">
    <div class="container position-relative">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 text-center">
        <a href="https://wa.me/4917643234283?text=Hallo!"
            className="cta-btn d-sm-inline-block d-md-none d-lg-none"><i className="bi bi-whatsapp"></i> WhatsApp</a>
          <a type="button" data-bs-toggle="modal" data-bs-target="#contactform"
            className="cta-btn d-none d-md-inline-block d-lg-inline-block">Kontakt aufnehmen</a>
        </div>
      </div>
    </div>
  </section>
  )
}
