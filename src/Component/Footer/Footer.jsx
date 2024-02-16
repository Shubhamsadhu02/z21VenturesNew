import React from 'react'
import FooterBG from "../Footer/Footer.png";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="w-screen pt-24" style={{ background: "EFEFF1" }}>
            <div className="container">
                <div className="w-full flex px-10 md:px-20">
                    <div className="md:w-1/2"></div>
                    <div className="md:w-1/2 md:flex">
                        <div className="w-1/2">
                            <ul className=' border-l-2 border-[#DE5126] pl-4 '>
                                <Link to={"/aboutus"}><li className='text-base md:text-xl font-arimo font-semibold mb-3'>About us</li></Link>
                                <Link to={"/thesis"}><li className='text-base md:text-xl font-arimo font-semibold mb-3'>z21 Thesis</li></Link>
                            </ul>
                            <ul className='mt-8 border-l-2 border-[#DE5126] pl-4'>
                                <Link to={"/portfolio"}><li className='text-base md:text-xl font-arimo font-semibold mb-3'>Portfolio</li></Link>
                                <Link to={"/community"}><li className='text-base md:text-xl font-arimo font-semibold mb-3'>Community</li></Link>
                                <Link to={"/blogs"}><li className='text-base md:text-xl font-arimo font-semibold mb-3'>Blogs</li></Link>
                            </ul>
                        </div>
                        <div className="my-8 md:my-0 md:w-1/2">
                            <p className='text-base md:text-xl font-arimo font-semibold'>© Copyright | Z21 Ventures</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={FooterBG} alt="Footer" />
                </div>
            </div>
        </section>
    )
}
