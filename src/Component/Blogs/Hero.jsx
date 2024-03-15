import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import { Circles } from 'react-loader-spinner';
import { fetchBlogs } from '../../Helpers/Api';
// import Blog1 from './images/blog1.png';

export default function Hero() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs()
            .then(result => {
                setBlogs(result);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
                setLoading(false);
            });
    }, []);

    // If there are no blogs fetched, render loading spinner
    if (loading) {
        return (
            <section className="w-screen h-screen flex justify-center items-center bg-black">
                <Circles
                    height="80"
                    width="80"
                    color="#DE5126"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </section>
        );
    }

    // If there are blogs fetched, display the first blog post
    const firstBlog = blogs[0];

    return (
        <section className="w-screen py-16 md:py-40 px-10 md:px-20 mt-12 bg-black">
            <div className="container">
                <div className="flex">
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="md:w-1/2 h-60 md:h-96 bg-white p-16 flex justify-center items-center">
                            <img src={firstBlog.fimg_url} alt="Hero Blog Image" className='' />
                        </div>
                        <div className="md:w-1/2 md:pl-16">
                            <p className=" text-base lg:text-2xl font-normal font-kalnia text-[#DE5126]">New</p>
                            <h1 className="text-white mt-4 text-2xl lg:text-6xl font-semibold font-arimo overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-3">{firstBlog.title.rendered}</h1>
                            <Link to={`/blog/${firstBlog.slug}`} className="text-base lg:text-lg font-semibold font-arimo flex items-center mt-8 text-[#DE5126]">
                                Read More <MdArrowOutward />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
