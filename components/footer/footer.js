import React from 'react';
import { FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div>
            <div className='bg-secondary p-5 md:p-10'>
                <div className='flex justify-center items-center'>
                <p className='text-center'>Copy right <FaRegCopyright className='inline' /> {year} . All rights reserved.</p>
                </div>
                <div className='flex justify-center items-center pt-2'>
                    <ul className='flex justify-center items-center'>
                        <li className='mr-2'><a className='text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href=""><BsFacebook size={25}/></a></li>
                        <li className='mr-2'><a className='text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href=""><FaInstagram size={25}/></a></li>
                        <li className='mr-2'><a className='text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href=""><FaLinkedin size={25}/></a></li>
                        <li className='mr-2'><a className='text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href=""><FaTwitter size={25}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;