import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.PNG'
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [theme, setTheme] = useState(true);
    const { user, logout } = useContext(AuthContext);

    const themeToggle = () => {
        if (theme) {
            setTheme(false);
        }
        else {
            setTheme(true);
        }
    }

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('Logged out successfully');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start w-11/12">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/courses' className='font-semibold text-base'>Courses</Link></li>
                        <li><Link to='/faq' className='font-semibold text-base'>FAQ</Link>
                        </li>
                        <li><Link to='/blog' className='font-semibold text-base'>Blog</Link></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-10 rounded-full' src={logo} alt='' />
                    <Link to='/home' className='text-3xl font-bold'>NTO-<span className='text-primary'>DEV</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/courses' className='font-semibold text-lg'>Courses</Link></li>
                    <li><Link to='/faq' className='font-semibold text-lg'>FAQ</Link>
                    </li>
                    <li><Link to='/blog' className='font-semibold text-lg'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end justify-evenly">
                <button className='outline-none' onClick={themeToggle} >{
                    theme ? <FaMoon className='font-semibold text-lg text-gray-500 hover:text-gray-700 mr-4 md:mr-0' /> : <FaSun className='font-semibold text-xl text-amber-400 hover:text-amber-300' />
                }</button>
                {
                    user?.uid ?
                        <>
                            <Link onClick={handleLogout} className='font-semibold text-base md:text-lg hover:text-primary-focus'>Log Out</Link>
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <img className='rounded-full w-8 md:w-12' src={user?.photoURL} alt="" />
                            </div>
                        </>
                        :
                        <Link to='/login' className='font-semibold text-lg hover:text-primary-focus'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;