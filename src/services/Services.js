import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import ListIcon from '@mui/icons-material/List';

import Button from '@mui/material/Button';
function Services() {
    return (
        <div>Services
            <div>

                <Link to="baza_bsp">
                    <Button className='home_button'><ListIcon />Biblioteka Dronów!</Button>
                </Link> <br />
                <Link to="map">
                    <button className='home_button'>Mapa</button>
                </Link> <br />
                <Link to="weather">
                    <button className='home_button'>poka poka ! <br /> pogode </button>
                </Link>
            </div>
        </div>
    )
}

export default Services