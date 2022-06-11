import React, { useState } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuth } from '../context/AuthUserContext';

const Login = () => {
	const [mynumber, setnumber] = useState('');
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');

	const { signInPhone, authUser } = useAuth();

	const signin = () => {
		if (mynumber === '' || mynumber.length < 10) return;

		let verify = new RecaptchaVerifier(
			'recaptcha-container',
			{
				size: 'invisible',
				callback: (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
					// .../
				},
				'expired-callback': () => {
					// Response expired. Ask user to solve reCAPTCHA again.
					// ...
				},
			},
			auth
		);

		signInPhone(mynumber, verify)
			.then((res) => {
				setshow(true);
				setfinal(res);
			})
			.catch((err) => {
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
		// 			height: '400px',
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
		// 			value={mynumber}
		// 			onChange={(e) => {
		// 				setnumber(e.target.value);
		// 			}}
		// 		/>
		// 		<TextField
		// 			sx={{ marginTop: '15px' }}
		// 			id='filled-basic'
		// 			label='Enter OTP'
		// 			variant='filled'
		// 			value={otp}
		// 			onChange={(e) => {
		// 				setnumber(e.target.value);
		// 			}}
		// 		/>

		// 		<Button sx={{ marginTop: '20px' }} variant='contained'>
		// 			Send OTP
		// 		</Button>
		// 		<Button sx={{ marginTop: '20px' }} variant='contained'>
		// 			Verify OTP
		// 		</Button>
		// 	</Card>
		// </div>
	);
};

export default Login;
