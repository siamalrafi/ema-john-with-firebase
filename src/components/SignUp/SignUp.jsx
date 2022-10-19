import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './SignUp.css';

const SignUp = () => {

    const [error, setError] = useState();
    const { createUser } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confrim = form.confrim.value;
        console.log(email, password, confrim);

        if (password.lenght < 6) {
            setError('Password must be 6 characters long.')
            return;
        }
        if (password !== confrim) {
            setError('Your password did not match.');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));


    }




    return (
        <div className='form-container'>
            <h2 className='form-title'>This is the Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name='confrim' required />
                </div>
                <input className='btn-submit' type="submit" value='Sign Up' />
            </form>
            <p className="form-control">Already have an Account? <Link to='/login'>Login</Link></p>
            <p className='form-control text-error'>{error}</p>
        </div>
    );
};

export default SignUp;