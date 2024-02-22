import React from 'react'
import { useNavigate } from 'react-router-dom';
import Error from "./error.png";

export default function PageNotFound() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return (
        <>
            <section className='h-screen w-screen bg-black bg-no-repeat bg-cover bg-center py-16 md:py-28 px-10 md:px-20'>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <img src={Error} alt="" className=' md:w-2/5 h-auto px-8 mt-12 md:mt-0 grayscale' />
                        <h2 className='text-white text-xl md:text-7xl mt-7 font-arimo'>Page Not Found</h2>
                        <h5 className='text-white text-xl mt-7 cursor-pointer underline font-kalnia' onClick={handleBack}>Go Back To Home</h5>
                    </div>
                </div>
            </section>
        </>
    )
}