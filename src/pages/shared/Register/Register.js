import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, profileUpdater } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/'

    const notify = () => toast.success('Registered Successfully, Reload to See Profile Picture')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                handleProfileUpdate(name, photo, form, user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleProfileUpdate = (name, photo, form, user) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        profileUpdater(profile)
            .then(() => {
                form.reset();
                setError(null);
                notify();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <div className="bg-base-300">
            <div className="hero-content flex-col w-full mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary-focus">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="full name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                                <p className='text-left mt-2 text-error font-medium'>{error ? `Registering Error: ${error.split('/')[1].split(')')[0]}` : undefined}</p>
                                <p className='mt-4 font-semibold'>Already have an account? Please visit<br /><Link to='/login' className='text-primary underline text-lg'>Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;