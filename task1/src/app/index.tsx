import {
	Routes,
	Route,
} from 'react-router-dom';

import {Home} from '../pages/Home';
import {HotelList} from '../pages/HotelList';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/hotel-list' element={<HotelList />} />
			</Routes>
		</>
	)
};