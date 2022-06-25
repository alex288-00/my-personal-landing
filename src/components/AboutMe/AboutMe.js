import "./AboutMe.css";
// import {ABOUTME} from "../../utils/Text";
import photo from "../../images/my_photo-min.jpg";
import {cardsSkill, cardsFreelans} from "../../utils/Cards";

function AboutMe () {
    return (
        <section id="aboutMe" className="about-me">
            <h2 className="portfolio__title">Немного о себе</h2>
            <div className="about-me__info">
            <img className="about-me__my-photo" src={photo} alt="Это я)"></img>
            <div className="aboutme-text">
                <p className="about-me__title">Меня зовут Алексей. Мне 31 год. Я - веб-разработчик. Закончил курсы <a className="text-link" href="https://praktikum.yandex.ru" target="blank">Яндекс.Практикум.</a></p>
                <p className="about-me__title">Основное направление это front-end, но также изучал и back-end. В настоящий момент продолжаю изучение JavaScript - убежден, что за языком будущее. Продолжаю изучение различных библиотек и фреймворков (сайт написан на React - погрузился в изучение данной библиотеки, весьма перспективная и набирает популярность по всему миру).</p>
                <p className="about-me__title">Планирую изучать и другие языки программирования для своего интереса и общего развития. Целиком настроен на дальнейшее развитие в сфере веб-разработки.</p>
                
            </div>
                

                
            </div>
            <p className="about-me__subtitle">Немного о том, чем владею</p>
            <div className="about-me__skills">
              
                {cardsSkill.map((i, key) => {
                    return (
                        <div className="about-me__skill" key={key}>
                    <img className="about-me__skill-img" src={i.img} alt={i.alt}></img>
                    <p className="about-me__skill-text">{i.text}</p>
                </div>
                    )
                })}
            </div>
            <p className="about-me__subtitle ">А ещё</p>
            <div className="about-me__skills">
              
                {cardsFreelans.map((i, key) => {
                    return (
                        <div className="about-me__skill" key={key}>
                    <a href={i.link} target="blank"><img className="about-me__skill-img" src={i.img} alt={i.alt}></img></a>
                    <p className="about-me__skill-text">{i.text}</p>
                </div>
                    )
                })}
            </div>

        </section>
    )
}

export default AboutMe;