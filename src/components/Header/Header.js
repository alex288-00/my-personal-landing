import "./Header.css"

import logoReact from "../../logo.svg"
import { Link } from "react-scroll";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header () {
    const [openBurger, setOpenBurger] = useState(false);
    function handleBurgerClick () {
        setOpenBurger(true);
    }

    function closeBurgerMenu () {
        setOpenBurger(false);
    }
    // const section = document.querySelector("#aboutMe")
    // function handleClick () {
    //     section.scrollIntoView({block: "start"})
    // }
    return (
        <header id="header" className="header">
            <button
        className="burger-button"
        type="button"
        onClick={handleBurgerClick}
      >
        &#9776;
      </button>
      <BurgerMenu isOpen={openBurger} onClose={closeBurgerMenu} />
            <nav className="header__nav">
                <ul className="header__list">
                    <Link
                    className="header__link"
                    activeClass="header__link-active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    duration={700}
                    >
                       <li className="header__list-item">Обо мне</li> 
                    </Link>
                    <Link
                    className="header__link"
                    activeClass="header__link-active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={700}
                    >
                       <li className="header__list-item">Мои работы</li> 
                    </Link>
                    <Link
                    className="header__link"
                    activeClass="header__link-active"
                    to="feedbacks"
                    spy={true}
                    smooth={true}
                    duration={700}
                    >
                       <li className="header__list-item">Связь со мной</li> 
                    </Link>
                   
                </ul>
                <img className="header__logo-react" src={logoReact} alt="React"></img>
            </nav>
            <h2 className="header__title">Привет! <br/> И добро пожаловать!</h2>
            {/* <p className="header__subtitle">Чуть ниже я расскажу о себе</p> */}
            
            
        </header>
    )
}

export default Header;