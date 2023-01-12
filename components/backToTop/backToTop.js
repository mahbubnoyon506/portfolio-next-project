
import React, { useState, useEffect } from 'react';
import { MdVerticalAlignTop } from 'react-icons/md';

const BackToTop = () => {
    const [backtoTop, setBacktoTop] = useState()
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setBacktoTop(true)
            } else {
                setBacktoTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            {
                backtoTop && <button className='m-1 w-10 h-10 bg-primary border border-neutral text-4xl fixed bottom-3 lg:bottom-10 right-3 lg:right-10 text-red-600 opacity-80 z-50' onClick={scrollUp}><MdVerticalAlignTop className='text-base-100 mx-auto' size={25}/></button>
            }

        </div>
    );
};

export default BackToTop;