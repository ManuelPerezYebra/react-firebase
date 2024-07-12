import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup
} from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	return (
		<>
			<h1>Login User</h1>
			<form onSubmit={event => handleSubmit(event, navigate)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' id='' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' id='' />
				</div>
				<input type='submit' value='Login' />
			</form>
			<button onClick={() => navigate('/home')}>Go Back</button>
			<button onClick={event => loginWithGoogle(event, navigate)}>
				Login with Google
			</button>
		</>
	);
};

const handleSubmit = async (event, navigate) => {
	event.preventDefault();

	const { email, password } = event.target;
	try {
		await signInWithEmailAndPassword(auth, email.value, password.value);
		navigate('/profile');
	} catch (error) {
		console.log(error);
	}
	console.log(email.value, password.value);
};
const loginWithGoogle = async (event, navigate) => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
		navigate('/profile');
	} catch (error) {
		console.log(error);
	}
};

export default Login;
