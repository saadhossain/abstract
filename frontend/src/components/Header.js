import React from 'react';
import logo from '../assets/abstract_logo.png';

const Header = () => {
    return (
        <div className='w-full bg-black py-2'>
            <div className='w-10/12 mx-auto flex items-center justify-between'>
                {/* logo area */}
                <div>
                    <img src={logo} alt='Branding/Logo' width={40} height={40} />
                </div>
                <button className='bg-white py-2 px-5 rounded-md font-semibold hover:bg-gray-300 duration-300 ease-in-out'>Submit a Request</button>
            </div>
        </div>
    );
};

export default Header;