import React from 'react'
import {useState} from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
 
 const [username, setUsername] = useState('');
 const [password,setPassword] = useState('');

const handleLogin = (e) => {
    console.log(e)
    e.preventDefault();
    console.log(username,password)
}
  return (
    <div
    sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Card
      sx={{
        margin: '25px',
        width: '400px',
        height: '400px',
        padding: '25px',
        display: 'flex',
        justifyContent: 'center',
        'flex-direction': 'column',
      }}
    >
      <h1>Restaurant Login</h1>
      <TextField
        id='filled-basic'
        label='Username'
        variant='filled'
        onChange={(e) => {
          setnumber(e.target.value);
        }}
      />
      <TextField
        sx={{ marginTop: '15px' }}
        id='filled-basic'
        label='Password'
        variant='filled'
        onChange={(e) => {
          setnumber(e.target.value);
        }}
      />

      <Button sx={{ marginTop: '20px' }} variant='contained'>
        Login
      </Button>
    </Card>
  </div>
   
  )
}

export default Login