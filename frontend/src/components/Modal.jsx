import React, { useState } from "react";
import axios from "axios";
import { createBlog } from "../redux/Slice";
import { useDispatch } from "react-redux";

const Modal = ({ setModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const { title, content } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      title,
      content,
    };
    dispatch(createBlog(userData));
    setModal(false);
  };

  return (
    <>
      <div>
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className=" overflow-y-auto overflow-x-hidden  fixed  bottom-4 top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative  mx-auto w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-white-400">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-black-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
                onClick={() => setModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="py-2 px-2 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-black">
                  Add to Blog list
                </h3>
                <form className="space-y-6" action="#" onSubmit={onSubmit}>
                  <div>
                    <label
                      htmlFor="title"
                      className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black-500 dark:placeholder-black-300 dark:text-black"
                      placeholder="Enter Title"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="content"
                      className="flex items-start  mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      TEXT
                    </label>
                    <input
                      type="text"
                      name="content"
                      id="content"
                      value={content}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black-500 dark:placeholder-black-300 dark:text-black"
                      placeholder="Enter Blog"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-900 "
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
