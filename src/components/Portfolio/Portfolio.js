import "./Portfolio.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {cardsPortfolio, cardsPortfolioFreelans} from "../../utils/Cards";

function Portfolio ({onOpenForm, onOpenBurger, isOpenBurger, onCloseBurger}) {
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
            <p className="about-me__subtitle">Мои работы на фрилансе <span className="about-me__subtitle-span">(Обновлено: 17.12.2021)</span></p>
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
          <div id="zakaz" className="zakaz">
          <h3 className="portfolio__title portfolio__title-zakaz">Готов взяться за ваши проекты</h3>
          <div className="aboutme-text aboutme-text-zakaz">
          <p className="about-me__title">Если вам нужна помощь, в настройке сайта, доработке или создания с нуля, то я готов вам в этом помочь.</p>
          <p className="about-me__title">А так же:<br/> - установлю все современные движки CMS на ваш хостинг <br/> - перенесу сайт с одного хостинга/домена на другой <br/> - сверстаю по ТЗ всё, что захотите <br/> - адаптирую сайт под различные устройства <br/> - напишу скрипт под ваши задачи</p>
          <button className="header__button header__button-zakaz" onClick={onOpenForm} >Напишите мне для обсуждения деталей</button>
          <button
        className="header__button header__button-zakaz burger__button-zakaz"
        type="button"
        onClick={onOpenBurger}
      >
        Напишите мне для обсуждения деталей
      </button>
      <BurgerMenu isOpen={isOpenBurger} onClose={onCloseBurger} />

          </div>
          </div>
            
        </section>
    )
}

export default Portfolio;