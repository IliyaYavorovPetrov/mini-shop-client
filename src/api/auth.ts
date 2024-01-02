import axios, {AxiosResponse} from "axios";
import {SignUpRequest} from "../models/SignUpRequest";
import Cookies from "js-cookie";

export async function signUp(
    token: string,
    authProvider: string
): Promise<void> {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION_PREFIX}/sign-up`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token: token,
                    authProvider: authProvider,
                } as SignUpRequest),
                credentials: "include",
            }
        );

        if (!response.ok) {
            console.error("Sign-up failed with status:", response.status);
        }

        console.log(Cookies.get('AUTH-TOKEN'));
        const response1 = await fetch(
            `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION_PREFIX}/users`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            }
        );

    } catch (error: any) {
        console.error("Sign-up failed:", error.message);
    }
}

export async function signIn(
    token: string,
    authProvider: string
): Promise<string | null> {
    try {
        const response: AxiosResponse = await axios.post(
            `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION_PREFIX}/sign-in`,
            {
                token: token,
                authProvider: authProvider,
            },
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status !== 200) {
            throw new Error("Failed to get token: " + response.status);
        }

        const authToken = response.headers["AUTH_TOKEN"];

        return authToken;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error("postSignInToken Error:", error.message);
        } else {
            console.error("Generic error:", error.message);
        }
        return null;
    }
}
