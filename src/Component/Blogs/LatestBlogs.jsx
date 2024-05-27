import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import { Circles, InfinitySpin } from "react-loader-spinner";
import { fetchBlogs } from "../../Helpers/Api";
import ReactPaginate from "react-paginate";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs()
      .then((result) => {
        setBlogs(result);
        console.log(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
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
    <section className="w-screen h-auto py-12 md:py-24 px-5 md:px-20 bg-[#EFEFF1]">
      <div className="container">
        <div className="">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-arimo font-semibold">
            Announcements
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-10 lg:mt-20">
          {loading ? (
            <>
              <section className="w-screen flex justify-center items-center">
                <InfinitySpin
                  visible={true}
                  width="200"
                  color="#DE5126"
                  ariaLabel="infinity-spin-loading"
                />
              </section>
            </>
          ) : (
            displayedBlogs.map((blog) => (
              <BlogCards
                key={blog.id}
                keys={blog.id}
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
          nextLabel={<GoArrowRight />}
          previousLabel={<GoArrowLeft />}
          className="flex justify-end text-lg items-center blogPagination mt-8"
        />
      </div>
    </section>
  );
}
