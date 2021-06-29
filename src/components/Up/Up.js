import "./Up.css"
import {Link} from "react-scroll"

function Up () {
    return (
        <div className="up">
            <Link
            className="up__link"
            to="header"
            spy={true}
            smooth={true}
            duration={700}
            >
            наверх   
            </Link> 
        </div>
    )
}

export default Up;