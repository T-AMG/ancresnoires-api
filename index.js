const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/auth");

const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful!!!"))
  .catch((err) => console.log(err));

app.get("/api/test", () => {
  console.log("test is successful!!");
});
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is runing!");
});
