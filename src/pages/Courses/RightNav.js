import React from 'react';
import { Link } from 'react-router-dom';

const RightNav = ({ courses }) => {
    return (
        <div className='bg-neutral text-left p-8 flex flex-col gap-y-4 order-1 md:order-last'>
            <h1 className='text-center text-2xl font-semibold text-success mb-4'>Available Courses:</h1>
            {
                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id} className='text-xl font-semibold text-base-100 hover:text-success'>{course.title}</Link>)
            }
        </div>
    );
};

export default RightNav;