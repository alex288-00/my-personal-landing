import "./FeedBack.css"
import mail from "../../utils/mail.php"
// import gangga from "../../images/gangga.ru.png"
// import elton from "../../images/elton.ru.png"
// import {Carousel} from "react-bootstrap"

function FeedBack ({isOpen, onClose}) {
    return (
        
        <section id="feedbacks" className= {`feedback ${isOpen ? "feedback_open" : ""}`}>
            {/* <h2 className="portfolio__title">Обратная связь</h2> */}
            
            <div className="feedback__form">
            
            <form className="form" action={mail} method="post">
    <label className="form__label" for="fio">Ваше имя <span class="form__span">*</span></label>
    <input className="form__input" id="fio" type="text" name="fio" placeholder="Имя" required/>
    <label className="form__label" for="phone">Почта <span class="form__span">*</span></label>
    <input className="form__input" id="phone" type="email" name="email" placeholder="Email" required />
    {/* <label className="form__label" for="year">Год выпуска <span class="form__span">*</span></label> */}
    {/* <input className="form__input" id="year"  type="number" name="year" placeholder="Год выпуска автомобиля" required /> */}
    <label className="form__label" for="massage">Какую задачу нужно решить? <span class="form__span">*</span></label>
    <textarea className="form__input form__input_text" id="massage" rows="10" cols="45" name="massage" placeholder="Напишите подробно что нужно сделать" required></textarea>
    {/* <label className="form__label" for="details">Номера деталей <span class="form__span form__span_details">(не обязательно)</span></label> */}
    {/* <textarea className="form__input form__input_text" id="details" rows="10" cols="45" name="details" placeholder="Укажите номера деталей, если имеются"></textarea> */}
    <button className="form__button" type="submit">Отправить</button>
    <span className="form__span form__span_info">* - обязательно для заполнения</span>
    
  </form>
            {/* <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script><iframe src="https://forms.yandex.ru/u/60d4e1e60f713f12da702779/?iframe=1" name="ya-form-60d4e1e60f713f12da702779" title="Обратная связь" className="form"></iframe> */}
            {/* <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script><iframe className="forms" src="https://forms.yandex.ru/u/607eb9f937c2a1940ebc87c5/?iframe=1" name="ya-form-607eb9f937c2a1940ebc87c5" title="Обратная связь" width="500" height="410"></iframe> */}
            <button className="feedback__close" onClick={onClose}>&#10008;</button>
            
            </div>
            
        </section>
        
    )
}

export default FeedBack;