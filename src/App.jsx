import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Partials/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import Z21Thesis from "./Component/Z21Thesis/Z21ThesisHero.jsx";
import AboutUs from "./Component/AboutUs/AboutUs.jsx";
import Community from "./Component/Community/Community.jsx";
import PortfolioCompanies from "./Component/PortfolioCompanies/PortfolioCompanies.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Blogs from "./Component/Blogs/Blogs.jsx";
import BlogContainer from "./Component/Blogs/BlogContainer.jsx";
import ScrollToTop from "./Partials/ScrollToTop.jsx";
import ContactUs from "./Component/ContactUs/ContactUs.jsx";
import PageNotFound from "./Partials/PageNotFound.jsx";

function App() {
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    const location = window.location.pathname;
    setIsContactPage(location === '/contactus' );
  }, [window.location.pathname]);
  
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Router>
        <ScrollToTop />
        <Sidebar />
        <main className="max-w-screen-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thesis" element={<Z21Thesis />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/portfolio" element={<PortfolioCompanies />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogContainer />} />
            <Route path="/contactus" element={<ContactUs />} />

            <Route path="*" element={<PageNotFound/>}></Route>
          </Routes>
        </main>
        {!isContactPage && <Footer />}
      </Router>
    </div>
  );
}

export default App;
