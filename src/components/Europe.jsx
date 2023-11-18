import React, { useState, useEffect } from 'react';
import EuropeImage from '../assets/NewEurope.png';
import '../cont.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Sun,Cloud, CloudRain,Snow } from 'react-bootstrap-icons';


import Germany from '../assets/Flags/flag-of-Germany.png';
import Italy from '../assets/Flags/flag-of-Italy.png';
import Serbia from '../assets/Flags/flag-of-Serbia.png';
import France from '../assets/Flags/flag-of-France.png';
import Austria from '../assets/Flags/flag-of-Austria.png';
import Trieste from '../assets/Flags/Trieste.png';
import Albania from '../assets/Flags/flag-of-Albania.png';
import Andorra from '../assets/Flags/flag-of-Andorra.png';
import Belgium from '../assets/Flags/flag-of-Belgium.png';
import Bosnia from '../assets/Flags/flag-of-Bosnia-Herzegovina.png';
import Bulgaria from '../assets/Flags/flag-of-Bulgaria.png';
import Croatia from '../assets/Flags/flag-of-Croatia.png';
import Czech from '../assets/Flags/flag-of-Czech-Republic.png';
import Denmark from '../assets/Flags/flag-of-Denmark.png';
import Estonia from '../assets/Flags/flag-of-Estonia.png';
import Finland from '../assets/Flags/flag-of-Finland.png';
import Greece from '../assets/Flags/flag-of-Greece.png';
import Hungary from '../assets/Flags/flag-of-Hungary.png';
import Iceland from '../assets/Flags/flag-of-Iceland.png';
import Ireland from '../assets/Flags/flag-of-Ireland.png';
import Latvia from '../assets/Flags/flag-of-Latvia.png';
import Liechtenstein from '../assets/Flags/flag-of-Liechtenstein.png';
import Lithuania from '../assets/Flags/flag-of-Lithuania.png';
import Luxembourg from '../assets/Flags/flag-of-Luxembourg.png';
import Malta from '../assets/Flags/flag-of-Malta.png';
import Moldova from '../assets/Flags/flag-of-Moldova.png';
import Monaco from '../assets/Flags/flag-of-Monaco.png';
import Montenegro from '../assets/Flags/flag-of-Montenegro.png';
import Netherlands from '../assets/Flags/flag-of-Netherlands.png';
import Macedonia from '../assets/Flags/flag-of-North-Macedonia.png';
import Norway from '../assets/Flags/flag-of-Norway.png';
import Poland from '../assets/Flags/flag-of-Poland.png';
import Portugal from '../assets/Flags/flag-of-Portugal.png';
import Romania from '../assets/Flags/flag-of-Romania.png';
import Russia from '../assets/Flags/flag-of-Russia.png';
import Marino from '../assets/Flags/flag-of-San-Marino.png';
import Slovakia from '../assets/Flags/flag-of-Slovakia.png';
import Slovenia from '../assets/Flags/flag-of-Slovenia.png';
import Spain from '../assets/Flags/flag-of-Spain.png';
import Sweden from '../assets/Flags/flag-of-Sweden.png';
import Switzerland from '../assets/Flags/flag-of-Switzerland.png';
import Ukraine from '../assets/Flags/flag-of-Ukraine.png';
import United from '../assets/Flags/flag-of-United-Kingdom.png';










