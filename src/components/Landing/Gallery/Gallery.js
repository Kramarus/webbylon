import React from 'react';
import everkitchen from './img/everkitchen.png';
import hundesalon from './img/hundesalon.png';
import kebabking from './img/kebabking.png';
import spitzner from './img/spitzner.png';
import rbr from './img/rbr.png';
import teploenergo from './img/teploenergo.png';
import danagrotrade from './img/danagrotrade.png';
import danagro from './img/danagro.png';

export default function Gallery() {
  return (
    <main id="main" data-aos="fade" data-aos-delay="1500">
    <section id="gallery" class="gallery">
      <div class="container-fluid">
        <div class="row gy-4 justify-content-center">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src={everkitchen} class="img-fluid" alt="" />
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/everkitchen.png" title="Ever.kitchen" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
                <a href="https://everkitchen.de/" target="_blank" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src={hundesalon} class="img-fluid" alt="" />
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/hundesalon.png" title="Hundesalon Emika" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
                <a href="https://hundesalonemika.de/" target="_blank" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src={kebabking} class="img-fluid" alt="" />
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/kebabking.png" title="King Kebab" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
                <a href="https://kebab-king.me/" target="_blank" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src={danagro} class="img-fluid" alt="" />
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/danagro.png" title="Dan Agro" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
                <a href="https://dan-agro.com.ua/en.html" target="_blank" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src={danagrotrade} class="img-fluid" alt="" />
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/danagrotrade.png" title="Dan Agro Trade" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
                <a href="https://dan-agro.com/#/de" target="_blank" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src={teploenergo} class="img-fluid" alt="" />
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/teploenergo.png" title="Teploenergo" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
                <a href="https://teploenergo.com.ua/en" target="_blank" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src={rbr} class="img-fluid" alt="" />
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/rbr.png" title="Kanzlei RBR" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
                <a href="https://kanzlei-rbr.com/" target="_blank" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src={spitzner} class="img-fluid" alt="" />
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/spitzner.png" title="Spitzner Restaurant" class="glightbox preview-link"><i
                    class="bi bi-arrows-angle-expand"></i></a>
                <a href="https://www.spitzner-restaurant.de/" target="_blank" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>




        </div>

      </div>
    </section>

  </main>
  )
}
