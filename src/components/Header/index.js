import React from "react";
import {Link} from 'react-router-dom';
import * as C from './style';

import {FaMoon, FaRegMoon} from 'react-icons/fa';

export default function Header() {
    return(
        <C.Container>
            <C.Logo>
                <Link to='/'>
                    <h2>Where in the world?</h2>
                </Link>
            </C.Logo>
            <C.ToggleTheme>
                <FaMoon color="#fff" size={12}/>
                <span>Dark Mode</span>
            </C.ToggleTheme>
        </C.Container>
    )
}