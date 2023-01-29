import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 88vh;
    background: hsl(207, 26%, 17%);
    padding: 40px 50px;

    a {
        color: #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background-color: hsl(209, 23%, 22%);
        width: 110px;
        padding: 8px;
        border-radius: 5px;
        font-size: 0.9em;
        font-weight: 600;
        box-shadow: -1px 1px 5px #111;
    }

    @media screen and (max-width: 600px){
        padding: 40px 30px;
    }
`;

export const Content = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 100px;
    align-items: center;
    color: #fff;

    img {
        width: 400px;
        height: 250px;
        object-fit: cover;
    }

    .box-content {
        margin-top: 22px;
        display: flex;
        gap: 100px;
    }

    .box-content h5 {
        margin-bottom: 8px;
        font-weight: 600;
    }

    .box-content span {
        color: #ddd;
    }

    .box-border-countries {
        margin-top: 40px;
        display: flex;
        align-items: center;
    }

    .box-border-countries h5 {
        font-weight: 600;
        margin-right: 20px;
    }

    .box-border-countries div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .box-border-countries span {
        background: hsl(209, 23%, 22%);
        border-radius: 4px;
        width: 80px;
        padding: 6px;
        font-size: 0.7em;
        font-weight: 600;
        color: #ddd;
        text-align: center;
    }

    @media screen and (max-width: 1050px){
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;

        .box-content {
            flex-direction: column;
            gap: 30px;
        }

        .box-border-countries {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }
    }

    @media screen and (max-width: 600px){
        
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
    }

`;