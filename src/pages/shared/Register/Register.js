import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, profileUpdater } = useContext(AuthContext);

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
                console.log(user);
                handleProfileUpdate(name, photo, form);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleProfileUpdate = (name, photo, form) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        profileUpdater(profile)
            .then(() => {
                form.reset();
            })
            .catch(error => {
                console.error(error);
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
                            <label className="label">
                                {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
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