import "./BurgerMenu.css"

function BurgerMenu ({isOpen, onClose}) {
    return (
        <nav className={`burger-nav ${isOpen ? "burger-nav_open" : ""}`}>
            <button
        className="burger-navigation__close"
        onClick={onClose}
        type="button"
      >
        &#10006;
      </button>
      <ul className="burger__list">
          {/* <li className="burger__list-item"></li>
          <li className="burger__list-item"></li>
          <li className="burger__list-item"></li> */}
          <li className="footer__list"><p className="footer__autor">Связь со мной</p></li>
          <li className="footer__list"><a className="footer__link" href="mailto:mail@weblex.su">mail@asmirnov.su</a></li> 
          <li className="footer__list"><a className="footer__link" href="https://github.com/alex288-00" target="blank">Github</a></li>
          <li className="footer__list"><a className="footer__link" href="https://kwork.ru/user/weblex" target="blank">Kwork</a></li>
      </ul>
      {/* <p className="burger__powered">Работает на React</p>  */}
        </nav>
    )
}

export default BurgerMenu;