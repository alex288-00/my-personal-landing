import "./Portfolio.css";
import {cardsPortfolio, cardsPortfolioFreelans} from "../../utils/Cards";

function Portfolio () {
    return (
        <section id="portfolio" className="portfolio">
            <h2 className="portfolio__title">Мои работы</h2>
            <p className="about-me__subtitle">Во время обучения в Яндексе</p>
            <div className="portfolio__cards">
              
                {cardsPortfolio.map((i, key) => {
                    return (
                        <div className="about-me__skill" key={key}>
                    <a className="portfolio__link" href={i.link} target="blank" data-text="Кликните для перехода на сайт"><img className="portfolio__card-img"  src={i.img} alt={i.alt}></img></a>
                    <p className="about-me__skill-text">{i.text}</p>
                </div>
                    )
                })}
            </div>
            <p className="about-me__subtitle">Мои работы на фрилансе</p>
            <div className="portfolio__cards">
              
              {cardsPortfolioFreelans.map((i, key) => {
                  return (
                      <div className="about-me__skill" key={key}>
                  <a className="portfolio__link" href={i.link} target="blank" data-text="Кликните для перехода на сайт"><img className="portfolio__card-img"  src={i.img} alt={i.alt}></img></a>
                  <p className="about-me__skill-text">{i.text}</p>
              </div>
                  )
              })}
          </div>
            
            
        </section>
    )
}

export default Portfolio;