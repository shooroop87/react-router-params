import React from 'react';
import {useNavigate} from 'react-router-dom';

import {HotelList} from './components/HotelList';
import {CountryList} from './components/CountryList';
import {Title} from './components/Title';

export const List = () => {
    return (
        <div className="container small">
            <div className="tabs">
                <button className="tab">Отели</button>
                <button className="tab">Страны</button>
            </div>
            <div>
                <Title>Отели:</Title>
                <HotelList />
                <Title>Страны:</Title>
                <CountryList />
            </div>
        </div>
    )
};