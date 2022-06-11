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

export default async function hello(req, res) {
	const { userid } = req.query;

	// add query for userid.
	const activeOrdersSnapshot = await getDocs(
		collection(firestore, 'activeOrders')
	);

	const orders = [];

	activeOrdersSnapshot.forEach((doc) => {
		orders.push({ _id: doc.id, ...doc.data() });
	});

	res.status(200).json({ orders });
}
