import {HOTELS} from '../../../../constants';
import {Item} from '../Item';

export const HotelList = () => {
    return <div className="list">
        {HOTELS.map(({img, title}, index) => <Item key={index} img={img} title={title} />)}
    </div>
}