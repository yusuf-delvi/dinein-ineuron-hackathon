import { firestore } from '../../../firebase/config';

import {
	collection,
	QueryDocumentSnapshot,
	DocumentData,
	query,
	where,
	limit,
	getDocs,
} from '@firebase/firestore';

export default async function getTables(req, res) {
	const querySnapshot = await getDocs(collection(firestore, 'tables'));

	const tables = [];

	querySnapshot.forEach((doc) => {
		tables.push({ id: doc.id, ...doc.data() });
	});

	res.status(200).json({ tables });
}
