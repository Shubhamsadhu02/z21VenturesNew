import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function BlogCards({ thumbnail, slug, title }) {
    return (
        <div className="flex flex-col items-start gap-[19px] ">
            <div className="mix-blend-luminosity">
                <img src={thumbnail} alt="" />
            </div>
            <div className="">
                <p className='text-base md:text-2xl font-medium overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-1'>{title}</p>
            </div>
            <Link to={"/blog/"+slug} className="text-base md:text-lg font-semibold flex items-center mt-2 md:mt-8 text-[#DE5126]">
                Read More <MdArrowOutward />
            </Link>
        </div>
    )
}
