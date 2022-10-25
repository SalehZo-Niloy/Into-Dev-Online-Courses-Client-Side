import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ course }) => {
    const { id, title, image } = course;
    return (
        <div className="card w-full bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-full h-56" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions w-full">
                    <Link to={`/courses/${id}`} className="btn btn-primary w-full">view details</Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;