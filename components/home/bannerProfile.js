import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { BsExclamationLg } from 'react-icons/bs';
import { Button } from '@mui/material';
import { AiOutlineDownload } from 'react-icons/ai';

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
            <div>
                <div className='pt-32 pl-5 md:pl-16 lg:pl-40'>
                    <div className='flex justify-left items-center'>
                        <p className='text-2xl'>Hello<BsExclamationLg className='inline' size={20} /> I&apos;m</p>
                    </div>
                    <h2 className='text-6xl font-bold pt-4 pb-7'>Mahbub Noyon</h2>
                    <h2 className="text-lg md:text-xl lg:text-2xl mb-16 text-neutral">Full-Stack Developer with  <span className='text-base-100' ref={el} /> </h2>
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
                    }} variant='outlined'>Download CV <AiOutlineDownload size={30}/> </Button>
                </div>
                <div className='mt-[-50px]'>
                    <div className='ml-[-150px]'>
                        <div className='flex justify-center items-center border border-neutral w-96 h-96 rounded-t-full rounded-r-full'>
                            <div className='flex justify-center items-center border border-neutral w-80 h-80 rounded-full z-50'>
                                <div className='border border-neutral w-64 h-64 rounded-full z-50'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerProfile;