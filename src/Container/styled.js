import styled from "styled-components";

export const Container = styled.main`
    background-color: ${({ theme }) => theme.primary};
    box-shadow: 6px 6px 16px -4px ${({ theme }) => theme.shadow};
    margin: 32px 0px;
    min-width: 280px;
    transition: background-color ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};
`;
