import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 88vh;
    background: hsl(207, 26%, 17%);
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px){
        padding: 40px 30px;
    }
`;

export const FilterArea = styled.div`
    width: 100%;  
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px){
        flex-direction: column;
    }
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

    @media screen and (max-width: 600px){
        width: 100%;
        max-width: none;
    }

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
    position: relative;

    @media screen and (max-width: 600px){
        margin-top: 30px;
    }

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
        width: 200px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        background-color: hsl(209, 23%, 22%);
        padding: 15px 18px;
        border-radius: 4px;
        font-size: 0.9em;
        position: absolute;
        top: 54px;
        visibility: ${(props) => props.visibility};
        
        button {
            background: transparent;
            border: none;
            text-align: left;
            color: #ddd;
            font-weight: 600;
        }
    }
`;

export const CountriesArea = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 65px;

    @media screen and (max-width: 1000px){
        justify-content: space-evenly;
    }
`;

export const Button = styled.button`
    margin-top: 40px;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1em;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 4px;
    transition: 0.3s all;

    :hover {
        background-color: hsl(209, 23%, 22%);
    }
`;