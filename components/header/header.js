import Link from 'next/link';
import React from 'react';
import { Button } from '@mui/material';

const Header = () => {
    return (
        <div className='bg-primary px-5 md:px-10 lg:px-20 flex justify-between items-center pt-2 sticky top-0'>
            <div></div>
            <ul className='flex justify-center items-center py-10 border-b-base-100 '>
                <li className='px-4'><a className='text-2xl text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="">Home</a></li>
                <li className='px-4'><a className='text-2xl text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="">About</a></li>
                <li className='px-4'><a className='text-2xl text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="">Projects</a></li>
                <li className='px-4'><a className='text-2xl text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="">Blogs</a></li>
                <li className='px-4'><a className='text-2xl text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="">Contact</a></li>
            </ul>
            <div>
                <Button sx={{
                    borderRadius: '45px',
                    padding: '15px 40px',
                    border: '1px solid #65666D',
                    color: '#65666D',
                    fontSize: '16px',
                    fontWeight: '700',
                    '&:hover': {
                        color: '#fff', border: '1px solid #fff', background: 'transparent'
                    },
                }} variant='outlined'>Hire Me</Button>
            </div>
        </div>
    );
};

export default Header;