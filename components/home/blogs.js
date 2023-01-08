import { Button, Card } from '@mui/material';
import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-secondary p-5 md:p-10 lg:p-20'>
            <h2 className='text-5xl font-semibold pb-5'>Recent Blogs</h2>
            <div className=''>
                {
                    blogs.slice(0, 2).map((blog) =>
                        <>
                            <div className='mb-10'>
                                <Card sx={{ background: '#252734', padding: '50px' }}>
                                    <div className='grid grid-cols-3 items-center'>
                                        <div className='mr-10 col-span-1'>
                                            <img src={blog.image} alt="" />
                                        </div>
                                        <div className='text-base-100 col-span-2'>
                                            <h2 className='text-2xl font-semibold pb-3'>{blog.title}</h2>
                                            <p className='text-neutral pb-3'>{blog.description}</p>
                                            <Button variant='contained'>Read More</Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Blogs;

const blogs = [
    {
        "id": 1,
        "title": "This is our first post",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, adipisci, perspiciatis nostrum nisi dolorum accusantium tempora corrupti assumenda aliquam at unde error placeat iste quidem? Cupiditate excepturi voluptate laborum odit.",
        "image": "https://i.ibb.co/5BnqhtL/breeze-time.png"
    },
    {
        "id": 2,
        "title": "This is our second post",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, adipisci, perspiciatis nostrum nisi dolorum accusantium tempora corrupti assumenda aliquam at unde error placeat iste quidem? Cupiditate excepturi voluptate laborum odit.",
        "image": "https://i.ibb.co/SXkt6W5/John-Deere.png"
    },
    {
        "id": 3,
        "title": "This is our third post",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, adipisci, perspiciatis nostrum nisi dolorum accusantium tempora corrupti assumenda aliquam at unde error placeat iste quidem? Cupiditate excepturi voluptate laborum odit.",
        "image": "https://i.ibb.co/10Ny4R6/Honda-Auto-Parts-Warehouse.png"
    },
    {
        "id": 4,
        "title": "This is our fourth post",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, adipisci, perspiciatis nostrum nisi dolorum accusantium tempora corrupti assumenda aliquam at unde error placeat iste quidem? Cupiditate excepturi voluptate laborum odit.",
        "image": "https://i.ibb.co/JzkXnKw/electro-home.png"
    },
]
