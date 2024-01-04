import {SignUpRequest} from "../models/SignUpRequest";
import {SignUpResponse} from "../models/SignUpResponse";

export async function signUp(token: string, authProvider: string): Promise<SignUpResponse | null> {
    return fetch(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_BASE_PATH}/sign-up`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                authProvider: authProvider,
            } as SignUpRequest),
            credentials: 'include',
        }
    ).then((response: Response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.error('Sign-up failed:', response.statusText);
            return null;
        }
    }).catch((error: any) => {
        console.error('Sign-up failed:', error.message);
        return null;
    });
}

export async function signIn(token: string, authProvider: string): Promise<SignUpResponse | null> {
    return fetch(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_BASE_PATH}/sign-in`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                authProvider: authProvider,
            } as SignUpRequest),
            credentials: 'include',
        }
    ).then((response: Response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.error('Sign-in failed:', response.statusText);
            return null;
        }
    }).catch((error: any) => {
        console.error('Sign-in failed:', error.message);
        return null;
    });
}

export async function signOut(): Promise<void> {
    return fetch(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_BASE_PATH}/sign-out`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        }
    ).then((response: Response) => {
        if (!response.ok) {
            return response.json();
        } else {
            console.error('Sign-out failed:', response.statusText);
            return null;
        }
    }).catch((error: any) => {
        console.error('Sign-out failed:', error.message);
        return null;
    });
}
