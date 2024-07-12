import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../context/Auth.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return (
		<>
			<h1>Profile Page</h1>
			{currentUser && <h3>Hola {currentUser.email}</h3>}
			<button onClick={() => navigate('/home')}>Go Home</button>
			<button onClick={event => handleSignOut(event, navigate)}>Logout</button>
		</>
	);
};
const handleSignOut = async (event, navigate) => {
	await signOut(auth);
	navigate('/home');
};
console.log(auth);
export default Profile;
