import React from 'react'
import Error from "./error.png";
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <>
            <section className='h-screen w-screen bg-black bg-no-repeat bg-cover bg-center py-16 md:py-28 px-5 md:px-20'>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <img src={Error} alt="" className=' md:w-2/5 h-auto px-8 mt-12 md:mt-0 grayscale' />
                        <h2 className='text-white text-xl md:text-7xl mt-7 font-arimo'>Page Not Found</h2>
                        <Link to={"/"}><h5 className='text-white text-xl mt-7 cursor-pointer underline font-kalnia' >Go Back To Home</h5></Link>
                    </div>
                </div>
            </section>
        </>
    )
}