import {
	Routes,
	Route,
} from 'react-router-dom';

import {Home} from '../pages/Home';
import {HotelList} from '../pages/HotelList';
import {Hotel} from '../pages/Hotel';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/hotel-list' element={<HotelList />} />
				<Route path='/hotel/:hotelIndex' element={<Hotel />} />
			</Routes>
		</>
	)
};