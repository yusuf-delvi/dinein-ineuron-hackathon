import React from 'react';
import { QrReader } from 'react-qr-reader';

const Scanqr = () => {
	return (
		<div>
			<h1>Scan QR</h1>
			<QrReader
				onResult={(result, error) => {
					if (!!result) {
						setData(result?.text);
					}

					if (!!error) {
						console.info(error);
					}
				}}
				style={{ width: '100%' }}
			/>
		</div>
	);
};

export default Scanqr;
