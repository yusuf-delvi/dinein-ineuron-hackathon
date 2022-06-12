import React from 'react';
import { QrReader } from 'react-qr-reader';
import { Box } from '@mui/material'
const Scanqr = () => {
	return (
		<div>
			<Box sx={{
				textAlign:'center'
			}}>
			<h1 >Scan QR</h1>
			<p>Scan to Place Order</p>
			</Box>
			
			<QrReader
				
				constraints={{facingMode: "environment"}}
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
