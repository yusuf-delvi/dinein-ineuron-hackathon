// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAVgsqueF8ZICSqnZuaAbZoyg3-YM6sLYE',
	authDomain: 'hackathon-ineuron.firebaseapp.com',
	projectId: 'hackathon-ineuron',
	storageBucket: 'hackathon-ineuron.appspot.com',
	messagingSenderId: '260892220848',
	appId: '1:260892220848:web:095cefaa4c56091f7c0a75',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export default app;
export { firestore, auth };
