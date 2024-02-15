import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import { Circles } from 'react-loader-spinner';
import { fetchBlogs } from '../../Helpers/Api';

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
        <section className="w-screen py-24 px-20 bg-black">
            <div className="container">
                <div className="flex">
                    <div className="flex w-full">
                        <div className="w-1/2">
                            <img src={firstBlog.fimg_url} alt="" className="w-[650px] h-[427px] mix-blend-luminosity" />
                        </div>
                        <div className="w-1/2 pl-4">
                            <p className="text-2xl font-normal text-[#DE5126]">New</p>
                            <h1 className="text-white mt-4 text-[64px] font-semibold overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-3">{firstBlog.title.rendered}</h1>
                            <Link to={`/blog/${firstBlog.slug}`} className="text-lg font-semibold flex mt-8 text-[#DE5126]">
                                Read More <MdArrowOutward />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
