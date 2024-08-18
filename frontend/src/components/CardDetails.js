import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';

const CardDetails = () => {
    const card = useLoaderData();

    if (!card._id) {
        return <ErrorPage />;
    }
    return (
        <div className='w-11/12 md:w-10/12 max-w-[1440px] mx-auto my-12 min-h-[60vh]'>
            <div className='bg-[#F4F6F8] border border-[#CCD7E4] rounded-lg'>
                <h4 className='border-b border-[#CCD7E4] p-3 text-lg font-semibold'>
                    {card.title}
                </h4>
                <p className='p-3 text-gray-600'>{card.description}</p>
            </div>
        </div>
    );
};

export default CardDetails;