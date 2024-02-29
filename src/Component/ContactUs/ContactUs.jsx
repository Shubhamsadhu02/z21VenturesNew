import React from 'react'
import Hero from './Hero'
import { Helmet } from 'react-helmet'

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ContactUs - z21 ventures</title>
        <link rel="canonical" href="https://z21.ventures/" />
        <meta name="description" content="z21 Ventures application" />
      </Helmet>
      <Hero />
    </>
  )
}
