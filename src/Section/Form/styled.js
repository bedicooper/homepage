import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
`;

export const Filed = styled.input`
    padding: 10px;
    margin: 5px 0px;
    flex-basis: 100%;
    border: none;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.secondary};
    transition: color ${({ theme }) => theme.transition}, background-color ${({ theme }) => theme.transition};
`;

export const SubmitButton = styled.button`
    padding: 10px;
    margin: 5px 0px;
    flex-basis: 100%;
    border: none;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.secondary};
    transition: color ${({ theme }) => theme.transition}, background-color ${({ theme }) => theme.transition};

    &:active{
        background-color: ${({ theme }) => theme.active};
    }
        
`;

