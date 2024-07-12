import { useState, useEffect } from 'react';
import { AuthContext } from '../context/Auth.context';
import { auth } from '../config/firebase.config';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log('user logged', user);
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
				console.log('Not User');
			}
			return () => unsuscribe();
		});
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
