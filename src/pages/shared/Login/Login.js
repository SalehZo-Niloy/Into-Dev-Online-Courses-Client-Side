import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { googleLogin } = useContext(AuthContext);

    const handleSubmit = event => {

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="min-h-screen bg-base-300">
            <div className="hero-content flex-col w-full mt-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary-focus">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <hr className='border-2 mt-6' />
                    </form>
                    <div className="form-control w-5/6 mx-auto">
                        <button onClick={handleGoogleLogin} className="btn btn-outline btn-success"><FaGoogle className='mr-1' />Login With Google</button>
                    </div>
                    <div className="form-control mt-2 mb-6 w-5/6 mx-auto">
                        <button className="btn btn-outline"><FaGithub className='mr-1' />Login With Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;