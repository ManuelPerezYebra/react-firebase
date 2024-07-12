import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

const Profile = () => {
	return (
		<div>
			<button onClick={handleSignOut}>Logout</button>
		</div>
	);
};
const handleSignOut = async () => {
	await signOut(auth);
};

export default Profile;
