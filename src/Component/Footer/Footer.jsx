import React from 'react'
import FooterBG from "../Footer/Footer.png";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="w-screen pt-24" style={{ background: "EFEFF1" }}>
            <div className="container">
                <div className="w-full flex px-20">
                    <div className="w-1/2"></div>
                    <div className="w-1/2 flex">
                        <div className="w-1/2">
                            <ul className=' border-l-2 border-[#DE5126] pl-4 '>
                                <Link><li className='text-xl font-semibold mb-3'>About us</li></Link>
                                <Link><li className='text-xl font-semibold mb-3'>z21 Thesis</li></Link>
                            </ul>
                            <ul className='mt-8 border-l-2 border-[#DE5126] pl-4'>
                                <Link><li className='text-xl font-semibold mb-3'>Portfolio</li></Link>
                                <Link><li className='text-xl font-semibold mb-3'>Community</li></Link>
                                <Link><li className='text-xl font-semibold mb-3'>Blogs</li></Link>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <p className='text-xl font-semibold'>© Copyright | Z21 Ventures</p>
                        </div>
                    </div>
                </div>
                <div className=" mt-16">
                    <img src={FooterBG} alt="Footer" />
                </div>
            </div>
        </section>
    )
}
