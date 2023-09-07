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
      "Ich erstelle für Sie eine moderne, responsive Webseite, die auf allen Geräten gut aussieht.",
    icon: iconWebsite,
  },
  {
    title: "Web Development",
    subtitle:
      "Ich erstelle für Sie eine moderne, responsive Webseite, die auf allen Geräten gut aussieht.",
    icon: iconDevelopment,
  },
  {
    title: "Marketing & SEO",
    subtitle:
      "Ich erstelle für Sie eine moderne, responsive Webseite, die auf allen Geräten gut aussieht.",
    icon: iconMarketing,
  },
  {
    title: "Domain & Hosting",
    subtitle:
      "Ich erstelle für Sie eine moderne, responsive Webseite, die auf allen Geräten gut aussieht.",
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
