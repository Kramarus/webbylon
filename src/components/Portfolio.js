import React from "react";
import PortfolioItem from "./PortfolioItem";
import everkitchen from "../images/everkitchen.png";
import hundesalon from "../images/hundesalon.png";
import kebabking from "../images/kebabking.png";
import danagro from "../images/danagro.png";
import danagrotrade from "../images/danagrotrade.png";
import teploenergo from "../images/teploenergo.png";

const portfolio = [
  {
    title: "Ever Kitchen",
    description: "In diesem Projekt haben wir als Teil eines großen Teams zusammengearbeitet. Die Webseite wurde mithilfe von WordPress erstellt. Wir waren auch für die Grafikgestaltung verantwortlich und haben einige Texte geschrieben.",
    image: everkitchen,
    link: "https://everkitchen.de/",
  },
  {
    title: "Hundesalon Emika",
    description: "Die Webseite wurde von uns mithilfe von Bootstrap Framework erstellt, sowie HTML5, CSS3 und JavaScript. Alle grafischen Abbildungen und Texte wurden auch von unserem Team erstellt.",
    image: hundesalon,
    link: "https://hundesalonemika.de/",
  },
  {
    title: "King Kebab",
    description: "Die Webseite ist eine komplette Web-Anwendung, die mit React.js erstellt wurde. Grafik und Texte wurden von unserem Team vorbereitet. Wir haben den WhatsApp Messenger in die Webseite integriert.",
    image: kebabking,
    link: "https://kebab-king.me/",
  },
  {
    title: "Dan Agro",
    description: "Die Webseite wurde mithilfe von Bootstrap 5,sowie HTML5, CCS3 und JavaScript erstellt. Grafik gehört dem Besteller. Texte wurden von uns verfasst.",
    image: danagro,
    link: "https://dan-agro.com.ua/en.html",
  },
  {
    title: "Dan Agro Trade",
    description: "Das ist noch eine ReactJS Web-Anwendung. Wir haben die Webseite komplett gebaut, Texte geschrieben und in mehrere Sprachen übersetzt. SEO gehörte auch zu unseren aufgaben.",
    image: danagrotrade,
    link: "https://dan-agro.com/#/de",
  },
  {
    title: "Teploenergo",
    description: "Wir haben als Teil eines Teams gearbeitet. Einige Texte wurden vonuns geschrieben und übersetzt. Wir habenauch SEO eingerichtet.",
    image: teploenergo,
    link: "https://teploenergo.com.ua/en",
  },
];

export default function Portfolio() {
  return (
    <section className="" id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="row">
          {portfolio.map((item) => (
            <div className="col s4">
              <PortfolioItem title={item.title} description={item.description} image={item.image} link={item.link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
