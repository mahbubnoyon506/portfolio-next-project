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
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';

const styles = (theme) => ({
    root: {
    //   backgroundColor: 'blue',
      // Match [sm, md)
      //       [600px, 900px)
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'red',
        color:'#000'
      },
    },
  });

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
        <div className='bg-primary'>
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
                <div className='hidden lg:block rotate-[210deg] mt-[-20px] mr-[-110px] -z-0'>
                    <div className='flex items-center justify-center w-[28rem] h-[28rem] border border-b-0 border-l-0 border-r-0 border-neutral rounded-full'>
                        <div className='flex items-center justify-center w-[22rem] h-[22rem] border border-b-0 border-l-0 border-r-0 border-base-100 rounded-full'>
                            <div className='w-64 h-64 border border-b-0 border-l-0 border-r-0 border-neutral rounded-full'>
                                <div className='rotate-[-70deg]'>
                                    <ul className='flex justify-between items-start relative'>
                                        <li className='absolute flex justify-center items-center w-12 h-12 mt-[-140px] ml-[40px]  bg-primary border rounded-full'><a href="https://www.facebook.com/mahbub4noyon/" target="_blank" rel='noreferrer'><BsFacebook className='text-neutral hover:text-base-100 transition ease-in-out duration-300 -rotate-[140deg]' size={30} /></a></li>
                                        <li className='absolute flex justify-center items-center w-12 h-12 ml-[150px] mt-[-30px] bg-primary border rounded-full'><a href="https://www.linkedin.com/in/mahbubnoyon/" target="_blank" rel='noreferrer'><FaLinkedin className='text-neutral hover:text-base-100 transition ease-in-out duration-300 -rotate-[140deg]' size={30} /></a></li>
                                        <li className='absolute flex justify-center items-center w-12 h-12 mt-[130px] ml-[120px] bg-primary border rounded-full'><a href="https://twitter.com/MahbubNoyon1" target="_blank" rel='noreferrer'><FaTwitter className='text-neutral hover:text-base-100 transition ease-in-out duration-300 -rotate-[140deg]' size={30} /></a></li>
                                    </ul>
                                </div>
                                <div className='rotate-[150deg] flex justify-center items-center mt-[70px]'>
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
                    </div>
                </div>
            </div>
            <div className='md:flex justify-evenly items-start px-5 md:px-10 lg:px-20 pt-72 lg:pt-0'>
                <div className='md:pb-36'>
                    <div className=''>
                        <div className=''>
                            <p className='text-2xl'>Hello<BsExclamationLg className='inline' size={20} /> I&apos;m</p>
                        </div>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold pt-4 pb-7'>Mahbub Noyon</h2>
                        <h2 className=" md:text-lg lg:text-xl mb-8 md:mb-12 lg:mb-16 text-neutral">Full-Stack Developer with  <span className='text-base-100' ref={el} /> </h2>
                        <Link href='https://drive.google.com/file/d/1rsOy9tdzvIq24gZh5ntMZbAuMe5pHtch/view?usp=sharing' target='_blank' download>
                                <Button
                                    sx={{
                                        borderRadius: '45px',
                                        padding: {
                                            sm:'10px 20px',
                                            md:'20px 40px'
                                        },
                                        border: '1px solid #65666D',
                                        color: '#65666D',
                                        fontSize: {
                                            xs:'16px',
                                            sm:'20px',
                                            lg:'24px',
                                            xl:'24px'
                                        },
                                        fontWeight: '700',
                                        '&:hover': {
                                            color: '#fff', border: '1px solid #fff', background: 'transparent'
                                        },
                                    }} variant='outlined'>Download CV <AiOutlineDownload size={30} /> </Button>
                        </Link>
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
                <div className='lg:justify-start mt-10 md:pt-0'>
                    <div className='bg-secondary drop-shadow-2xl'>
                        <div className='bg-[#F9CCD3] pl-3 pt-16 rounded-tl-full shadow-2xl'>
                            <Image className='' src={bannerImage} width='400' height='500' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerProfile;
