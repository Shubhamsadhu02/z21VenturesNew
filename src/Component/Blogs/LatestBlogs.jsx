import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import { Circles } from 'react-loader-spinner';
import { fetchBlogs } from '../../Helpers/Api';
import ReactPaginate from 'react-paginate';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

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

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const displayedBlogs = blogs.slice(offset, offset + itemsPerPage);

    return (
        <section className="w-screen h-auto py-12 md:py-24 px-10 md:px-20 bg-[#EFEFF1]">
            <div className="container">
                <div className="">
                    <h2 className='text-4xl md:text-8xl font-semibold'>Latest Blogs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 md:mt-20">
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
                        displayedBlogs.map(blog => (
                            <BlogCards
                                key={blog.id}
                                thumbnail={blog.fimg_url}
                                title={blog.title.rendered}
                                slug={blog.slug}
                            />
                        ))
                    )}
                </div>
                <ReactPaginate
                        pageCount={Math.ceil(blogs.length / itemsPerPage)}
                        breakLabel="..."
                        pageRangeDisplayed={false}
                        marginPagesDisplayed={0}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        subContainerClassName="pages pagination"
                        activeClassName="active"
                        nextLabel= {<GoArrowRight />}
                        previousLabel= {<GoArrowLeft />}
                        className='flex justify-end text-lg items-center blogPagination mt-8'
                    />
            </div>
        </section>
    );
}
