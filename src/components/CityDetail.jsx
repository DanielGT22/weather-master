import React, { useState, useEffect } from 'react';

const CityDetail = ({ cityName, country, temperature }) => {
    return (
        <div>
            <h1>{cityName}</h1>
            <h2>{country}</h2>
            <p>{temperature ? `${temperature} °C` : 'Loading...'}</p>
           
        </div>
    );
};

export default CityDetail;