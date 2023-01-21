import React, { useEffect } from 'react';

import * as C from './style';

export default function Card({country}) {

    useEffect(() => {
        console.log(country)
    }, [])

    return(
        <C.Container>
            <img src={country.flags.png} alt='country flag'/>
            <div className='country-information'>
                <h3>{country.name.common}</h3>
                <h4>Population: <span>{country.population}</span></h4>
                <h4>Region: <span>{country.region}</span></h4>
                <h4>Capital: <span>{country.capital}</span></h4>
            </div>
        </C.Container>
    )
}