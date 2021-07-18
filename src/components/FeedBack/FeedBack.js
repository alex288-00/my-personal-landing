import "./FeedBack.css"

function FeedBack () {
    return (
        <section id="feedbacks" className="feedback">
            <h2 className="portfolio__title">Обратная связь</h2>
            <div className="feedback__form">
            <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script><iframe src="https://forms.yandex.ru/u/60d4e1e60f713f12da702779/?iframe=1" name="ya-form-60d4e1e60f713f12da702779" title="Обратная связь" className="form"></iframe>
            {/* <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script><iframe className="forms" src="https://forms.yandex.ru/u/607eb9f937c2a1940ebc87c5/?iframe=1" name="ya-form-607eb9f937c2a1940ebc87c5" title="Обратная связь" width="500" height="410"></iframe> */}
            </div>
        </section>
    )
}

export default FeedBack;