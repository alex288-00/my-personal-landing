import "./Header.css"

import logoReact from "../../logo.svg"
import { Link } from "react-scroll";
// import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import FeedBack from "../FeedBack/FeedBack";

function Header ({isOpenForm, onCloseForm, onOpenForm, isOpenBurger, onCloseBurger, onOpenBurger}) {
   
    // const section = document.querySelector("#aboutMe")
    // function handleClick () {
    //     section.scrollIntoView({block: "start"})
    // }
    return (
        <header id="header" className="header">
            <button
        className="burger-button"
        type="button"
        onClick={onOpenBurger}
      >
        &#9776;
      </button>
      <BurgerMenu isOpen={isOpenBurger} onClose={onCloseBurger} />
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
                    // activeClass="header__link-active"
                    to="zakaz"
                    spy={true}
                    smooth={true}
                    duration={700}
                    >
                       <li className="header__list-item">Нужна помощь?</li> 
                    </Link>
                     
                   
                </ul>
                <button className="header__button" onClick={onOpenForm}>Связь со мной</button>
                    <FeedBack isOpen={isOpenForm} onClose={onCloseForm}  />
                <img className="header__logo-react" src={logoReact} alt="React"></img>
            </nav>
            <h2 className="header__title">Привет! <br/> И добро пожаловать!</h2>
            {/* <p className="header__subtitle">Чуть ниже я расскажу о себе</p> */}
            <Link
                    
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    duration={700}
                    >
                       <div className="arrow-down">
    <span></span>
    <span></span>
    <span></span>
</div>
                    </Link>
            
            
        </header>
    )
}

export default Header;