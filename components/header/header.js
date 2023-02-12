import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { MdClose, MdMenu } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className=''>
            <div className='bg-primary px-5 md:px-10 lg:px-20 lg:pt-2'>
                <div className='flex justify-between items-center relative'>
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
                    <div className={`flex justify-between items-start z-10 py-5 bg-secondary w-64 absolute transition-all duration-500 ease-in-out ${openMenu ? 'top-[0px]' : 'top-[-300px]'}`}>
                        {
                            openMenu &&
                            <ul >
                                <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><Link className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="/">Home</Link></li>
                                <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><a className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#about">About</a></li>
                                <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><a className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#project">Projects</a></li>
                                <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><a className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#blogs">Blogs</a></li>
                                <li onClick={() => setOpenMenu(!openMenu)} className='px-4 py-2 lg:py-0'><a className='text-xl lg:text-2xl text-base-100 lg:text-neutral hover:text-base-100 transition-all ease-in-out duration-300' href="#contact">Contact</a></li>
                            </ul>
                        }
                        <AiOutlineCloseCircle onClick={() => setOpenMenu(!openMenu)} className='cursor-pointer mr-3 absolute left-52' color='#fff' size={25} />
                    </div>
                    <div className='pt-2 lg:pt-0 lg:hidden'>
                        <a href='#contact'>
                            <Button sx={{
                                borderRadius: '45px',
                                padding: {
                                    sm: '8px 20px',
                                    md: '16px 40px'
                                },
                                border: '1px solid #65666D',
                                color: '#65666D',
                                fontSize: '16px',
                                fontSize: {
                                    xs: '11px',
                                    sm: '12px',
                                    lg: '16px',
                                    xl: '16px'
                                },
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
        </div>
    );
};

export default Header;