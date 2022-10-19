import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>This is the Sign Up</h2>
            <form>
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
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value='Sign Up' />
            </form>
            <p className="form-control">Already have an Account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;