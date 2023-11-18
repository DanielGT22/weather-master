import React, { useState } from 'react';
import earthImage from '../assets/Earth.png';
import '../earth.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EarthComponent = () => {
    const [zoomed, setZoomed] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    
    const handleClick = () => {
        console.log('Earth was clicked!');
        setZoomed(!zoomed);
        setDisplayText(!displayText); 
        
        
    };

    return (
        <div className="earth-container">
            <img
                src={earthImage}
                alt="Earth"
                className={`earth-image ${zoomed ? 'zoom-in' : ''}`}
                onClick={handleClick}
            />
            {displayText && (
                <div className="text-container">
                    <Link to="/" className="text-decoration-none">
                        <h1 className="display-block  position-absolute" style={{ top: '30%', left: '12%', color: 'white', fontSize: "3vw"}}>
                            The Universe
                        </h1>
                    </Link>
                    <Link to="/open-weather-map" className="text-decoration-none">
                        <h2 className="display-block  position-absolute " style={{ top: '40%', left: '9%', color: 'white' , fontSize: "1.5vw" }}>
                            The Weather App
                            <br />Premi qua
                        </h2>
                    </Link>
                    <Link to="/open-weather-map" className="text-decoration-none">
                        <h4 className="display-block  position-absolute " style={{ top: '80%', left: '9%', color: 'white' , fontSize: "0.3vw", fontWeight: "300" }}>
                            Le stelle "spawnano" ottengo l'animazione e il shadow randomicamente randomicamente. <br />
                            Sono da aggiungere ancora tante animazioin, ma nella prossima pagina ci sono degli problemi con gli png. <br />
                            Essendo degli png, comunque il "spazio vuoto" viene presso come conenuto del imagine.
                            <br />
                            quindi c'erano delle complicazioni con quello.
                            
                        </h4>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default EarthComponent;
