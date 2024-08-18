import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/abstract_logo.png';

const Footer = () => {
    return (
        <div className='w-full bg-black text-white'>
            {/* Quick Links Section */}
            <section className='w-11/12 md:w-10/12 max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 py-10'>
                {/* Abstract */}
                <div className='flex flex-col gap-2'>
                    <img src={logo} alt='Branding/Logo' width={40} height={40} />
                    <h2 className='text-xl font-semibold'>Abstract</h2>
                    <Link to='/'>Branches</Link>
                </div>

                {/* Resources */}
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold'>Resources</h2>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Help Center</Link>
                    <Link to='/'>Release Notes</Link>
                    <Link to='/'>Status</Link>
                </div>
                {/* Community */}
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold'>Community</h2>
                    <Link to='/'>Twitter/X</Link>
                    <Link to='/'>LinkedIn</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Dribble</Link>
                    <Link to='/'>Podcast</Link>
                </div>
                {/* Company */}
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold'>Company</h2>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Legal</Link>
                    <p className='text-lg font-semibold'>Contact Us</p>
                    <Link to='/'>info@abstract.com</Link>
                </div>
            </section>
            {/* footer credit */}
            <div className='border-t border-white text-center py-2'>
                <p>&copy; 2024 Abstract Studio Inc. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;