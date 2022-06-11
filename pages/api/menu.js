import { firestore } from '../../firebase/config';

import {
	collection,
	QueryDocumentSnapshot,
	DocumentData,
	query,
	where,
	limit,
	addDoc,
	getDocs,
} from '@firebase/firestore';

export default async function getMenu(req, res) {
	const querySnapshot = await getDocs(collection(firestore, 'dishes'));
	const dishes = [];

	querySnapshot.forEach((doc) => {
		dishes.push({ id: doc.id, ...doc.data() });
	});

	res.status(200).json({ dishes });
}
