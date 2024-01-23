import React from "react";
import axios from 'axios'
const AuthPage = (props) =>
{
    const onsubmit = async (e) =>
    {
        e.preventDefault();
        try
        {
            const {
                value
            } = e.target[0];
            const res = await axios.post("http://localhost:2343/auth", {
                username: value
            });
            props.onAuth({
                ...res.data,
                secret: value
            });
        } catch (error)
        {
            console.error(error);
        }

    }

        return (
            <div className="background" >
                <form onSubmit={onsubmit}
                    className="form-card" >
                    <div className="form-title" > Welcome👋 </div>

                    <div className="form-subtitle"> Set a username to get started </div>

                    <div className="auth" >
                        <div className="auth-label"> Username </div>
                        <input className="auth-input"
                            name="username" />
                        <button className="auth-button"
                            type="submit" >
                            Enter </button> </div> </form> </div>
        );
    };

export default AuthPage;
