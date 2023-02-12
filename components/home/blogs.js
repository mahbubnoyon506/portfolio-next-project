import { Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';


const pageSize = 2;

const blogItems = {
    getData: ({from, to}) => {
        return new Promise((resolve, reject) => {
            const data = blogs.slice(from, to)
             resolve({
                count: blogs.length,
                data: data
             })

        })
    }
}

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
   const [pagination, setPagination] = useState({
      count: 0,
      from: 0,
      to: pageSize
   })
    useEffect( () => {
        blogItems.getData({from: pagination.from, to: pagination.to}).then(res => {
            // console.log(res)
            setPagination({...pagination, count: res.count})
            setBlogs(res.data)
        })
    }, [pagination.from, pagination.to])

    const handleChange = (e, page) => {
        const from = (page -1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;
        setPagination({...pagination, from: from, to: to})
    }

    return (
        <div id='blogs' className='bg-secondary p-5 md:p-10 lg:p-20'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold pb-5'>Recent Blogs</h2>
            <div className=''>
                {
                    blogs.map((blog) =>
                        <>
                            <div className='mb-10'>
                                <Card sx={{ background: '#252734' }}>
                                    <div className='md:grid grid-cols-3 items-center px-5 md:px-10 lg:px-16 py-5 md:py-8 lg:py-12'>
                                        <div className='md:mr-10 col-span-1 mb-3 md:mb-0'>
                                            <img src={blog.image} alt="" />
                                        </div>
                                        <div className='text-base-100 col-span-2'>
                                            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold pb-3'>{blog.title}</h2>
                                            <p className='text-neutral pb-3'>{blog.description}</p>
                                            <Button sx={{
                                                borderRadius: '0px',
                                                // padding: '8px 40px',
                                                border: '1px solid #65666D',
                                                color: '#65666D',
                                                fontWeight: '500',
                                                '&:hover': {
                                                    color: '#fff', border: '1px solid #fff', background: 'transparent'
                                                },
                                            }} variant='outlined'>Read More</Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='flex justify-end text-[#fff]'>
                <Pagination 
                style={{color: '#fff'}}
                count={Math.ceil(pagination.count / pageSize)} 
                variant="outlined" shape="rounded" 
                onChange={handleChange}
                />

            </div>
        </div>
    );
};

export default Blogs;

const blogs = [
    {
        "id": 1,
        "title": "This is schedule management site.",
        "description": "The name of this project is Breeze Time. This project is used to maintain a schedule. Users can use this site to set any schedule for the event. They can maintain their events and can invite anyone to their event. ",
        "image": "https://i.ibb.co/5BnqhtL/breeze-time.png"
    },
    {
        "id": 2,
        "title": "This project is about a Manufacture based website.",
        "description": "This site is manufacturer-based. On this site, users can create an account, order products, and pay online. They can check the shipping status and modify orders. Sellers can add, update or remove products. They can manage orders. None can order without having an account. Features: Firebase authentication, Dashboard for user and admin, Stripe payment system, User verification with JWT, Private route. Technology Used: React, Stripe, Firebase, React-router-dom, Axios, React-hook-form, React-query, Cors, Dotenv, Express, MongoDB, Tailwind, JWT",
        "image": "https://i.ibb.co/SXkt6W5/John-Deere.png"
    },
    {
        "id": 3,
        "title": "This project is about a warehouse management.",
        "description": "Visitors can create their own account, verify themself and managed their account as well In this site visitors can watch honda auto's available parts. They can find their desired parts. They can Add item to their wishlist. They can Manage their wished item",
        "image": "https://i.ibb.co/10Ny4R6/Honda-Auto-Parts-Warehouse.png"
    },
    {
        "id": 4,
        "title": "This is a simple e-commerce site.",
        "description": "This site is an e-commerce site. All kinds of electronic items will get here. From this site, users can create an account. They can choose a product for the wishlist or add any items to the cart. They can check the added item in the cart. There's the dashboard where all overviews will show. All products, all orders, and all customers list will show there.",
        "image": "https://i.ibb.co/JzkXnKw/electro-home.png"
    },
    {
        "id": 1,
        "title": "This is schedule management site.",
        "description": "The name of this project is Breeze Time. This project is used to maintain a schedule. Users can use this site to set any schedule for the event. They can maintain their events and can invite anyone to their event. ",
        "image": "https://i.ibb.co/5BnqhtL/breeze-time.png"
    },
    {
        "id": 2,
        "title": "This project is about a Manufacture based website.",
        "description": "This site is manufacturer-based. On this site, users can create an account, order products, and pay online. They can check the shipping status and modify orders. Sellers can add, update or remove products. They can manage orders. None can order without having an account. Features: Firebase authentication, Dashboard for user and admin, Stripe payment system, User verification with JWT, Private route. Technology Used: React, Stripe, Firebase, React-router-dom, Axios, React-hook-form, React-query, Cors, Dotenv, Express, MongoDB, Tailwind, JWT",
        "image": "https://i.ibb.co/SXkt6W5/John-Deere.png"
    },
    {
        "id": 3,
        "title": "This project is about a warehouse management.",
        "description": "Visitors can create their own account, verify themself and managed their account as well In this site visitors can watch honda auto's available parts. They can find their desired parts. They can Add item to their wishlist. They can Manage their wished item",
        "image": "https://i.ibb.co/10Ny4R6/Honda-Auto-Parts-Warehouse.png"
    },
    {
        "id": 4,
        "title": "This is a simple e-commerce site.",
        "description": "This site is an e-commerce site. All kinds of electronic items will get here. From this site, users can create an account. They can choose a product for the wishlist or add any items to the cart. They can check the added item in the cart. There's the dashboard where all overviews will show. All products, all orders, and all customers list will show there.",
        "image": "https://i.ibb.co/JzkXnKw/electro-home.png"
    },
]
