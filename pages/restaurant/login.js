import React from 'react'
import {useState} from 'react';
const Login = () => {
 
 const [username, setUsername] = useState('');
 const [password,setPassword] = useState('');

const handleLogin = (e) => {
    console.log(e)
    e.preventDefault();
    console.log(username,password)
}
  return (
    <div> 
        <input type="text" placeholder="username" value={username}  />
        <input type="text" placeholder="password" value={password} />
        <button onClick={handleLogin}>Login</button>
    </div>
   
  )
}

export default Login