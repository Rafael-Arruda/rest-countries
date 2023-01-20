import React from "react";
import * as C from './style';

import {FaMoon, FaRegMoon} from 'react-icons/fa';

export default function Header() {
    return(
        <C.Container>
            <C.Logo>
                <h2>Where in the world?</h2>
            </C.Logo>
            <C.ToggleTheme>
                <FaMoon color="#fff" size={14}/>
                <span>Dark Mode</span>
            </C.ToggleTheme>
        </C.Container>
    )
}