const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
  try {
    const blog = await new Blog(req.body).save();
    res.json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getABlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.json({ id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updated);
    res.json(updated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getABlog,
  editBlog,
  deleteBlog,
};
