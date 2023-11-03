import styled from "styled-components";

export const TopBar = styled.div`
    padding: 4px;
    display: flex;
    justify-content: space-between;
`;

export const StyledButton = styled.button`
    border: 0;
    background: none;
    color: ${({ theme }) => theme.text};
    transition: color ${({ theme }) => theme.transition};
`;