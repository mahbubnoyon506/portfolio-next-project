import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { AiOutlineDownload } from 'react-icons/ai';
import { Button } from "@mui/material";


const Banner = () => {
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
        <>
            <div className="flex justify-center items-center" style={{ backgroundImage: 'url(https://i.ibb.co/fXJ04RH/bg-image2.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
                <div>
                    <div className='flex justify-center items-center'>
                        <Image
                            className='rounded-full'
                            priority
                            src="/images/me.jpg"
                            height={144}
                            width={144}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <p className="mt-4">I&apos;m</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold py-4">Mahbub Noyon</h2>
                        <h2 className="text-lg md:text-xl lg:text-2xl mb-2">Full-Stack Developer with  <span ref={el} /> </h2>
                        <Button sx={{ fontWeight: '500', background: "#E31EB3", '&:hover': {background: "#E31EB3"}}} variant="contained">Download <AiOutlineDownload size={20}/> </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner;