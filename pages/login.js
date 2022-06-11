import React, { useState } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/config';

const Login = () => {
	const [mynumber, setnumber] = useState('');
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');

	const signin = () => {
		if (mynumber === '' || mynumber.length < 10) return;

		let verify = new RecaptchaVerifier(
			'recaptcha-container',
			{
				size: 'normal',
				callback: (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
					// ...
				},
				'expired-callback': () => {
					// Response expired. Ask user to solve reCAPTCHA again.
					// ...
				},
			},
			auth
		);

		signInWithPhoneNumber(auth, mynumber, verify)
			.then((result) => {
				setfinal(result);
				alert('code sent');
				setshow(true);
			})
			.catch((err) => {
				alert(err);
				window.location.reload();
			});
	};

	const ValidateOtp = () => {
		if (otp === null || final === null) return;
		final
			.confirm(otp)
			.then((result) => {
				// success
				console.log('otp verified');
			})
			.catch((err) => {
				alert('Wrong code');
			});
	};

	return (
		<div style={{ marginTop: '200px' }}>
			<center>
				<div style={{ display: !show ? 'block' : 'none' }}>
					<input
						value={mynumber}
						onChange={(e) => {
							setnumber(e.target.value);
						}}
						placeholder='phone number'
					/>
					<br />
					<br />
					<div id='recaptcha-container'></div>
					<button onClick={signin}>Send OTP</button>
				</div>
				<div style={{ display: show ? 'block' : 'none' }}>
					<input
						type='text'
						placeholder={'Enter your OTP'}
						onChange={(e) => {
							setotp(e.target.value);
						}}
					></input>
					<br />
					<br />
					<button onClick={ValidateOtp}>Verify</button>
				</div>
			</center>
		</div>
		// <div
		// 	sx={{
		// 		height: '100%',
		// 		display: 'flex',
		// 		alignItems: 'center',
		// 		justifyContent: 'center',
		// 	}}
		// >
		// 	<Card
		// 		sx={{
		// 			margin: '25px',
		// 			width: '400px',
		// 			height: '300px',
		// 			padding: '25px',
		// 			display: 'flex',
		// 			justifyContent: 'center',
		// 			'flex-direction': 'column',
		// 		}}
		// 	>
		// 		<h1>Hi, There</h1>
		// 		<TextField
		// 			id='filled-basic'
		// 			label='Your Phone Number'
		// 			variant='filled'
		// 		/>

		// 		<Button sx={{ marginTop: '20px' }} variant='contained'>
		// 			Login
		// 		</Button>
		// 	</Card>
		// </div>
	);
};

export default Login;
