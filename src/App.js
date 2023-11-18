import React from 'react';
import './App.css';
import Star from './components/Star';
import EarthComponent from './components/Earth'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapComponent from './components/WeatherMap';
import EuropeComponent from './components/Europe';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Star />
            
            <Routes>
                <Route path="/" element={<EarthComponent />}/>
                <Route path="/open-weather-map" element={<MapComponent />}/>
                <Route path="/europe" element={<EuropeComponent />}/>
                
                
            </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
