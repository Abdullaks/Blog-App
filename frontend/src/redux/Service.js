import axios from "axios";
const API_URL = "http://localhost:8800/api/blog";

const createBlog = async (blogData) => {
  const response = await axios.post(`${API_URL}/create`, blogData);
  return response.data;
};

const getBlogs = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
};

//delete blog
const deleteBlog= async (blogId) => {
    const response = await axios.delete(`${API_URL}/delete/${blogId}`);
    return response.data;
};

const getSingleBlog = async (blogId) => {
    const response = await axios.get(`${API_URL}/getABlog/${blogId}`);
    return response.data;
};

const editBlog = async (blogData) => {
      console.log(blogData);
      const { id } = blogData;

  const response = await axios.put(`${API_URL}/edit/${id}`, blogData);
  return response.data;
};

const Service = {
  createBlog,
  getBlogs,
  deleteBlog,
  getSingleBlog,
  editBlog,
};

export default Service;
