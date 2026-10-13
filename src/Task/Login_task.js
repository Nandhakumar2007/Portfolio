import React from 'react';

const Login_task = () => {
    return (
        <>
            <div className="login">
                <h1>Login Page</h1>

                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" /><br/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" /><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
};

export default Login_task;