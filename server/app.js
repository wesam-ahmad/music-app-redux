const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const userRoute = require("./Routes/user.js");
const postRoute = require("./Routes/post.js");
const commentRoute = require("./Routes/comment.js");
const notFoundHandler = require("../server/Middelewares/404");
const errorHandler = require("../server/Middelewares/500");
const userRouter = require("../server/routes/UserRouter");

require("dotenv").config();

const middlewares = require("./middlewares");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello world welcome to the server",
  });
});

app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/comments", commentRoute);

app.use(userRouter);
app.use("*", notFoundHandler);
app.use(errorHandler);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
