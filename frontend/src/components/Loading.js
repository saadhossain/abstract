import React from 'react';

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-[60vh]'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-900"></div>
        </div>
    );
};

export default Loading;