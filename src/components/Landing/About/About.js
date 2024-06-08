import React from 'react';

export default function About() {
    return (

        <section id="about" class="about page-header d-flex align-items-center">
            <div class="container">
                <div class="row d-flex justify-content-center mb-3">
                    <div class="col-lg-6 text-center">
                        <h2>Über mich</h2>
                    </div>
                </div>
                <div class="row gy-4 justify-content-center">
                    <div class="col-lg-4">
                        <img src="assets/img/profile-img.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-5 content">
                        <h2>Freiberufler aus Münster</h2>
                        <p class="fst-italic py-3">
                            Hi! Ich heiße Ruslan Kramarev. Ich bin Webdesigner und Marketing Specialist aus Münster.
                            Ich habe mehr als 7 Jahre Erfahrung in Bereichen Web-Design und Marketing.
                            Ich helfe kleinen und mittleren Unternehmen, ihre Online-Präsenz zu verbessern und mehr Kunden zu gewinnen.
                        </p>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>rkramarev@gmail.com</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+49 176 432 342 83</span></li>
                                </ul>

                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Stadt:</strong> <span>Münster (Westf)</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Geboren:</strong> <span>30 Oktober 1991</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Sprachen:</strong> <span>Deutsch, Englisch, Spanisch,
                                        Russisch, Ukrainisch</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Programmier-Sprachen:</strong> <span>HTML5, CSS3,
                                        JavaScript, Python, PHP</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>CSS Frameworks:</strong> <span>Bootstrap, Bulma,
                                        Materialize CSS</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Web Frameworks:</strong> <span>ReactJS, Django,
                                        WordPress</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Grafikdesign:</strong> <span>Photoshop/GIMP,
                                        Illustrator/InkScape, Canva</span></li>
                                </ul>
                            </div>
                        </div>
                        <p class="py-3">
                            Ich lebe in Münster(Westf) seit 2014. Da habe ich Wirtschaftsinformatik an der Westfälischen
                            Wilhelms-Universität Münster studiert.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}
