import React from 'react';
import Cards from './Cards';

const Content = ({ courses }) => {
    return (
        <div className='col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-center mt-8 p-8 order-last md:order-1'>
            {
                courses.map(course => <Cards key={course.id} course={course} ></Cards>)
            }
        </div>
    );
};

export default Content;