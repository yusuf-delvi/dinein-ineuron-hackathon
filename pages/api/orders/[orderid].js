// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from '../../../firebase/config';

import {
	collection,
	QueryDocumentSnapshot,
	DocumentData,
	query,
	where,
	limit,
	setDoc,
	set,
	getDoc,
	getDocs,
} from '@firebase/firestore';

export default async function orderById(req, res) {
	const { orderid } = req.params;

	const orderRef = doc(firestore, `activeOrders/${orderid}`);
	const orderSnap = await getDoc(orderRef);

	if (!orderSnap.exists()) {
		return res.status(404).json({ error: 'Order not found' });
	}

	const foundOrder = orderSnap.data();

	switch (req.mehtod) {
		case 'POST':
			await set(orderRef, req.body);

			return res.status(201).json({
				message: 'Order created',
			});
		case 'PUT':
			await updateDoc(orderRef, req.body);

			return res.status(200).json({
				message: 'Order updated',
			});
		default:
			return res.status(200).json({
				order: foundOrder,
			});
	}
}
