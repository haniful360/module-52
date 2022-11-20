import React from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const {countryName} = useParams();
    return (
        <div>
            <h1>single country list:{countryName}</h1>
        </div>
    );
};

export default Country;