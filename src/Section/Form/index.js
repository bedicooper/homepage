import { useState, useEffect } from "react";
import { StyledForm, Filed, SubmitButton } from "./styled";

const Form = () => {
    const [message, setMessage] = useState("your message");
    const [name, setName] = useState("name");
    const [company, setCompany] = useState("affiliation");
    const [dispatch, setDispatch] = useState([]);

    useEffect(() => {
        sessionStorage.setItem("dispatch", JSON.stringify(dispatch));
    }, [dispatch]);

    const onFormSubmit = (event) => {
        event.preventDefault();

        setDispatch([
            ...dispatch,
            {
                name: name,
                company: company,
                message: message,
                time: new Date(),
                id: dispatch.length ? dispatch[dispatch.length - 1].id + 1 : 1,
            }]);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Filed
                value={name}
                onChange={({ target }) => setName(target.value)}
                name="name"
            />
            <Filed
                value={company}
                onChange={({ target }) => setCompany(target.value)}
                name="company"
            />
            <Filed as="textarea"
                value={message}
                onChange={({ target }) => setMessage(target.value)}
                name="message"
            />
            <SubmitButton>reach out</SubmitButton>
            <div>
                {dispatch.length !== 0 && (
                    <>Your {dispatch.length}. message, have been saved to session storage.</>
                )}
            </div>
        </StyledForm>
    )
};

export default Form;