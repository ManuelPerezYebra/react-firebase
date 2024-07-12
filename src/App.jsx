import { BrowserRouter, Routes } from 'react-router-dom';
import Profile from './components/profile/Profile';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import AuthProvider from './providers/AuthProvider';
import Router from './router/Router';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
