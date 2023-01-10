import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { BsExclamationLg } from 'react-icons/bs';
import { Button } from '@mui/material';
import { AiOutlineDownload } from 'react-icons/ai';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

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
        <div className='bg-primary grid lg:grid-cols-2 items-end -z-10'>
            <div>
                <div className=' hidden lg:block rotate-[130deg] mr-[500px] mt-[-270px]'>
                    <div className=''>
                        <div className='flex justify-center items-center border border-b-0 border-l-0 border-r-0 border-neutral w-96 h-96 rounded-t-full rounded-r-full'>
                            <div className='flex justify-center items-center border border-b-0 border-l-0 border-r-0 border-neutral w-80 h-80 rounded-full z-50'>
                                <div className='border border-b-0 border-l-0 border-r-0 border-neutral w-64 h-64 rounded-full z-50'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-10 pl-5 md:pl-16 lg:pl-36 pb-10'>
                    <div className='flex justify-left items-center'>
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
                <div className='hidden lg:block pt-24'>
                    <div className='rotate-45 ml-[-270px] mb-[-350px]'>
                        <div className='flex justify-center items-center border border-b-0 border-l-0 border-r-0 border-neutral w-96 h-96 rounded-t-full rounded-r-full'>
                            <div className='flex justify-center items-center border border-b-0 border-l-0 border-r-0 border-neutral w-80 h-80 rounded-full z-50'>
                                <div className='border border-b-0 border-l-0 border-r-0 border-neutral w-64 h-64 rounded-full z-50'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center lg:justify-start lg:ml-[-70px]'>
                <div className='relative'>
                    <Image className='' src='/images/profileImage.png' width='500' height='700' alt='' />
                    <div className='hidden md:block rotate-[75deg] absolute mt-[-490px] ml-[130px]'>
                        <div className='flex items-center justify-center w-[28rem] h-[28rem] border border-b-0 border-l-0 border-r-0 border-neutral rounded-full'>
                            <div className='flex items-center justify-center w-[22rem] h-[22rem] border border-b-0 border-l-0 border-r-0 border-base-100 rounded-full'>
                                <div className='w-64 h-64 border border-b-0 border-l-0 border-r-0 border-neutral rounded-full'>
                                    <div className='rotate-[-70deg]'>
                                        <ul className='flex justify-between items-start relative'>
                                            <li className='absolute flex justify-center items-center w-12 h-12 mt-[-140px] ml-[40px]  bg-primary border rounded-full'><a href="#"><BsFacebook className='text-neutral hover:text-base-100' size={30} /></a></li>
                                            <li className='absolute flex justify-center items-center w-12 h-12 ml-[150px] mt-[-30px] bg-primary border rounded-full'><a href="#"><FaLinkedin className='text-neutral hover:text-base-100' size={30} /></a></li>
                                            <li className='absolute flex justify-center items-center w-12 h-12 mt-[130px] ml-[120px] bg-primary border rounded-full'><a href="#"><FaTwitter className='text-neutral hover:text-base-100' size={30} /></a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerProfile;

// relative border border-neutral rounded-r-full border-y-0 border-l-0