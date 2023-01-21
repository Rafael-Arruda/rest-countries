import React, {useState, useEffect} from "react";

import * as C from './style';

import {FaSearch, FaAngleDown} from 'react-icons/fa';

import api from '../../services/api';

import Card from "../../components/Card";

export default function Home() {

    const [loading, setLoading] = useState(true);
    const [visibility, setVisibility] = useState('hidden');
    const [countries, setCountries] = useState([]);
    
    const [pagination, setPagination] = useState(24);

    const handleVisibilityFilter = () => {
        visibility === 'hidden'? setVisibility('visible') : setVisibility('hidden')
    }

    useEffect(() => {
        async function loadCountries() {
            await api.get('/all')
            .then((response) => {
                setCountries(response.data.slice(0, pagination));
                setLoading(false);
            })
            .catch(() => {
                console.log('Error')
            })
        }

        loadCountries();
    }, [])

    async function handleSeeMore() {
        await api.get('/all')
        .then((response) => {
            setCountries(response.data.slice(0, pagination + 24))
            setPagination(pagination + 24)
        })
        .catch(() => {
            console.log('Error')
        })
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
            <C.CountriesArea>
                {countries.map((country, index) => (
                    <Card key={index} country={country}/>
                ))}
            </C.CountriesArea>
            { !loading && <C.Button onClick={handleSeeMore}>Ver Mais</C.Button>}            
        </C.Container>
    )
}