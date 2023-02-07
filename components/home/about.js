import React from 'react';
import CountUp from 'react-countup';
import html from '../../public/images/icons/html.svg'
import html2 from '../../public/images/icons/html5.svg'
import css from '../../public/images/icons/css.svg'
import css2 from '../../public/images/icons/css-alt.svg'
import js from '../../public/images/icons/javascript.svg'
import js2 from '../../public/images/icons/java-script.svg'
import ts from '../../public/images/icons/typescript.svg'
import php from '../../public/images/icons/php.svg'
import react from '../../public/images/icons/react.svg'
import redux from '../../public/images/icons/redux.svg'
import next from '../../public/images/icons/next-js.svg'
import node from '../../public/images/icons/node-js.svg'
import mongo from '../../public/images/icons/mongodb.svg'
import github from '../../public/images/icons/github-logo.svg'
import wordpress from '../../public/images/icons/wordpress.svg'
import { Card, CardContent } from '@mui/material';
import Image from 'next/image';

const About = () => {

    return (
        <div id='about' className='bg-secondary p-5 md:p-10 lg:p-20 z-50'>
            <div className='grid lg:gap-10 lg:grid-cols-12 items-center py-5 lg:py-10'>
                <div className=' text-base-100 col-span-5 py-5'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold pb-5'>About Me</h2>
                    <p className='text-xl text-neutral'>I am a professional Software Developer in Front-end and Back-end Development with React JS, Next JS and WordPress. </p> <br />
                    <p className='text-neutral'>I am capable to make a mobile-friendly and faster responsive website. You can also get unique ideas about UX/UI Design from me. I have completed 30+ projects for various local clients. Also, I have expertise in creating an eCommerce website. I love my profession and building websites with my best efforts. I am also passionate to make Web Applications using React JS and Node JS.</p>
                </div>
                <div className='text-neutral col-span-7'>
                    <div className='grid gap-5 grid-cols-2 md:grid-cols-4 '>
                        {
                            skills.map((skill, index) =>
                                <>
                                    <Card className='' key={index} sx={{ background: '#252734', '&hover': { background: '#2A2C39' } }}>
                                        <div className='p-4  bg-primary group hover:bg-secondary'>
                                            {/* <Image src={skill.image} width='100' height='100' alt=''/> */}
                                            <img className='w-16 mx-auto' src={skill.image} alt="" />
                                            <div className='flex justify-center mt-2'>
                                                <CountUp
                                                    className='group-hover:text-base-100 font-bold text-2xl text-neutral'
                                                    start={0}
                                                    end={skill.count}
                                                    duration={3}
                                                    separator=" "
                                                    // decimals={4}
                                                    decimal=","
                                                    suffix="%"
                                                >
                                                </CountUp>
                                            </div>
                                            <p className='text-center font-semibold text-neutral group-hover:text-base-100'>{skill.name}</p>
                                        </div>
                                    </Card>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

const skills = [
    {
        name: 'HTML',
        image: '/images/icons/html.svg',
        count: '95'
    },
    {
        name: 'CSS',
        image: `/images/icons/css-alt.svg`,
        count: '90'
    },
    {
        name: 'JavaScript',
        image: `/images/icons/java-script.svg`,
        count: '80'
    },
    {
        name: 'TypeScript',
        image: `/images/icons/typescript-svgrepo-com.svg`,
        count: '50'
    },
    {
        name: 'PHP',
        image: `/images/icons/php.svg`,
        count: '50'
    },
    {
        name: 'ReactJS',
        image: `/images/icons/react.svg`,
        count: '90'
    },
    {
        name: 'Redux',
        image: `/images/icons/redux.svg`,
        count: '80'
    },
    {
        name: 'NodeJS',
        image: `/images/icons/node-js.svg`,
        count: '70'
    },
    {
        name: 'NextJS',
        image: `/images/icons/next-js.svg`,
        count: '60'
    },
    {
        name: 'MongoDB',
        image: `/images/icons/mongodb.svg`,
        count: '70'
    },
    {
        name: 'WordPress',
        image: `/images/icons/wordpress.svg`,
        count: '60'
    },
    {
        name: 'GitHub',
        image: `/images/icons/github-logo.svg`,
        count: '80'
    },
]