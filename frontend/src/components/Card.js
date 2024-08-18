import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    return (
        <div className='bg-[#F4F6F8] border border-[#CCD7E4] rounded-lg min-h-40'>
            <h4 className='border-b border-[#CCD7E4] p-3 text-lg font-semibold'>
                <Link to={`/cards/${card.title}`}>{card.title}</Link>
                </h4>
            <p className='p-3 text-gray-600'>{card.description}</p>
        </div>
    );
};

export default Card;