import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { googleLogin, githubLogin, emailLogin } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        emailLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError(null);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError(null);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError(null);
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    return (
        <div className="bg-base-300">
            <div className="hero-content flex-col w-full mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary-focus">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label flex flex-col">
                                <p className='text-left mt-2 text-error font-medium'>{error ? `Login Error: ${error.split('/')[1].split(')')[0]}` : undefined}</p>
                                <p className='mt-4 font-semibold'>Don't have an account? Please visit<br /><Link to='/register' className='text-primary underline text-lg'>Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <hr className='border-2 mt-6' />
                    </form>
                    <div className="form-control w-5/6 mx-auto">
                        <button onClick={handleGoogleLogin} className="btn btn-outline btn-success"><FaGoogle className='mr-1' />Login With Google</button>
                    </div>
                    <div className="form-control mt-2 mb-6 w-5/6 mx-auto">
                        <button onClick={handleGithubLogin} className="btn btn-outline"><FaGithub className='mr-1' />Login With Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;