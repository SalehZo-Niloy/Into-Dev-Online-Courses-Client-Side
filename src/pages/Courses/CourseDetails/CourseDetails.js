import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaFilePdf } from "react-icons/fa";


const CourseDetails = () => {
    const course = useLoaderData();
    const { id, title, image, details, ratings, price } = course;

    const ref = React.createRef();
    return (
        <div className='bg-base-300 min-h-screen'>
            <h1 className='text-primary-focus text-2xl md:text-3xl font-semibold py-4'>Welcome to the course "{title}" !!</h1>
            <div className='absolute right-4 top-32 md:top-24'>
                <Pdf targetRef={ref} filename="Details.pdf">
                    {({ toPdf }) => <button className='text-2xl text-primary' onClick={toPdf} title='Download Course Details PDF'><FaFilePdf /></button>}
                </Pdf>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:py-8 px:8 md:px-20'>
                <div className='text-center md:text-left p-4'>
                    <img className='w-2/3 md:w-1/2 mx-auto md:mx-0' src={image} alt="" />
                    <p className='text-lg font-semibold my-2'><span className='text-primary-focus'>Ratings:</span> {ratings}</p>
                    <p className='text-lg font-semibold my-2'><span className='text-primary-focus'>Course Fee:</span> ${price}</p>
                    <Link to={`/checkout/${id}`} className="btn btn-outline btn-primary">Get Premium Access</Link>
                </div>
                <div ref={ref} className='text-left p-4'>
                    <h3 className='text-primary-focus text-xl font-semibold'>Course Description:</h3>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;