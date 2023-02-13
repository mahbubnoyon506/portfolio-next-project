import { Button, Card } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdMyLocation } from 'react-icons/md';

const Contact = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (!res.ok) return toast.error('Successfully send message!');
            // console.log(res)
            return (
                res.json(),
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        Congarts! {data.name}.
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                       Your message send successfully.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-l border-gray-200">
                            <button
                                onClick={() => toast.dismiss(t.id)}
                                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )),
                reset()
            )
        });
    }


    return (
        <div id='contact' className='bg-primary grid gap-5 lg:grid-cols-2 p-5 md:p-10 lg:p-20'>
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
                <Card sx={{ background: '#282A37', }}>
                    <form onSubmit={handleSubmit(onSubmit)} className='text-neutral px-5 md:px-10 lg:px-16 py-5 md:py-8 lg:py-12'>
                        <div className='mb-2'>
                            <label className='block' htmlFor="Your name">Your name</label>
                            <input {...register('name', { required: 'Name is required.' })} className='focus:outline-none bg-primary pl-2 py-2 w-full' type="text" name="name" id="name" />
                            {errors.name && <label className='text-sm text-error' htmlFor="">{errors.name?.message}</label>}
                        </div>
                        <div className='mb-2'>
                            <label className='block' htmlFor="Your email">Your email</label>
                            <input {...register('email', { required: 'Email is required.' })} className='focus:outline-none bg-primary pl-2 py-2 w-full' type="email" name="email" id="name" />
                            {errors.email && <label className='text-sm text-error' htmlFor="">{errors.email?.message}</label>}
                        </div>
                        <div className='mb-2'>
                            <label className='block' htmlFor="Your subject">Your subject</label>
                            <input {...register('subject', { required: 'Subject is required.' })} className='focus:outline-none bg-primary pl-2 py-2 w-full' type="text" name="subject" id="name" />
                            {errors.subject && <label className='text-sm text-error' htmlFor="">{errors.subject?.message}</label>}
                        </div>
                        <div className='mb-2'>
                            <label className='block' htmlFor="Your topics">Your topics</label>
                            <textarea {...register('message', { required: 'Message is required.' })} className='focus:outline-none bg-primary pl-2 py-2 w-full' type="text" name="message" id="name" />
                            {errors.message && <label className='text-sm text-error' htmlFor="">{errors.message?.message}</label>}
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