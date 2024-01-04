import React, {useEffect} from "react";
import {signUp} from "../api/rest";
import {AuthProviderTypes} from "../api/AuthProviderTypes";
import {Link, useNavigate} from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();

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

    function handleCallbackGoogle(response: any) {
        signUp(response.credential, AuthProviderTypes.GOOGLE).then(() => {
                navigate("/home");
            }
        );
    }

    return (
        <div>
            <Link to="/sign-in">Already have a registration?</Link>
            <h1>Sign-up to mini-shop</h1>
            <div id="signUpGoogleButton"></div>
        </div>
    );
};

export default SignUp;