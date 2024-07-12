import { Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const Router = () => {
	return (
		<Routes>
			<Route path='/home' element={<Home />} />
			<Route path='/register' element={<Register />} />

			<Route path='/login' element={<Login />} />

			<Route path='/profile' element={<Profile />} />
		</Routes>
	);
};

export default Router;
