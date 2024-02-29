import React from "react";
import Hero from "./Hero";
import CommunityTeam from "./CommunityTeam";
import { Helmet } from "react-helmet";

const Community = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Community - z21 ventures</title>
        <link rel="canonical" href="https://z21.ventures/community" />
        <meta name="description" content="z21 Ventures application" />
      </Helmet>
      <Hero />
      <CommunityTeam/>
    </div>
  );
};

export default Community;
