import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { BsExclamationLg } from 'react-icons/bs';
import { Button } from '@mui/material';
import { AiOutlineDownload } from 'react-icons/ai';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import bannerImage from '../../public/images/profileImage.png'

const BannerProfile = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'React JS',
                'Node JS',
                'Next JS',
                'WordPress'
            ],
            startDelay: 300,
            typeSpeed: 60,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "!"
        };
        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        }
    }, [])
    return (
        <div className='bg-primary '>
            <div className='flex justify-end mt-[-280px]'>
                {/* <div className=' hidden lg:block rotate-[140deg] ml-[-150px] mt-[]'>
                    <div className=''>
                        <div className='flex justify-center items-center border border-b-0 border-l-0 border-r-0 border-neutral w-96 h-96 rounded-t-full rounded-r-full'>
                            <div className='flex justify-center items-center border border-b-0 border-l-0 border-r-0 border-neutral w-80 h-80 rounded-full z-50'>
                                <div className='border border-b-0 border-l-0 border-r-0 border-neutral w-64 h-64 rounded-full z-50'></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='hidden lg:block rotate-[210deg] mt-[-20px] mr-[-110px]'>
                    <div className='flex items-center justify-center w-[28rem] h-[28rem] border border-b-0 border-l-0 border-r-0 border-neutral rounded-full'>
                        <div className='flex items-center justify-center w-[22rem] h-[22rem] border border-b-0 border-l-0 border-r-0 border-base-100 rounded-full'>
                            <div className='w-64 h-64 border border-b-0 border-l-0 border-r-0 border-neutral rounded-full'>
                                <div className='rotate-[-70deg]'>
                                    <ul className='flex justify-between items-start relative'>
                                        <li className='absolute flex justify-center items-center w-12 h-12 mt-[-140px] ml-[40px]  bg-primary border rounded-full'><a href="#"><BsFacebook className='text-neutral hover:text-base-100 transition ease-in-out duration-300 -rotate-[140deg]' size={30} /></a></li>
                                        <li className='absolute flex justify-center items-center w-12 h-12 ml-[150px] mt-[-30px] bg-primary border rounded-full'><a href="#"><FaLinkedin className='text-neutral hover:text-base-100 transition ease-in-out duration-300 -rotate-[140deg]' size={30} /></a></li>
                                        <li className='absolute flex justify-center items-center w-12 h-12 mt-[130px] ml-[120px] bg-primary border rounded-full'><a href="#"><FaTwitter className='text-neutral hover:text-base-100 transition ease-in-out duration-300 -rotate-[140deg]' size={30} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-evenly px-5 md:px-10 lg:px-20 pt-72 lg:pt-0'>
                <div className='md:pb-36'>
                    <div className=''>
                        <div className=''>
                            <p className='text-2xl'>Hello<BsExclamationLg className='inline' size={20} /> I&apos;m</p>
                        </div>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold pt-4 pb-7'>Mahbub Noyon</h2>
                        <h2 className=" md:text-xl mb-16 text-neutral">Full-Stack Developer with  <span className='text-base-100' ref={el} /> </h2>
                        <Button sx={{
                            borderRadius: '45px',
                            padding: '20px 40px',
                            border: '1px solid #65666D',
                            color: '#65666D',
                            fontSize: '24px',
                            fontWeight: '700',
                            '&:hover': {
                                color: '#fff', border: '1px solid #fff', background: 'transparent'
                            },
                        }} variant='outlined'>Download CV <AiOutlineDownload size={30} /> </Button>
                    </div>
                    {/* <div className='hidden lg:block pt-24 absolute'>
                    <div className=' ml-[] mb-[]'>
                        <div className='flex justify-center items-center border border-b-0 border-l-0 border-r-0 border-neutral w-96 h-96 rounded-t-full rounded-r-full'>
                            <div className='flex justify-center items-center border border-b-0 border-l-0 border-r-0 border-neutral w-80 h-80 rounded-full z-50'>
                                <div className='border border-b-0 border-l-0 border-r-0 border-neutral w-64 h-64 rounded-full z-50'></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
                <div className=' lg:justify-start'>
                    <div className=''>
                        <div className='bg-primary'>
                            <Image className='rounded-b-full' src={bannerImage} width='400' height='400' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerProfile;
