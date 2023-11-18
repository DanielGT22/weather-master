import React from 'react';
import Africa from '../assets/Africa.png';
import Europe from '../assets/Europe.png';
import NA from '../assets/NA.png';
import CA from '../assets/CA.png';
import SA from '../assets/SA.png';
import Greenland from '../assets/Greenland.png';
import Asia from '../assets/Asia.png';
import Oceania from '../assets/Oceania.png';
import "../WeatherMap.css"
import { useNavigate } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const MapComponent = () => {
    const navigate = useNavigate();

    const redirectToCont = (path) => {
        navigate(path);
    };

    const imageStyle = {
        position: 'absolute',
        width: '250px', // Make the image responsive
        height: '200px', // Make the image responsive 
    };

    return (
        <>
            <h1 className='mt-5'>Sto avendo un po' di problemi con i PNG</h1>
            <h3>Funziona solo l'area verde x adesso</h3>
            <div>
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
        </>
    );
};

export default MapComponent;
