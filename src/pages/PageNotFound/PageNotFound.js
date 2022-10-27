import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='bg-base-300 min-h-screen pt-24 md:pt-36'>
            <h1 className=' text-6xl font-bold text-primary-focus px-8'>Page Not Found!</h1>
            <h3 className='my-6 text-3xl font-bold text-primary-focus px-8'>The page you are looking for doesn't exist!!</h3>
            <h3 className='my-6 text-2xl font-bold text-primary-focus px-8'>Please try the below links.</h3>
            <div className='flex gap-4 justify-center bg-neutral p-6'>
                <Link to='/'><span className='text-white text-xl font-semibold underline hover:text-primary-focus'>Into Dev Home</span></Link>
                <Link to='/courses'><span className='text-white text-xl font-semibold underline hover:text-primary-focus'>Courses</span></Link>
                <Link to='/faq'><span className='text-white text-xl font-semibold underline hover:text-primary-focus'>FAQ</span></Link>
                <Link to='/blog'><span className='text-white text-xl font-semibold underline hover:text-primary-focus'>Blog</span></Link>
            </div>
        </div>
    );
};

export default PageNotFound;