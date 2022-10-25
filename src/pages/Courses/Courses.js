import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Content from './Content';
import RightNav from './RightNav';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 bg-base-300'>
            <Content courses={courses}></Content>
            <RightNav courses={courses}></RightNav>
        </div>
    );
};

export default Courses;