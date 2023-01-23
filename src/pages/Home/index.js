import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

import * as C from './style';

import {FaSearch, FaAngleDown} from 'react-icons/fa';

import api from '../../services/api';

import Card from "../../components/Card";

export default function Home() {

    const [loading, setLoading] = useState(true);
    const [visibility, setVisibility] = useState('hidden');
    
    const [countries, setCountries] = useState([]);
    const [filterCountries, setFilterCountries] = useState([]);

    const [filterInput, setFilterInput] = useState('');
    const [filterRegion, setFilterRegion] = useState('Filter by Region');

    const [pagination, setPagination] = useState(24);

    useEffect(() => {
        async function loadCountries() {
            await api.get('/all')
            .then((response) => {
                setCountries(response.data);
                setFilterCountries(response.data.slice(0, pagination));
                setLoading(false);
            })
            .catch(() => {
                console.log('Error')
            })
        }
        
        loadCountries();
    }, [])
    
    function handleVisibilityFilter() {
        visibility === 'hidden'? setVisibility('visible') : setVisibility('hidden')
    }

    async function handleSeeMore() {
        await api.get('/all')
        .then((response) => {
            setFilterCountries(response.data.slice(0, pagination + 24))
            setPagination(pagination + 24)
        })
        .catch(() => {
            console.log('Error')
        })
    }

    function handleFilterCountries(e) {
        const input = e.target.value.toLowerCase();
        setFilterInput(e.target.value);
        
        const  filterList = 
        countries.filter((country) => country.name.common.toLowerCase().includes(input))

        setFilterCountries(filterList);
    }

    function handleFilterRegion(e) {
        const input = e.target.value.toLowerCase();
        input === '' ? setFilterRegion('Filter By Region') : setFilterRegion(e.target.value)

        const filterList =
        countries.filter((country) => country.region.toLowerCase().includes(input));

        setFilterCountries(filterList);
    }

    return(
        <C.Container>
            <C.FilterArea>
                <C.Input>
                    <FaSearch color="#ddd" size={15}/>
                    <input 
                    type='text' 
                    value={filterInput}
                    onChange={handleFilterCountries}
                    placeholder="Search for a country..."
                    />
                </C.Input>
                <C.Options visibility={visibility}>
                    <div className="box-options" onClick={handleVisibilityFilter}>
                        <span>{filterRegion}</span>
                        <FaAngleDown color="#ddd" size={13}/>
                    </div>
                    <div className="dropdawn-menu">
                        <button onClick={handleFilterRegion} value=''>All</button>
                        <button onClick={handleFilterRegion} value='Africa'>Africa</button>
                        <button onClick={handleFilterRegion} value='America'>America</button>
                        <button onClick={handleFilterRegion} value='Asia'>Asia</button>
                        <button onClick={handleFilterRegion} value='Europe'>Europe</button>
                        <button onClick={handleFilterRegion} value='Oceania'>Oceania</button>
                    </div>
                </C.Options>
            </C.FilterArea>
            <C.CountriesArea>
                {filterCountries.map((country, index) => (
                    <Link key={index} to={`/details/${country.name.common}`}>
                        <Card country={country}/>
                    </Link>
                ))}
            </C.CountriesArea>
            { !loading && !filterInput && <C.Button onClick={handleSeeMore}>Ver Mais</C.Button>}            
        </C.Container>
    )
}