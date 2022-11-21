const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getABlog,
  editBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.post("/create", createBlog);
router.get("/", getAllBlogs);
router.delete("/delete/:id", deleteBlog);
router.get("/getABlog/:id", getABlog);
router.put("/edit/:id", editBlog);

module.exports = router;
