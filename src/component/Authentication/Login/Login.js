import React from 'react';
import "./Login.scss";


const Login = () => {
    return (
        <div>

            <div className= "loginbox">
                <h1>Welcome</h1>
                <form>
                    <div className="inner-icon left-addon">
                        <span className="glyphicon glyphicon-user" />
                        <input type="text" name="username" placeholder="Enter Username" required />
                    </div>
                    <div className="inner-icon left-addon">
                        <span className="glyphicon glyphicon-lock" />
                    <input type="password" name="psw" placeholder="Enter Password" required />
            </div>
            <input type="submit" name="" value="Login">

            </input>
                    <a href="#">Don't have an account? </a>
            </form>
        </div>

        </div>
    );
};

export default Login;