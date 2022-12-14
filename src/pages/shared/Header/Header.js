import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.PNG'
import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
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
            <div className="navbar-start w-7/12 md:w-9/12">
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
                    <img className='w-6 md:w-10 rounded-full' src={logo} alt='' />
                    <Link to='/home' className='text-xl md:text-3xl font-bold'>NTO-<span className='text-primary'>DEV</span></Link>
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
            <div className="navbar-end justify-evenly overflow-hidden">
                <button className='outline-none' onClick={themeToggle} >{
                    theme ? <FaMoon className='font-semibold text-lg text-gray-500 hover:text-gray-700' /> : <FaSun className='font-semibold text-xl text-amber-400 hover:text-amber-300' />
                }</button>
                {
                    user?.uid ?
                        <Link onClick={handleLogout} className='font-semibold text-base md:text-lg hover:text-primary-focus'>Log Out</Link>
                        :
                        <Link to='/login' className='font-semibold text-lg hover:text-primary-focus'>Login</Link>
                }
                {
                    user?.photoURL ?
                        <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                            <img className='rounded-full w-7 md:w-10 h-7 md:h-10' src={user?.photoURL} alt="" />
                        </div>
                        :
                        <div className="tooltip tooltip-left" data-tip='Login or Reload for User Name'>
                            <FaUserAlt className='rounded-full w-5 md:w-7 h-5 md:h-7 bg-base-300' />
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;