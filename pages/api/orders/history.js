// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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

export default async function getOldOrders(req, res) {
	const { userId } = req.query;

	// add query for userid.
	let activeOrdersSnapshot = await getDocs(
		collection(firestore, 'activeOrders')
	);

	if (userId) {
		activeOrdersSnapshot = await getDocs(
			collection(firestore, 'activeOrders').where('userId', '==', userId)
		);
	}

	const orders = [];

	activeOrdersSnapshot.forEach((doc) => {
		orders.push({ _id: doc.id, ...doc.data() });
	});

	return res.status(200).json({ orders });
}
