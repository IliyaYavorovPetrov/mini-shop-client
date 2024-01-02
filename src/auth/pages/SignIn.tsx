import React, {useEffect} from "react";
import {signIn, signUp} from "../api/rest";
import {AuthProviderTypes} from "../api/AuthProviderTypes";
import {Link, useNavigate} from "react-router-dom";


const SignIn = () => {
    const navigate = useNavigate();

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

    function handleCallbackGoogle(response: any) {
        signIn(response.credential, AuthProviderTypes.GOOGLE).then((response) => {
                if (response !== null) {
                    navigate("/home");
                }
            }
        );
    }

    return (
        <div>
            <Link to="/sign-up">No registration?</Link>
            <h1>Sign-in to mini-shop</h1>
            <div id="signInGoogleButton"></div>
        </div>
    );
};

export default SignIn;