const EuropeComponent = () => {
    const [zoomed, setZoomed] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    const navigate = useNavigate();

    const cities = [
        { name: 'Rome', country: 'IT', latitude: 41.902782, longitude: 12.496365 },
        { name: 'Berlin', country: 'DE', latitude: 52.520008, longitude: 13.404954 },
        { name: 'Belgrade', country: 'RS', latitude: 44.786568, longitude: 20.448921 },
        { name: 'Trieste', country: 'IT', latitude: 45.653599, longitude: 13.778520 },
        { name: 'Paris', country: 'FR', latitude: 48.856613, longitude: 2.352222 },
        { name: 'Madrid', country: 'ES', latitude: 40.416775, longitude: -3.703790 },
        { name: 'Vienna', country: 'AT', latitude: 48.208176, longitude: 16.373819 },
        { name: 'Athens', country: 'GR', latitude: 37.983810, longitude: 23.727539 },
        { name: 'Prague', country: 'CZ', latitude: 50.075539, longitude: 14.437800 },
        { name: 'Oslo', country: 'NO', latitude: 59.913868, longitude: 10.752245 },
        { name: 'Copenhagen', country: 'DK', latitude: 55.676098, longitude: 12.568337 },
        { name: 'Stockholm', country: 'SE', latitude: 59.329323, longitude: 18.068581 },
        { name: 'Helsinki', country: 'FI', latitude: 60.169856, longitude: 24.938379 },
        { name: 'Dublin', country: 'IE', latitude: 53.349805, longitude: -6.260310 },
        { name: 'Brussels', country: 'BE', latitude: 50.850346, longitude: 4.351721 },
        { name: 'Zurich', country: 'CH', latitude: 47.376888, longitude: 8.541694 },
        { name: 'Lisbon', country: 'PT', latitude: 38.722252, longitude: -9.139337 },
        { name: 'Amsterdam', country: 'NL', latitude: 52.367573, longitude: 4.904138 },
        { name: 'Budapest', country: 'HU', latitude: 47.497913, longitude: 19.040236 },
        { name: 'Warsaw', country: 'PL', latitude: 52.229676, longitude: 21.012229 },
        { name: 'Bucharest', country: 'RO', latitude: 44.426765, longitude: 26.102537 }
    ];
    

    const [temperatures, setTemperatures] = useState({ });
    const [weatherDescriptions, setWeatherDescriptions] = useState({});

    useEffect(() => {
        const apiKey = '8063ff87bc0adc7f18e8775f9d62b309';

        const fetchData = async () => {
            const temperatureData = {};
            const weatherData = {}

            for (const city of cities) {
                try {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=${apiKey}&units=metric`
                    );
                    const data = await response.json();
                    temperatureData[city.name] = data.main.temp;
                    weatherData[city.name] = data.weather[0].description;
                    
                } catch (error) {
                    console.error(`Error fetching data for ${city.name}: ${error}`);
                }
            }
           
            setTemperatures(temperatureData);
            console.log(temperatureData);
            setWeatherDescriptions(weatherData);
            console.log(weatherData);
        };

        fetchData();
    }, []);

  console.log(temperatures);

    return (
        <>
            <div className="europe-container container-fluid h-100">
                <Row className="capital d-flex m-5 p-5 g-5 justify-content-start flex-wrap">
                    {cities.map((city, index) => {
                        

                        let cityImage = EuropeImage; 

                        if (city.country === 'DE') {
                            cityImage = Germany; 
                        }  else if (city.name === 'Trieste') {
                            cityImage = Trieste;
                        }  
                        else if (city.country === 'IT') {
                            cityImage = Italy;
                        } else if (city.country === 'RS') {
                            cityImage = Serbia;
                        } 
                        else if (city.country === 'FR') {
                            cityImage = France;
                        } 
                        else if (city.country === 'AT') {
                            cityImage = Austria;
                        }   else if (city.country === 'BE') {
                            cityImage = Belgium;
                        }    else if (city.country === 'BG') {
                            cityImage = Bulgaria;
                        }   else if (city.country === 'HR') {
                            cityImage = Croatia;
                        }   else if (city.country === 'CZ') {
                            cityImage = Czech;
                        }   else if (city.country === 'DK') {
                            cityImage = Denmark;
                        }   else if (city.country === 'EE') {
                            cityImage = Estonia;
                        }   else if (city.country === 'FI') {
                            cityImage = Finland;
                        }   else if (city.country === 'GR') {
                            cityImage = Greece;
                        }   else if (city.country === 'HU') {
                            cityImage = Hungary;
                        }   else if (city.country === 'LV') {
                            cityImage = Latvia;
                        }   else if (city.country === 'LT') {
                            cityImage = Lithuania;
                        }   else if (city.country === 'LU') {
                            cityImage = Luxembourg;
                        }   else if (city.country === 'MT') {
                            cityImage = Malta;
                        }   else if (city.country === 'NL') {
                            cityImage = Netherlands;
                        }   else if (city.country === 'PL') {
                            cityImage = Poland;
                        }   else if (city.country === 'PT') {
                            cityImage = Portugal;
                        }   else if (city.country === 'RO') {
                            cityImage = Romania;
                        }   else if (city.country === 'SK') {
                            cityImage = Slovakia;
                        }   else if (city.country === 'SL') {
                            cityImage = Slovenia;
                        }   else if (city.country === 'ES') {
                            cityImage = Spain;
                        }   else if (city.country === 'SE') {
                            cityImage = Sweden;
                        }   else if (city.country === 'NO') {
                            cityImage = Norway;
                        }   else if (city.country === 'CH') {
                            cityImage = Switzerland;
                        }   else if (city.country === 'IE') {
                            cityImage = Ireland;
                        } 

                        return (
                            <Col key={index} sm={6} md={4} lg={12}>
                                <Link to={`/${city.name}`} className='text-decoration-none'>
                                    <Card className='Card d-flex flex-row justify-content-around align-items-center ' style={{background: "rgb(2,0,36)",
                                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(196,26,195,1) 68%, rgba(0,212,255,1) 100%)"}}>
                                       <div className='ms-5'>

                                       {weatherDescriptions[city.name] === "clear sky" ? (
                                                <Sun style={{ fontSize: '7vw' }} className='sun mt-3' />
                                            ) : weatherDescriptions[city.name] === "overcast clouds" || "scattered clouds" || "few clouds" || "broken clouds" ? (
                                                <Cloud style={{ fontSize: '7vw' }} className='cloud mt-3' />
                                            ) :  weatherDescriptions[city.name] === "light intensity shower rain"  ? (
                                                <CloudRain style={{ fontSize: '7vw' }} className='cloud mt-3' />
                                            )  : null}

                                            <p className="text-light fs-1 fw-bold">
                                                {weatherDescriptions[city.name] ? weatherDescriptions[city.name] : 'Loading...'}
                                            </p>
                                          </div>




                                       
                                        <Card.Body className='d-flex'>
                                            <div className="popup d-flex align-items-center flex-grow-1 w-100 my-5 justify-content-around">
                                                <div className='text-white'>
                                                    <h1>{city.name}</h1>
                                                    <div className='d-flex justify-content-around align-items-center '> 
                                                    <Card.Img
                                            variant="top"
                                            src={cityImage}
                                            style={{ width: '25px' }}
                                        />
                                                    <h2 className=''>{city.country}</h2>
                                                    </div>
                                                </div>
                                                <p className="text-light fs-1 fw-bold">
                                                {temperatures[city.name] ? `${Math.floor(temperatures[city.name])} °C` : 'Loading...'}
                                                    </p>
                                                    
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </>
    );
};

export default EuropeComponent;