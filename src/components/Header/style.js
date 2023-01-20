import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 12vh;
    background-color: hsl(209, 23%, 22%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
`;

export const Logo = styled.div`
    color: #fff;
`;

export const ToggleTheme = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
        font-weight: 600;
        font-size: 1em;
    }
`;
