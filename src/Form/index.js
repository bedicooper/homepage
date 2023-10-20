import "./style.css";

const Form = () => (
    <form className="form">
        <div className="form__container">
            <input className="form__field" name="name" placeholder="name" />
            <input className="form__field" name="company" placeholder="affiliation" />
            <textarea className="form__field" name="message" placeholder="your message"></textarea>
            <button className="form__button">reach out</button>
        </div>
    </form>
);

export default Form;