import "./style.css";

const Section = ({ id, title, body, additionalContent }) => (
    <section id={id} className="section js-section">
        <h2 className="section__header">{title}</h2>
        {body}
        {additionalContent}
    </section>
);

export default Section;


