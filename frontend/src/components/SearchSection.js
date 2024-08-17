import React from 'react';

const SearchSection = () => {
    return (
        <div className='bg-[#DADBF0]'>
            <div className='w-10/12 mx-auto py-28 text-center flex flex-col items-center gap-5'>
                <h2 className='text-5xl font-semibold'>How can we help?</h2>
                <form className='w-8/12 bg-white py-2 px-4 rounded flex items-center justify-end'>
                    <input type="text" name="searchText" id="searchText" className='w-full focus:outline-none' placeholder='What you are looking for?'/>
                    <button type='submit' className='text-2xl'>&rarr;</button>
                </form>
            </div>
        </div>
    );
};

export default SearchSection;