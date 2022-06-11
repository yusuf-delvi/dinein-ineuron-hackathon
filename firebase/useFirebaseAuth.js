import { useState, useEffect } from 'react';
import { auth } from './config';
import { firestore } from '../firebase/config';

import { setDoc, getDoc, doc } from '@firebase/firestore';

import {
	signInWithPhoneNumber,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

const formatAuthUser = (user) => ({
	uid: user.uid,
	phone: user.phoneNumber,
});

export default function useFirebaseAuth() {
	const [authUser, setAuthUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const authStateChanged = async (authState) => {
		if (!authState) {
			setLoading(false);
			return;
		}

		const userRef = doc(firestore, 'users', authState.uid);
		const userSnap = await getDoc(userRef);

		if (!userSnap.exists()) {
			await setDoc(userRef, {
				phone: authState.phoneNumber,
				createdAt: new Date(),
			});
		}

		setLoading(true);

		var formattedUser = formatAuthUser(authState);

		setAuthUser(formattedUser);

		setLoading(false);
	};

	const clear = () => {
		setAuthUser(null);
		setLoading(true);
	};

	const signInPhone = async (phoneNumber, verifier) => {
		return signInWithPhoneNumber(auth, `+91${phoneNumber}`, verifier);
	};

	const logOut = async () => {
		await signOut(auth);
		clear();
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, authStateChanged);

		return () => unsubscribe();
	}, []);

	return {
		signInPhone,
		authUser,
		loading,
		logOut,
	};
}
