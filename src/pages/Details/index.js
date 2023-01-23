import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import {FaArrowLeft} from 'react-icons/fa'

import * as C from './style';

export default function Details() {

    const { name } = useParams();

    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(true);

    let languages = []    
    let currencies = []
    let borders = []

    if(country) {
        for(let i in country.languages) {
            languages.push(country.languages[i])
        }
        for(let j in country.currencies) {
            currencies.push(country.currencies[j].name)
        }
        for( let k in country.borders) {
            borders.push(country.borders[k])
        }
    }

    useEffect(() => {
        async function loadCountry() {
            await api.get(`/name/${name}`)
            .then((response) => {
                setCountry(response.data[0])
                setLoading(false);
                console.log(response.data[0])
            })
            .catch(() => {
                console.log('Erro na solitação!')
            })
        }

        loadCountry()
    }, [])

    return(
        <C.Container>
            <Link to='/'>
                <FaArrowLeft size={12} color='#ddd'/>
                Back
            </Link>
            {!loading && 
            <C.Content>
                <img src={`${country.flags.png}`} alt={`${country.name.common} flag`}/>
                <div className="box-information">
                    <h2>{country.name.common}</h2>
                    <div className="box-content">
                        <div>
                            <h5>Native Name: <span>{country.altSpellings[1]}</span></h5>
                            <h5>Population: <span>{country.population}</span></h5>
                            <h5>Region: <span>{country.region}</span></h5>
                            <h5>Sub Region: <span>{country.subregion}</span></h5>
                            <h5>Capital: <span>{country.capital}</span></h5>
                        </div>
                        <div>
                            <h5>Top Level Domain: <span>{country.tld}</span></h5>
                            <h5>Currencies: <span>{currencies.join(', ')}</span></h5>
                            <h5>Languages: <span>{languages.join(', ')}</span></h5>
                        </div>                        
                    </div>
                    <div className="box-border-countries">
                        <h5>Border Countries: </h5>
                        <div>
                            {borders.map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </C.Content>
            }
        </C.Container>
    )
}