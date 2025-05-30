import {
	Routes,
	Route,
} from 'react-router-dom';

import {Home} from '../pages/Home';
import {HotelList} from '../pages/HotelList';
import {Hotel} from '../pages/Hotel';
import {Layout} from '../components/Layout';
import {Modal} from '../components/Modal';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/hotel-list' element={<HotelList />} />
				<Route path='/hotel/:hotelIndex' element={<Layout><Hotel /></Layout>} />
			</Routes>
		</>
	)
};