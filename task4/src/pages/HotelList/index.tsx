import React from 'react';
import {Link} from 'react-router-dom';

import {Layout} from '../../components/Layout';

import {HOTELS} from '../../constants';

export const HotelList = () => {
    return (
        <Layout>
            <h1>Отели:</h1>
            <div className="list">
                {
                    HOTELS.map(({img, title}, index) => <Link to={`/hotel/${index}`}>
                        <figure>
                            <img width={200} src={img} alt="Elephant at sunset" />
                            <figcaption>{title}</figcaption>
                        </figure>
                    </Link>)
                }
            </div>
        </Layout>
    )
};