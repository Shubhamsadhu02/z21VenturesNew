import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function BlogCards({ thumbnail, slug, title }) {
    return (
        <div className="flex flex-col items-start gap-[15px] p-8 transition duration-300 ease-in-out hover:shadow-lg hover:p-5 rounded-md group">
            <div className="">
                <img src={thumbnail} alt="" />
            </div>
            <div className="">
                <p className='text-base lg:text-2xl font-medium overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-1'>{title}</p>
            </div>
            <Link to={"/blog/"+slug} className="text-base lg:text-lg font-semibold flex items-center text-[#DE5126]">
                Read More <MdArrowOutward />
            </Link>
        </div>
    )
}
