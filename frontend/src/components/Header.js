import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/abstract_logo.png';
import { DataContext } from '../context/DataContext';

const Header = () => {
    const { isModalOpen, setIsModalOpen } = useContext(DataContext);
    return (
        <div className='w-full bg-black py-4'>
            <div className='w-11/12 md:w-10/12 max-w-[1440px] mx-auto flex items-center justify-between'>
                {/* logo area */}
                <Link to='/' className='flex gap-2 items-center text-gray-300'>
                    <img src={logo} alt='Branding/Logo' width={40} height={40} />
                    <h3 className='text-xl flex gap-2'><span className='hidden md:block font-semibold text-white'>Abstract |</span> Help Center</h3>
                </Link>
                <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className='bg-white py-2 px-3 md:px-5 rounded-md font-semibold hover:bg-gray-300 duration-300 ease-in-out'>Submit a Request</button>
            </div>
        </div>
    );
};

export default Header;