import { Button, Card } from '@mui/material';
import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdMyLocation } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='bg-primary grid gap-5 lg:grid-cols-2 p-5 md:p-10 lg:p-20'>
            <div>
                <h2 className='text-5xl font-semibold pb-5'>Contact</h2>
                <p className='pb-5'>Do you have any query or discussion? Contact Us.</p>
                <ul className='text-neutral'>
                    <li className='flex items-center mb-4'>
                        <div className='p-2 bg-secondary rounded'>
                            <FaEnvelope size={30} />
                        </div>
                        <p className='text-neutral text-lg ml-2'>mahbubnoyon506@gmail.com</p>
                    </li>
                    <li className='flex items-center mb-4'>
                        <div className='p-2 bg-secondary rounded'>
                            <MdMyLocation size={30} />
                        </div>
                        <p className='text-neutral text-lg ml-2'>Kawlar, Airport Dhaka-1230</p>
                    </li>
                    <li className='flex items-center'>
                        <div className='p-2 bg-secondary rounded'>
                            <FaPhone size={30} />
                        </div>
                        <p className='text-neutral text-lg ml-2'>+8801687874697</p>
                    </li>
                </ul>
            </div>
            <div className=''>
                <Card sx={{background: '#282A37', padding: '30px 40px'}}>
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
                        <Button sx={{ borderRadius: '0px', padding: '8px 40px' }} type="submit" variant='contained'>Submit</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Contact;