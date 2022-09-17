const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://nooribrahim:QwertY%402003@cluster0.pzmw379.mongodb.net/book_keeping_app",
      {}
    )
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};


module.exports = dbConnect;