import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../../Contexts/UserContext';
import './Login.css';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
            })
            .catch(error => console.error(error));
    }



    return (
        <div className='form-container'>
            <h2 className='form-title'>This is the Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p className="form-control">New to ema john <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;