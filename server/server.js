const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const server = app.listen(port, async () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
  }
  /* eslint-enable no-console */
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error : ${err}`);

  server.close(() => process.exit(1));
});
