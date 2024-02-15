import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import { Circles } from 'react-loader-spinner';
import { fetchBlogs } from '../../Helpers/Api';

export default function LatestBlogs() {
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

    return (
        <section className="w-screen h-auto py-24 px-20 bg-[#EFEFF1]">
            <div className="container">
                <div className="">
                    <h2 className='text-8xl font-semibold'>Latest Blogs</h2>
                </div>
                <div className="grid grid-cols-3 gap-12 mt-20">
                    {loading ? (
                        <Circles
                            height="80"
                            width="80"
                            color="#DE5126"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    ) : (
                        blogs.map(blog => (
                            <BlogCards
                                key={blog.id}
                                thumbnail={blog.fimg_url}
                                title={blog.title.rendered}
                                slug={blog.slug}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
