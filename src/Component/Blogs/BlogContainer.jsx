import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleBlog, fetchRelatedBlogs } from '../../Helpers/Api'
import Sidebar from '../../Partials/Sidebar';
import { Circles } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

export default function BlogContainer() {
    var params = useParams();
    var [blog, setBlog] = useState(false);
    var [blogs, setBlogs] = useState([]);
    const [loadingImage, setLoadingImage] = useState(true);
    useEffect(() => {
        fetchSingleBlog(params.slug)
            .then(response => setBlog(response));
        fetchRelatedBlogs()
            .then(result => setBlogs(result));
    }, [params.slug]);

    function createMarkup(blog) {
        return { __html: blog.content.rendered };
    }
    function formatDate(date) {
        var d = new Date(date),
            month = d.toLocaleString('default', { month: 'long' }),
            day = d.getDate(),
            year = d.getFullYear();


        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return `${day} ${month}, ${year}`;
    }


    if (!blog) {
        return (
            <>
                <div className="container flex justify-center items-center mt-24">
                    <Circles
                        height="100"
                        width="100"
                        color="#DE5126"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            </>
        );
    }

    const handleImageLoad = () => {
        setLoadingImage(false);
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{blog.title.rendered} - z21 ventures</title>
                <link rel="canonical" href="https://z21.ventures/" />
                <meta name="description" content="z21 Ventures application" />
            </Helmet>
            <section className="w-screen h-auto py-12 md:py-24 px-10 md:px-20 bg-[#EFEFF1]">
                <div className="container flex justify-center">
                    <div className="w-[820px] mt-24">
                        <h2 className='text-xl md:text-4xl font-bold'>{blog.title.rendered}</h2>
                        <p className='text-base md:text-xl font-medium text-[#60646C] mt-4'>{formatDate(blog.modified)}</p>
                        {loadingImage && <Circles
                            height="80"
                            width="80"
                            color="#DE5126"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />}
                        <div className="w-full h-60 md:h-96 p-16 flex justify-center items-center bg-white mt-4 mb-8">
                            <img src={blog.fimg_url} onLoad={handleImageLoad} alt={blog.title.rendered} className=' ' />
                        </div>
                        <hr className='border-[1px] border-[#CED0D4]' />
                        <p className='text-base md:text-xl font-normal text-[#515B70] mt-8' dangerouslySetInnerHTML={createMarkup(blog)}></p>
                    </div>
                </div>
            </section>
        </>
    )
}
