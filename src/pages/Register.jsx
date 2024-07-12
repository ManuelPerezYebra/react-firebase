import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { useNavigate } from 'react-router-dom';
const Register = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>Register User</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' id='' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' id='' />
				</div>
				<input type='submit' value='Register' />
			</form>
			<button onClick={() => navigate('/home')}>Go Back</button>
		</>
	);
};

const handleSubmit = async event => {
	event.preventDefault();
	const { email, password } = event.target;
	try {
		await createUserWithEmailAndPassword(auth, email.value, password.value);
	} catch (error) {
		console.log(error);
	}
	console.log(email.value, password.value);
	navigate('/profile');
};

export default Register;
