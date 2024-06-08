import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Testimonials() {
    return (
        <section id="testimonials" class="testimonials">
            <div class="container">

                <div class="section-header">
                    <h2>Testimonials</h2>
                    <p>Was meine Kunden sagen</p>
                </div>
                <div class="slides-3 swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Die Webseite ist super! Ich mag, wie sie aussieht und wie einfach sie zu benutzen ist. Große Arbeit!
                                </p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Die Leute, die meine Webseite gemacht haben, waren sehr nett und haben mir gut zugehört. Ich bin sehr
                                    zufrieden mit dem Ergebnis.
                                </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                                </div>
                                <p>
                                    Die Zusammenarbeit war angenehm und das Endergebnis gefällt mir gut. Ein paar Verbesserungen könnten
                                    jedoch vorgenommen werden, um die Nutzererfahrung zu optimieren.
                                </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                                </div>
                                <p>
                                    Die Webseite sieht gut aus und erfüllt größtenteils meine Erwartungen. Es gab jedoch ein paar kleine
                                    Probleme, die aber schnell behoben wurden. Insgesamt bin ich zufrieden.
                                </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Meine neue Webseite ist toll! Es war einfach, mit dem Team zusammenzuarbeiten, und sie haben alles
                                    getan, was ich gefragt habe.
                                </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Ich liebe meine neue Webseite! Sie ist genau so, wie ich sie haben wollte. Ich empfehle sie gerne
                                    weiter!
                                </p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Ich bin wirklich beeindruckt von meiner Webseite. Sie sieht gut aus und funktioniert einwandfrei. Danke
                                    an das Team für ihre harte Arbeit!
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
    )
}
