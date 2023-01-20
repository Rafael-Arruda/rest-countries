import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 88vh;
    background: hsl(207, 26%, 17%);
    padding: 40px 50px;
`;

export const FilterArea = styled.div`
    width: 100%;  
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.div`
    background-color: hsl(209, 23%, 22%);
    height: 50px;
    width: 40%;
    max-width: 400px;
    min-width: 250px;
    padding: 12px 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 20px;

    input {
        background-color: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-size: 0.9em;
        font-weight: 600;
        text-transform: capitalize;
    }
    input::placeholder {
        color: #ddd;
        text-transform: none;
    }
`;

export const Options = styled.div`
    color: #ddd;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .box-options {
        background-color: hsl(209, 23%, 22%);
        width: 200px;
        height: 50px;
        padding: 15px 18px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.9em;
        font-weight: 600;
        cursor: pointer;
    }
    
    .dropdawn-menu {
        display: flex;
        flex-direction: column;
        gap: 5px;
        background-color: hsl(209, 23%, 22%);
        padding: 15px 18px;
        border-radius: 4px;
        font-size: 0.9em;
        font-weight: 600;
        visibility: ${(props) => props.visibility};
        
        span {
            cursor: pointer;
        }
    }
`;