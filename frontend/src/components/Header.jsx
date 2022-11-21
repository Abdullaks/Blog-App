import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import Modal from "./Modal";

const Header = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
    

      <nav className="w-full  bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex  justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Blog App
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              onClick={() => setModal(true)}
              href="#"
              className="text-gray-800 flex justify-center items-center  dark:text-white hover:bg-black-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <VscAdd />
              <span className="pl-2"> Add new</span>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          ></div>
        </div>
      </nav>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default Header;
