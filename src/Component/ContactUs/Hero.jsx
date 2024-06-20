import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ContactUsBg from "../ContactUs/ContactusBg.png";
import { FiPaperclip } from "react-icons/fi";
import { MdOutlineClose, MdOutlineInsertLink } from "react-icons/md";
import Modal from "react-modal";
import { RiCheckboxCircleFill } from "react-icons/ri";

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

      setFormData({
        ...formData,
        attachment: file,
      });
    } else {
      setFileName("");
      setFileAttached(false);
      setFormData({
        ...formData,
        attachment: null,
      });
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
    setLinkName(e.target.elements.linkName.value);
    setUrlLink(e.target.elements.urlLink.value);
    setFormData({
      ...formData,
      linkName: e.target.elements.linkName.value,
      urlLink: e.target.elements.urlLink.value,
    });
    closeModal();
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    description: '',
    attachment: '',
    urlLink: '',
    linkName: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('urlLink', formData.urlLink);
    formDataToSend.append('linkName', formData.linkName);

    if (formData.attachment) {
      formDataToSend.append('attachment', formData.attachment);
    }

    try {
      const response = await fetch('./php/index.php', {
        method: 'POST',
        body: formDataToSend,
      });

      const responseData = await response.json();
      if (response.ok && responseData.success) {
        console.log('Form submitted successfully');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          description: '',
          attachment: null,
          urlLink: '',
          linkName: '',
        });
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFileName("");
          setFileAttached(false);
          setLinkName("");
        }, 3000);
      } else {
        console.log('Form submission failed');
      }
    } catch (error) {
      console.log('An error occurred. Please try again later.');
    }
    console.log(formData);
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
          {isSubmitted ? (
            <div className=" flex justify-center items-center md:w-1/2 h-[450px]">
              <div className=" flex justify-center items-center flex-col">
                <RiCheckboxCircleFill className="text-white w-16 h-16" />
                <p className=" text-white text-xl font-bold font-arimo">Form Submitted!</p>
              </div>
            </div>
          ) : (
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
                    name='fullName' value={formData.fullName} onChange={handleChange}
                    required
                    className=" w-full bg-inherit font-arimo text-white text-base md:text-lg font-normal border-b-2 border-b-[#60646C] my-4 md:my-6 focus:outline-none p-3 md:p-5"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name='email' value={formData.email} onChange={handleChange}
                    required
                    className="w-full bg-inherit font-arimo text-white text-base md:text-lg font-normal border-b-2 border-b-[#60646C] my-4 md:my-6 focus:outline-none p-3 md:p-5"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    name='subject' value={formData.subject} onChange={handleChange}
                    required
                    className="w-full bg-inherit font-arimo text-white text-base md:text-lg font-normal border-b-2 border-b-[#60646C] my-4 md:my-6 focus:outline-none p-3 md:p-5"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    id="description"
                    name='description' value={formData.description} onChange={handleChange}
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
                            name='attachment' value={formData.attachment} 
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
                    value={formData.linkName} onChange={handleChange}
                    //   id="nameLink"
                    className="w-full bg-inherit font-arimo text-black text-base md:text-xl font-normal border-b-2 border-b-[#60646C] my-7 focus:outline-none p-3 md:p-5"
                  />
                  <input
                    name="urlLink"
                    type="url"
                    value={formData.urlLink} onChange={handleChange}
                    //   id="urlLink"
                    placeholder="Paste Link Here"
                    className="w-full bg-inherit font-arimo text-black text-base md:text-xl font-normal border-b-2 border-b-[#60646C] my-7 focus:outline-none p-3 md:p-5"
                  />
                  <button
                    type="submit"
                    // onClick={closeModal}
                    className="flex justify-center items-center mt-10 bg-[#EFEFF1] p-3 md:p-5 w-full text-base md:text-lg font-semibold font-arimo">
                    Submit
                  </button>
                </form>
              </Modal>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
