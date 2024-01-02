import React, { useEffect } from "react";
import { signIn } from "../api/auth";
import { AuthProvider } from "../api/auth/AuthProvider";

function handleCallbackGoogle(response: any) {
  signIn(response.credential, AuthProvider.GOOGLE);
}

const SignIn = () => {
  useEffect(() => {
    (window as any).google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackGoogle,
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
      <h1>Sign-in to mini-shop</h1>
      <div id="signInGoogleButton"></div>
    </div>
  );
};

export default SignIn;
