import React, { useEffect } from "react";
import { generateAuthToken } from "../api/auth";

function handleCallbackResponse(response: any) {
  console.log(response.credential);
  generateAuthToken(response.credential).then((res) => {
      console.log(res);
  }).catch(error => console.log(error));
}

const Login = () => {
  useEffect(() => {
    (window as any).google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    (window as any).google.accounts.id.renderButton(
      document.getElementById("signInGoogleButton"),
      {
        theme: "outline",
        size: "large",
        width: 250,
      }
    );
  }, []);

  return (
    <div>
      <h1>Welcome to mini-shop</h1>
      <div id="signInGoogleButton"></div>
    </div>
  );
};

export default Login;
