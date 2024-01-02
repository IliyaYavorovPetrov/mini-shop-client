import React, { useEffect } from "react";
import { signUp } from "../api/auth";
import { AuthProvider } from "../api/auth/AuthProvider";

function handleCallbackGoogle(response: any) {
  signUp(response.credential, AuthProvider.GOOGLE);
}

const SignUp = () => {
  useEffect(() => {
    (window as any).google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackGoogle,
    });

    (window as any).google.accounts.id.renderButton(
      document.getElementById("signUpGoogleButton"),
      {
        theme: "outline",
        size: "large",
        width: 250,
      }
    );
  }, []);

  return (
    <div>
      <h1>Sign-up to mini-shop</h1>
      <div id="signUpGoogleButton"></div>
    </div>
  );
};

export default SignUp;