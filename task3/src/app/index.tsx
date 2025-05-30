import {
	Routes,
	Route,
} from 'react-router-dom';

import {List} from '../pages/List';

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<List />} />
		</Routes>
	)
};