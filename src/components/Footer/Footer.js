import "./Footer.css"
import logoReact from "../../logo.svg"
import {Link} from 'react-router-dom'

function Footer () {
    return (
        <footer className="footer">
            <nav className="footer__navigation">
                <ul className="footer__list">
                <li className="footer__list"><p className="footer__autor">Алексей Смирнов</p></li>
                <li className="footer__list"><Link className="footer__link" to="/">asmirnov.su</Link></li> 
                </ul>
                <ul className="footer__list">
                    <li className="footer__list"><p className="footer__autor">Связь со мной</p></li>
                    <li className="footer__list"><a className="footer__link" href="mailto:mail@weblex.su">mail@asmirnov.su</a></li> 
                    <li className="footer__list"><a className="footer__link" href="https://github.com/alex288-00" target="blank">Github</a></li>
                    <li className="footer__list"><a className="footer__link" href="https://kwork.ru/user/weblex" target="blank">Kwork</a></li> 

                </ul>
                <img className="header__logo-react" src={logoReact} alt="React"></img>
            </nav>
        </footer>
    )
}

export default Footer;