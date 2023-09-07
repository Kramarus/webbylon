import React from "react";
import Service from "./Service";

import iconWebsite from "../images/website.svg";
import iconDevelopment from "../images/development.svg";
import iconHosting from "../images/hosting.svg";
import iconMarketing from "../images/marketing.svg";

const services = [
  {
    title: "UX/UI Design",
    subtitle:
      "Wir erstellen für Dich eine responsive Webseite, die auf allen Geräten gut aussieht, nach Deinen Bedürfnissen. Wir erstellen auch Grafiken und Logos, sowie schreiben alle Texte.",
    icon: iconWebsite,
  },
  {
    title: "Web Development",
    subtitle:
      "Wir programmieren selbst Deine Webseite mit HTML5, CSS3, JavaScript oder mit Frameworks wie ReactJS oder Bootstrap.",
    icon: iconDevelopment,
  },
  {
    title: "Marketing & SEO",
    subtitle:
      "Wir machen Deine Webseite bekannt und sorgen dafür, dass Dein Unternehmen in den Suchmaschinen gefunden werden wird.",
    icon: iconMarketing,
  },
  {
    title: "Domain & Hosting",
    subtitle:
      "Wir helfen Dir, Domain zu kaufen und die Webseite auf einem Server zu hosten.",
    icon: iconHosting,
  }
];

export default function Services() {
  return (
    <section className="" id="services">
      <div className="container">
        <h2>Dienstleistungen</h2>
        <div className="row">
          {services.map((service) => (
            <div className="col s3">
              <Service title={service.title} subtitle={service.subtitle} icon={service.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
