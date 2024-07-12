import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../context/Auth.context';
import { useContext } from 'react';

const Home = () => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<>
			<h1>Home</h1>
			<div>
				{!currentUser && (
					<button onClick={() => navigate('/login')}>Login</button>
				)}
				{!currentUser && (
					<button onClick={() => navigate('/register')}>Register</button>
				)}
				<button onClick={handleSignOut}>Logout</button>
			</div>
		</>
	);
};
const handleSignOut = async () => {
	await signOut(auth);
};
export default Home;
