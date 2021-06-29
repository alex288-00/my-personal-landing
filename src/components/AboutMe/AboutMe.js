import "./AboutMe.css";
import {ABOUTME} from "../../utils/Text";
import photo from "../../images/my_photo.jpg";
import {cardsSkill, cardsFreelans} from "../../utils/Cards";

function AboutMe () {
    return (
        <section id="aboutMe" className="about-me">
            <h2 className="portfolio__title">Немного о себе</h2>
            <div className="about-me__info">
            <img className="about-me__my-photo" src={photo} alt="Это я)"></img>
                <h3 className="about-me__title">{ABOUTME}</h3>
                
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
                    <img className="about-me__skill-img" src={i.img} alt={i.alt}></img>
                    <p className="about-me__skill-text">{i.text}</p>
                </div>
                    )
                })}
            </div>

        </section>
    )
}

export default AboutMe;