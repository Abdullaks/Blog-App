const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/Blog-app", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("DB Connetion Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};
module.exports = dbConnect;
