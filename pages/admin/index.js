import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { push, pathname } = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      push(`/${pathname}/dashboard`);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
