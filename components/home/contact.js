import { Button, Card } from '@mui/material';
import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdMyLocation } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='bg-primary grid gap-5 lg:grid-cols-2 p-5 md:p-10 lg:p-20'>
            <div>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold pb-5'>Contact</h2>
                <p className='pb-5'>Do you have any query or discussion? Contact Us.</p>
                <ul className='text-neutral '>
                    <li className='flex items-center mb-4 transition-all ease-in-out duration-300'>
                        <div className='p-2 bg-secondary rounded hover:text-base-100'>
                            <a href="mailto:mahbubnoyon506@gmail.com"> <FaEnvelope size={30} /></a>
                        </div>
                        <a href='mailto:mahbubnoyon506@gmail.com' className='text-neutral text-lg ml-2 hover:text-base-100 transition-all ease-in-out duration-300'>mahbubnoyon506@gmail.com</a>
                    </li>
                    <li className='flex items-center mb-4 transition-all ease-in-out duration-300'>
                        <div className='p-2 bg-secondary rounded hover:text-base-100'>
                            <MdMyLocation size={30} />
                        </div>
                        <p className='text-neutral text-lg ml-2 hover:text-base-100 transition-all ease-in-out duration-300'>Kawlar, Airport Dhaka-1230</p>
                    </li>
                    <li className='flex items-center transition-all ease-in-out duration-300'>
                        <div className='p-2 bg-secondary rounded hover:text-base-100'>
                            <a href="callto:+8801687874697"><FaPhone size={30} /></a>
                        </div>
                        <a href='callto:+8801687874697' className='text-neutral text-lg ml-2 hover:text-base-100 transition-all ease-in-out duration-300'>+8801687874697</a>
                    </li>
                </ul>
            </div>
            <div className=''>
                <Card sx={{ background: '#282A37', padding: '30px 50px' }}>
                    <form className='text-neutral'>
                        <div className='mb-2'>
                            <label className='block' htmlFor="Your name">Your name</label>
                            <input className='focus:outline-none bg-primary pl-2 py-2 w-full' type="text" name="name" id="name" />
                        </div>
                        <div className='mb-2'>
                            <label className='block' htmlFor="Your email">Your email</label>
                            <input className='focus:outline-none bg-primary pl-2 py-2 w-full' type="email" name="name" id="name" />
                        </div>
                        <div className='mb-2'>
                            <label className='block' htmlFor="Your subject">Your subject</label>
                            <input className='focus:outline-none bg-primary pl-2 py-2 w-full' type="text" name="name" id="name" />
                        </div>
                        <div className='mb-2'>
                            <label className='block' htmlFor="Your topics">Your topics</label>
                            <textarea className='focus:outline-none bg-primary pl-2 py-2 w-full' type="text" name="name" id="name" />
                        </div>
                        <Button sx={{
                            borderRadius: '0px', 
                            padding: '8px 40px', 
                            border: '1px solid #65666D', 
                            color: '#65666D', 
                            fontWeight: '700', 
                            '&:hover': {
                                color: '#fff', border: '1px solid #fff', background: 'transparent'
                            },
                        }} type="submit" variant='outlined'>Submit</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Contact;