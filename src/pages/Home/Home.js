import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/home.png'

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 bg-base-300 py-4 md:py-16'>
            <div className='col-span-1 md:col-span-3 mt-0 md:mt-16'>
                <h1 className='text-4xl md:text-6xl text-primary-focus font-bold'>Welcome to INTO-DEV <br />
                    Turn Yourself <br />
                    Into a Developer!!
                </h1>
                <p className='text-xl md:text-2xl mt-8 font-normal md:font-medium px-4 md:px-12'>
                    We are here to help you become a successful Web Developer through our courses. Get your premium access now and start the journey from nothing INTO a DEVloper.
                </p>
                <Link to='/courses'>
                    <button className="btn btn-primary btn-wide my-4">Check Our Courses</button>
                </Link>
            </div>
            <div className='col-span-1 md:col-span-2 bg-neutral rounded-full mx-8 my-8 md:mt-0'>
                <img src={image} className='w-9/12 md:w-full mx-auto' alt="" />
            </div>
        </div>
    );
};

export default Home;