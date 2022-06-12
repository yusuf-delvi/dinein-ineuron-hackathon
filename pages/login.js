import React, { useState } from 'react';
import Card from '@mui/material/Card';
import TextField from "@mui/material/TextField";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuth } from "../context/AuthUserContext";
import { Box } from "@mui/system";
import { Button } from "../components/Button";
import { useRouter } from "next/router";

const Login = () => {
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const { push } = useRouter();

  const { signInPhone, authUser } = useAuth();

  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // .../
        },
        "expired-callback": () => {
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
        console.log("err", err);
        window.location.reload();
      });
  };

  const ValidateOtp = () => {
    if (!otp || !final) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        push("/menu");
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src="/Logo.png" width={300} />

      <Card
        sx={{
          margin: "25px",
          width: "80%",
          maxWidth: "400px",
          height: "400px",
          padding: "25px",
          display: "flex",
          justifyContent: "center",
          "flex-direction": "column",
        }}
      >
        <h1>Hi, There</h1>
        {!show && (
          <TextField
            id="filled-basic"
            label="Your Phone Number"
            variant="filled"
            value={mynumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
          />
        )}
        <div id="recaptcha-container"></div>
        {!show && (
          <Button onClick={signin} sx={{ marginTop: "20px" }}>
            Send OTP
          </Button>
        )}
        {show && (
          <TextField
            sx={{ marginTop: "15px" }}
            id="filled-basic"
            label="Enter OTP"
            variant="filled"
            value={otp}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          />
        )}

        {show && (
          <Button onClick={ValidateOtp} sx={{ marginTop: "20px" }}>
            Verify OTP
          </Button>
        )}
      </Card>
    </Box>
  );
};

export default Login;


 

