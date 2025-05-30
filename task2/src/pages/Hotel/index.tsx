import {useParams, redirect} from 'react-router-dom';

import {Layout} from '../../components/Layout';

import {HOTELS} from '../../constants';

export const Hotel = () => {
    const {hotelIndex} = useParams<{hotelIndex: string}>();
    if (!hotelIndex) {
        redirect('hotel-list');
        return null;
    }
    const hotel = HOTELS[Number(hotelIndex)];

    return <Layout>
        <h1>{hotel.title}</h1>
        <figure>
            <img width={200} src={hotel.img} alt="Elephant at sunset" />
            <figcaption>{hotel.description}</figcaption>
        </figure>
    </Layout>
};