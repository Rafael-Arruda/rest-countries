import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ol , ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;