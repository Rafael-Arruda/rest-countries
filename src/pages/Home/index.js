import React, {useState} from "react";

import * as C from './style';

import {FaSearch, FaAngleDown} from 'react-icons/fa';

export default function Home() {

    const [visibility, setVisibility] = useState('hidden');

    const handleVisibilityFilter = () => {
        visibility === 'hidden'? setVisibility('visible') : setVisibility('hidden')
    }

    return(
        <C.Container>
            <C.FilterArea>
                <C.Input>
                    <FaSearch color="#ddd" size={15}/>
                    <input type='text' placeholder="Search for a country..."/>
                </C.Input>
                <C.Options visibility={visibility}>
                    <div className="box-options" onClick={handleVisibilityFilter}>
                        <span>Filter by Region</span>
                        <FaAngleDown color="#ddd" size={13}/>
                    </div>
                    <div className="dropdawn-menu">
                        <span>Africa</span>
                        <span>America</span>
                        <span>Asia</span>
                        <span>Europe</span>
                        <span>Oceania</span>
                    </div>
                </C.Options>
            </C.FilterArea>
        </C.Container>
    )
}