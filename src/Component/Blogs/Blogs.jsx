import React from 'react'
import Hero from './Hero';
import LatestBlogs from './LatestBlogs';
import { Helmet } from 'react-helmet';


export default function Blogs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs - z21 ventures</title>
        <link rel="canonical" href="https://z21.ventures/blogs" />
        <meta name="description" content="z21 Ventures application" />
      </Helmet>
        <Hero/>
        <LatestBlogs/>
    </div>
  )
}
