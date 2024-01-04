import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {signOut} from "../../auth/api/rest";

interface User {
    id: string;
    name: string;
    email: string;
    imageURL: string;
    role: string;
}

const Home = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);

    return (
        <div>
            <button onClick={() => {
                signOut().then(() => {
                    navigate("/sign-in");
                })
            }}>
                log out
            </button>
            <button onClick={() => {
                fetch(
                    `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_BASE_PATH}/user`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                    }
                )
                    .then(response => response.json())
                    .then(data => setUsers(data))
                    .catch((error: any) => {
                        console.error('Sign-out failed:', error.message);
                    });
            }}>
                users
            </button>
            <h2>User List</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image URL</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.imageURL}</td>
                        <td>{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;