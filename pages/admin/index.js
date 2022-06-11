import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import {useRouter } from "next/router";
import { Button } from "../../components/Button";
import {Box} from "@mui/material/"
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
    <Box
      sx={{
        height: "100%",
        width:"100vw",
        display: "flex",
        alignItems: "center !important",
        justifyContent: "center !important",
      }}
    >
      <Card
        sx={{
          margin: "25px",
          width: "400px",
          maxWidth: "500px",
          height: "400px",
          padding: "25px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Restaurant Login</h1>
        <TextField
          id="filled-basic"
          label="Username"
          variant="filled"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          sx={{ marginTop: "15px" }}
          id="filled-basic"
          label="Password"
          variant="filled"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
         <Button sx={{ marginTop: "20px" }} variant="contained"  onSubmit={handleLogin}>Login</Button>
        
      </Card>
    </Box>
  );
};

export default Login;
