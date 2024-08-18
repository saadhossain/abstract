import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const SearchSection = () => {
    const { setSearchText } = useContext(DataContext);
    //Handle search text
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className='bg-[#DADBF0]'>
            <div className='w-10/12 max-w-[1440px] mx-auto py-12 md:py-28 text-center flex flex-col items-center gap-5'>
                <h2 className='text-3xl md:text-5xl font-semibold'>How can we help?</h2>
                <div
                    className='w-11/12 md:w-8/12 bg-white py-2 px-4 rounded flex items-center justify-end'>
                    <input
                        type="text"
                        name="searchText"
                        id="searchText"
                        onChange={handleSearch}
                        className='w-full focus:outline-none'
                        placeholder='What you are looking for?'
                    />
                    <p className='text-2xl'>&rarr;</p>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
