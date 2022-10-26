import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { title } = course;
    return (
        <div className='bg-base-300 min-h-screen'>
            <h1 className='text-primary-focus text-2xl md:text-3xl font-semibold py-4'>Check Out</h1>
            <h3 className='text-primary text-lg md:text-xl font-semibold py-2'>Get premium access to the course,<br />{title}</h3>
            <p className='font-medium mb-12'>After the payment is done successfully, <br /> you can start the course. Best of luck!!</p>
            <div className='flex flex-col gap-8 items-center'>
                <button className="btn btn-wide btn-primary">Payment Methods</button>
                <button className="btn btn-wide btn-primary" disabled>Get Started</button>
            </div>
        </div>
    );
};

export default CheckOut;