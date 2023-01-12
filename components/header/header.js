import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { MdClose, MdMenu } from 'react-icons/md';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='bg-primary px-5 md:px-10 lg:px-20 sticky top-0 lg:pt-2'>
            <div className='flex justify-between items-center'>
                <div onClick={() => setOpenMenu(!openMenu)} className='lg:hidden'>
                    <MdMenu className='text-base-100 ' size={30} />
                </div>
                <ul className={`hidden lg:flex justify-center items-center lg:py-10 lg:bg-primary`}>
                    <li className='px-4 py-2 lg:py-0'><Link className='text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="/">Home</Link></li>
                    <li className='px-4 py-2 lg:py-0'><a className='text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#about">About</a></li>
                    <li className='px-4 py-2 lg:py-0'><a className='text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#project">Projects</a></li>
                    <li className='px-4 py-2 lg:py-0'><a className='text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#blogs">Blogs</a></li>
                    <li className='px-4 py-2 lg:py-0'><a className='text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#contact">Contact</a></li>
                </ul>

                {
                    openMenu &&
                    <ul className={`z-10 py-5 bg-secondary w-64 absolute transition duration-500 ease-in-out ${openMenu ? 'top-[0px]' : 'top-[-300px]'}`}>
                        <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><Link className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="/">Home</Link></li>
                        <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><a className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#about">About</a></li>
                        <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><a className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#project">Projects</a></li>
                        <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><a className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#blogs">Blogs</a></li>
                        <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><a className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#contact">Contact</a></li>
                    </ul>
                }

                <div className='pt-5 lg:pt-0'>
                    <a href='#contact'>
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
                        }}
                            variant='outlined'>Hire Me</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;