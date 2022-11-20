import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },)

    return (
        <div>
            <h1>All country list: {countries.length}</h1>
            {
                countries.map(country => <p><Link to={`/country/${country.name.common}`}>{country.name.common}</Link></p> )
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Countries;