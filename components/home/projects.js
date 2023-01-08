import React from 'react';
import { Card } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper";

const Projects = () => {
    return (
        <div className='bg-primary p-5 md:p-10 lg:p-20'>
            <div className='flex justify-between pb-5'>
                <h2 className='text-5xl font-semibold pb-5'>Recent Projects</h2>
                <div className='flex justify-between'>
                    <div className='border-2 w-10 h-10 rounded-full flex justify-center items-center hover:bg-neutral hover:transition-all hover:ease-in-out hover:duration-500 hover:border-neutral mr-2'>
                        <FaAngleDoubleLeft />
                    </div>
                    <div className='border-2 w-10 h-10 rounded-full flex justify-center items-center hover:bg-neutral hover:transition-all hover:ease-in-out hover:duration-500 hover:border-neutral'>
                        <FaAngleDoubleRight />
                    </div>
                </div>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                freeMode={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[FreeMode, Pagination, Navigation]}
                // navigation={true}
                className="mySwiper">
                {
                    projects.map((project) =>
                        <>
                            <SwiperSlide>
                                <Card sx={{ background: '#282A37', padding: '50px 50px 0px' }}>
                                    <Link href='/'>
                                        <h2 className='text-3xl font-bold text-base-100'>{project.title}</h2 >
                                        <p className='text-neutral pt-2 pb-5'>{project.name}</p>
                                        <img src={project.images[0]} alt='' style={{ minHeight: '250px' }} />
                                    </Link>
                                </Card>
                            </SwiperSlide>
                        </>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Projects;

const projects = [
    {
        "id": 1,
        "name": "Schedule Management",
        "title": "Breeze Time",
        "homeImage": "https://i.ibb.co/5T3H8S2/breeze-time-home.png",
        "description": {
            "overview": "This project is used to maintain a schedule. Users can create an account, take a plan, and pay..",
            "features": "Authentication, Dashboard, Payment system, Verification with JWT, Private route, Email, Notification, Video Chat, Reviews, Chatbot, Time-zone, Private route.",
            "technologies": "React, Firebase, React-router-Dom, AXIOS, React-hook-form, React-query, Redux, Socket.io, Express, MongoDB, Tailwind, JWT, Stripe, Node Mailer, SendGrid."
        },
        "images": [
            "https://i.ibb.co/5BnqhtL/breeze-time.png",
            "https://i.ibb.co/9NzCjpB/dashboard-home.png",
            "https://i.ibb.co/5ngxgGt/add-new-event.png",
            "https://i.ibb.co/WpChLJQ/breeze-time-prize.png",
            "https://i.ibb.co/d0v92ZG/managing.png"
        ]
    },
    {
        "id": 2,
        "name": "Manufacturer Company",
        "title": "John Doeere",
        "homeImage": "https://i.ibb.co/rwZdwk2/manufecture-home.png",
        "description": {
            "overview": " This site is manufacturer based. Users can create an account, order products, and pay online.",
            "features": "Authentication, Dashboard, Stripe payment system, Verification with JWT, Private route.",
            "technologies": "React, Stripe, Firebase, React-router-Dom, AXIOS, React-hook-form, React-query, Express, MongoDB, Tailwind, JWT."
        },
        "images": [
            "https://i.ibb.co/SXkt6W5/John-Deere.png",
            "https://i.ibb.co/P14Tf3p/John-Deere-products.png",
            "https://i.ibb.co/dQXnwLs/John-Deere-manage-order.png"

        ]
    },
    {
        "id": 3,
        "name": "Warehouse Management",
        "title": "Honda Warehouse",
        "homeImage": "https://i.ibb.co/85QY5hn/warehouse-home.png",
        "description": {
            "overview": "This site is warehouse management. Users can create an account, order, or manage orders.",
            "features": "Firebase authentication, Dashboard, User verification with JWT, Private route.",
            "technologies": "React, Firebase, react-router Dom, AXIOS, React-query, Express, MongoDB, Tailwind, JWT."
        },
        "images": [
            "https://i.ibb.co/10Ny4R6/Honda-Auto-Parts-Warehouse.png",
            "https://i.ibb.co/S5fZd7F/honda-home.png",
            "ttps://i.ibb.co/VmYnT83/honda-manage-items.png"
        ]
    },
    {
        "id": 4,
        "name": "E-Commerce Site",
        "title": "Electro",
        "homeImage": "https://i.ibb.co/4RhjDTg/electro-home-page.png",
        "description": {
            "overview": "This site is an e-commerce site. All kinds of electronic items will get here. From this site, users can create an account. They can choose a product for the wishlist or add any items to the cart. They can check the added item in the cart. There's the dashboard where all overviews will show. All products, all orders, and all customers list will show there.",
            "features": "Authentication system, Wishlist, Add to Cart and cart calculation, Dashboard, Checkout.",
            "technologies": "React, React-router-dom, React-firebase-hooks, React-hook-form, React-icons, React-spinners, React-toastify, Axios, Json-server."
        },
        "images": [
            "https://i.ibb.co/JzkXnKw/electro-home.png",
            "https://i.ibb.co/djL40pf/single-view.png",
            "https://i.ibb.co/CMVGkv7/electro-cart.png",
            "https://i.ibb.co/fHHSz05/electro-calculation.png",
            "https://i.ibb.co/CMs0Jwj/electro-checkout.png"
        ]
    },
]