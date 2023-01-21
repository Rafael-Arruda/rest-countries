import styled from "styled-components";

export const Container = styled.div`
    background-color: hsl(209, 23%, 22%);
    width: 250px;
    border-radius: 4px;
    overflow: hidden;

    img {
        width: 100%;
        height: 140px;
        object-fit: cover;
    }

    .country-information {
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 20px 0px 35px 20px;

        h3 {
            margin-bottom: 10px;
        }

        h4 {
            font-size: 0.95em;
            font-weight: 600;
        }

        span {
            font-size: 0.9em;
            font-weight: 600;
            color: #ddd;
        }
    }
`;