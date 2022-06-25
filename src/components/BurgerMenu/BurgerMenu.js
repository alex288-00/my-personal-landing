import "./BurgerMenu.css"
import FeedBack from "../FeedBack/FeedBack";
function BurgerMenu ({isOpenBurger, onCloseBurger, onOpenForm, isOpenForm, onCloseForm}) {
    return (
        <nav className={`burger-nav ${isOpenBurger ? "burger-nav_open" : ""}`}>
            <button
        className="burger-navigation__close"
        onClick={onCloseBurger}
        type="button"
      >
        &#10006;
      </button>
      <ul className="burger__list">
          {/* <li className="burger__list-item"></li>
          <li className="burger__list-item"></li>
          <li className="burger__list-item"></li> */}
          {/* <li className="footer__list footer__list-title"><p className="footer__autor">Связь со мной:</p></li> */}
          {/* <li className="footer__list"><a className="footer__link" href="https://forms.yandex.ru/u/60d4e1e60f713f12da702779/" target="blank">Связь через форму</a></li>  */
          
          <><button className="header__button" onClick={onOpenForm}>Запрос через форму</button><FeedBack isOpen={isOpenForm} onClose={onCloseForm} /></>}
          <p className="burger__list-subtitle">Мои контакты:</p>
          <li className="footer__list"><a className="burger__link" href="mailto:mail@weblex.su">mail@asmirnov.su</a></li> 
          <li className="footer__list"><a className="burger__link" href="https://github.com/alex288-00" target="blank">Github</a></li>
          <li className="footer__list"><a className="burger__link" href="https://kwork.ru/user/weblex" target="blank">Kwork</a></li>
      </ul>
      {/* <p className="burger__powered">Работает на React</p>  */}
        </nav>
    )
}

export default BurgerMenu;