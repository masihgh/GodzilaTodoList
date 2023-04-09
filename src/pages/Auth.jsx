import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout"
import { getAllMembers } from "../api/MemberAPI"
import config from "../config";
import AuthService from '../services/auth.service'
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

function Auth() {
    const [User, setUser] = useState({ name: 'Selcted User', avatar: '' });
    const [Users, setUsers] = useState([]);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(User.name).then(
                () => {
                    navigate("/auth");
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    const AvatarSet = () => {
        if (User.avatar) {
            return (
                <div className="avatar">
                    <div className="w-8 mask mask-squircle">
                        <img src={`${config.FILES_ENDPOINT}${User.avatar}`} alt={`User ${User.avatar} Photo`} />
                    </div>
                </div>
            )
        }
    }

    useEffect(() => {
        getAllMembers()
            .then(({ data }) => {
                setUsers(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const user = authService.getCurrentUser();
    if (!user) {
        return (
            <MainLayout>

                <div className="card bg-base-300 shadow-xl p-8 ">
                    <div className="divider">Authentication</div>
                    <form onSubmit={handleLogin}>

                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Login With:</span>
                            </label>
                            <div className="dropdown">
                                <label tabIndex="0" className="btn m-1 px-12">
                                    {AvatarSet()}
                                    <p className="font-bold ml-3">{User.name}</p>
                                </label>
                                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52">
                                    {Users && Users.map((user, index) => {
                                        return (
                                            <li key={index} onClick={(e) => {
                                                setUser({ name: user.name, avatar: user.avatar })
                                            }}>
                                                <div>
                                                    <div className="avatar">
                                                        <div className="w-8 mask mask-squircle">
                                                            <img src={`${config.FILES_ENDPOINT}${user.avatar}`} alt={`User ${user.avatar} Photo`} />
                                                        </div>
                                                    </div>
                                                    <p className="font-bold">{user.name}</p>
                                                </div>
                                            </li>)
                                    })}

                                    <li onClick={(e) => {
                                        setUser({ name: 'Select User' })
                                    }}>
                                        <div>
                                            <div className="avatar placeholder">
                                                <div className="bg-error-content text-neutral-content w-8 mask mask-squircle">
                                                    <span className="text-xs">X</span>
                                                </div>

                                            </div>
                                            <p className="font-bold">Clear</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="form-control mb-4">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                </div>
            </MainLayout>

        );
    } else {
        return (
            <MainLayout>

                <div className="card bg-base-300 shadow-xl p-16 ">
                    <div className="divider">
                        <div className="avatar">
                            <div className="mask mask-squircle w-14 h-14">
                                <img src={`${config.FILES_ENDPOINT}${user.user.avatar}`} alt={`User ${user.user.avatar} Photo`} />
                            </div>
                            <div>
                                <p className="font-bold ml-3">{user.user.name}</p>
                                <p className="ml-3 text-sm"><span className="text-sm opacity-50">Age: </span><span className="text-sm opacity-100">{user.user.age}</span></p>
                                <p className="ml-3 text-sm"><span className="text-sm opacity-50">Language: </span><span className="text-sm opacity-100">{user.user.language}</span></p>
                            </div>
                        </div>

                    </div>

                    <div className="form-control mt-8">
                        <button className="btn btn-secondary" onClick={() => {
                            AuthService.logout();
                            navigate('/auth')
                        }}>Logout</button>
                    </div>

                </div>
            </MainLayout>

        );
    }
}

export default Auth;