const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const products = require("./Routes/product");
const orders = require("./Routes/order");
const connectDatabase = require("./config/connectDatabase");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });


app.use("/api/v1/", products);
app.use("/api/v1/", orders);
connectDatabase()
app.listen(process.env.PORT, () => {
  console.log(
    `Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
