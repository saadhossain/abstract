import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    return (
        <Link
            to={`/cards/${card.title}`}
            className='bg-[#F4F6F8] hover:bg-gray-200 border border-[#CCD7E4] rounded-lg min-h-40 duration-300 ease-in-out'>
            <h4 className='border-b border-[#CCD7E4] p-3 text-lg font-semibold'>{card.title}</h4 >
            <p className='p-3 text-gray-600'>{card.description}</p>
        </Link >
    );
};

export default Card;