import React from "react";
import FooterBG from "../Footer/Footer.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section
      className="w-screen pt-12 md:pt-24 border-t-2 md:border-[#CED0D4] "
      style={{ background: "EFEFF1" }}>
      <div className="container relative">
        <div className="w-full flex md:justify-end px-10 md:px-20 mb-16 md:mb-48">
          <ul className="md:flex md:justify-between w-2/3">
            <Link to={"/aboutus"}>
              <li className="border-l-2 border-[#DE5126] pl-4 text-base md:text-xl font-arimo font-semibold mb-3">
                About us
              </li>
            </Link>
            <Link to={"/thesis"}>
              <li className="border-l-2 border-[#DE5126] pl-4 text-base md:text-xl font-arimo font-semibold mb-3">
                z21 Thesis
              </li>
            </Link>
            <Link to={"/portfolio"}>
              <li className="border-l-2 border-[#DE5126] pl-4 text-base md:text-xl font-arimo font-semibold mb-3">
                Portfolio
              </li>
            </Link>
            <Link to={"/community"}>
              <li className="border-l-2 border-[#DE5126] pl-4 text-base md:text-xl font-arimo font-semibold mb-3">
                Community
              </li>
            </Link>
            <Link to={"/blogs"}>
              <li className="border-l-2 border-[#DE5126] pl-4 text-base md:text-xl font-arimo font-semibold mb-3">
                Blogs
              </li>
            </Link>
          </ul>
        </div>
        <div className=" absolute right-0 bottom-20 md:bottom-1/3 px-10 md:px-20">
          <p className="text-base md:text-xl font-arimo font-semibold">
            © Copyright | Z21 Ventures
          </p>
        </div>
        <div className="border-b-4 border-[#bc3ba2] mb-3">
          <img src={FooterBG} alt="Footer" />
        </div>
      </div>
    </section>
  );
}
