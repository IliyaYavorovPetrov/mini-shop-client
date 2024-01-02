import React from 'react';
import {useNavigate} from "react-router-dom";
import {signOut} from "../../auth/api/rest";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {
                fetch(
                    `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION_PREFIX}/health-check`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                    }
                ).then((response: Response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.error('Sign-out failed:', response.statusText);
                        return null;
                    }
                }).catch((error: any) => {
                    console.error('Sign-out failed:', error.message);
                    return null;
                });
            }}>
                health-check
            </button>
            <button onClick={() => {
                signOut().then(() => {
                    navigate("/sign-in");
                })
            }}>
                log out
            </button>
        </div>
    );
};

export default Home;