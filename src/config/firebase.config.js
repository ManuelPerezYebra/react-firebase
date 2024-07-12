import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDc3X0gWueRDeqUeI4Vcva6c7ihMrXs7dc',
	authDomain: 'users-firebase-93eb4.firebaseapp.com',
	projectId: 'users-firebase-93eb4',
	storageBucket: 'users-firebase-93eb4.appspot.com',
	messagingSenderId: '157561376965',
	appId: '1:157561376965:web:0840f44a31a3efca26e0ac'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
