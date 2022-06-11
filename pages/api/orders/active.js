// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from '../../../firebase/config';

import { collection, addDoc, updateDoc, getDocs } from '@firebase/firestore';

export default async function getActiveOrders(req, res) {
	const { userId, orderId } = req.query;

	switch (req.method) {
		case 'GET': {
			let activeOrdersSnapshot = await getDocs(
				collection(firestore, 'activeOrders')
			);

			if (userId) {
				activeOrdersSnapshot = await getDocs(
					collection(firestore, 'activeOrders')
				).where('userId', '==', userId);
			}

			const orders = [];

			activeOrdersSnapshot.forEach((doc) => {
				orders.push({ _id: doc.id, ...doc.data() });
			});

			return res.status(200).json({ orders });
		}
		// create new active order
		case 'POST': {
			const body = req.body;

			const data = {
				items: body.items || [],
				tableId: body.tableId,
				userId: body.userId,
				totalPrice: body.totalPrice,
				status: 'PLACED',
				createdAt: Date.now(),
			};

			await addDoc(collection(firestore, 'activeOrders'), data);

			return res.status(201).json({ message: 'Order created' });
		}
		// Update active order
		case 'PUT': {
			if (!orderId) {
				return res.status(400).json({ message: 'Order id is required' });
			}

			await updateDoc(
				collection(firestore, `activeOrders/${orderId}`),
				req.body
			);

			return res.status(200).json({ message: 'Order updated' });
		}
	}
}
