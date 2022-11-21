import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { deleteBlog, getBlogs, getSingleBlog } from "../redux/Slice";
import EditModal from "./EditModal";
import ConfirmPopup from "./ConfirmPopup";

const Home = () => {
  const [editModal, setEditModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState("");
  const { blogs } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const Update = (blogId) => {
    setId(blogId);
    setEditModal(true);
  };
  const confirmPopup = (blogId) => {
    setId(blogId);
    setConfirm(true);
  };

  return (
    <>
      <Header />
      <>
        {blogs.map((item) => (
          <div key={item._id} className="mt-8  ">
            <div>
              <h1 className="font-bold underline text-center">{item.title}</h1>
            </div>
            <div className="m-6 text-center">
              <p>{item.content}</p>
            </div>
            <div className="flex justify-center m-2 ">
              <button
                className="w-24 bg-yellow-500 mr-2"
                onClick={() => {
                  Update(item._id);
                }}
              >
                Edit
              </button>
              <button
                className="w-24 bg-cyan-500"
                onClick={() => confirmPopup(item._id)}
              >
                Delete
              </button>
            </div>
            <hr />
          </div>
        ))}
      </>
      {editModal && <EditModal setEditModal={setEditModal} id={id} />}
      {confirm && <ConfirmPopup setConfirm={setConfirm} id={id} />}
    </>
  );
};

export default Home;
