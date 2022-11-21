const express = require("express");
const morgan = require("morgan");
const dbConnect = require("./config/db");
const cors = require("cors");
const blogRouter = require("./routes/blogRouer");

const app = express();
dbConnect();
//middlewares
app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("common"));

//routing middleware
app.use("/api/blog", blogRouter);

//backend port
app.listen(8800, () => {
  console.log("Backend running...");
});
