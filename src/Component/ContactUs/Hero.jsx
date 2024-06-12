import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ContactUsBg from "../ContactUs/ContactusBg.png";
import { FiPaperclip } from "react-icons/fi";
import { MdOutlineClose, MdOutlineInsertLink } from "react-icons/md";
import Modal from "react-modal";
import { handleFormSubmit } from "../../Helpers/Api";

export default function Hero() {
  const [fileAttached, setFileAttached] = useState(false);
  const [fileName, setFileName] = useState("");
  const [linkName, setLinkName] = useState("");
  const [urlLink, setUrlLink] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileAttached(true);
      setLinkName("");
    } else {
      setFileName("");
      setFileAttached(false);
    }
  };

  const handleAttachFileClick = () => {
    document.getElementById("attachment").click();
  };

  const handleAddLinkClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmitLink = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.linkName.value);
    setLinkName(e.target.elements.linkName.value);
    setUrlLink(e.target.elements.url.value);
    closeModal();
  };

  return (
    <section
      className="relative w-screen bg-black bg-no-repeat bg-right md:bg-cover py-16 md:py-28 px-5 md:px-20"
      style={{ backgroundImage: `url(${ContactUsBg})` }}>
      <div className="container">
        <div className="md:flex w-full">
          <motion.div
            className=" md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}>
            <motion.h1
              className="text-4xl md:text-8xl font-arimo font-bold leading-tight text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}>
              Contact Us
            </motion.h1>
          </motion.div>
          <motion.div className=" md:w-1/2">
            <form onSubmit={handleFormSubmit}>
              <div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}>
                <input
                  type="hidden"
                  name="nameLink"
                  id="nameLink"
                  value={linkName}
                />
                <input
                  type="hidden"
                  name="urlLink"
                  id="urlLink"
                  value={urlLink}
                />
                <input
                  type="text"
                  placeholder="Name"
                  id="fullName"
                  required
                  className=" w-full bg-inherit font-arimo text-white text-base md:text-lg font-normal border-b-2 border-b-[#60646C] my-4 md:my-6 focus:outline-none p-3 md:p-5"
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  required
                  className="w-full bg-inherit font-arimo text-white text-base md:text-lg font-normal border-b-2 border-b-[#60646C] my-4 md:my-6 focus:outline-none p-3 md:p-5"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  required
                  className="w-full bg-inherit font-arimo text-white text-base md:text-lg font-normal border-b-2 border-b-[#60646C] my-4 md:my-6 focus:outline-none p-3 md:p-5"
                />
                <input
                  type="text"
                  placeholder="Description"
                  id="description"
                  required
                  className="w-full bg-inherit font-arimo text-white text-base md:text-lg font-normal border-b-2 border-b-[#60646C] my-4 md:my-6 focus:outline-none p-3 md:p-5"
                />
                <div class="">
                  <div class="w-full flex justify-between border-b-2 border-b-[#60646C] my-7">
                    {fileAttached ? (
                      <span className="bg-inherit text-white text-xl font-normal p-5">
                        {linkName || fileName}
                        <input
                          type="file"
                          id="attachment"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </span>
                    ) : (
                      <label
                        htmlFor="attachment"
                        className="bg-inherit text-white text-base md:text-lg font-normal p-3 md:p-5 cursor-pointer">
                        {linkName ? linkName : "Attach file or link"}
                        <input
                          type="file"
                          id="attachment"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    )}
                    <div className="flex">
                      <button
                        type="button"
                        id="attachment"
                        onClick={handleAttachFileClick}
                        className="px-3 py-1 text-white text-xl focus:outline-none">
                        <FiPaperclip />
                      </button>
                      <button
                        type="button"
                        id="addLink"
                        onClick={handleAddLinkClick}
                        className="ml-2 px-3 py-1 text-white text-xl focus:outline-none">
                        <MdOutlineInsertLink />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex justify-center items-center mt-10 bg-[#EFEFF1] p-3 md:p-5 w-full text-base md:text-lg font-semibold font-arimo">
                  Submit
                </button>
              </div>
            </form>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Add Link Modal"
              className="w-1/2 h-auto bg-white p-10"
              style={{
                overlay: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                content: {
                  width: "100%",
                  maxWidth: "600px",
                  maxHeight: "80%",
                  margin: "auto",
                  borderRadius: "10px",
                  overflow: "auto",
                  marginTop: "8rem",
                },
              }}
              ariaHideApp={false}>
              <div className="flex justify-between border-b-[1px] border-b-[#60646C] py-3 md:py-7 mb-10">
                <h2 className="text-lg md:text-4xl font-semibold font-arimo">
                  Add link
                </h2>
                <button onClick={closeModal} className="text-4xl font-semibold">
                  <MdOutlineClose />
                </button>
              </div>
              <form onSubmit={handleSubmitLink}>
                <input
                  name="linkName"
                  type="text"
                  placeholder="Name Link"
                  //   id="nameLink"
                  className="w-full bg-inherit font-arimo text-black text-base md:text-xl font-normal border-b-2 border-b-[#60646C] my-7 focus:outline-none p-3 md:p-5"
                />
                <input
                  name="url"
                  type="url"
                  //   id="urlLink"
                  placeholder="Paste Link Here"
                  className="w-full bg-inherit font-arimo text-black text-base md:text-xl font-normal border-b-2 border-b-[#60646C] my-7 focus:outline-none p-3 md:p-5"
                />
                <button
                  type="submit"
                  //   onClick={closeModal}
                  className="flex justify-center items-center mt-10 bg-[#EFEFF1] p-3 md:p-5 w-full text-base md:text-lg font-semibold font-arimo">
                  Submit
                </button>
              </form>
            </Modal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
