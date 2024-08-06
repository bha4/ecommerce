const express = require("express");
const { createOrder } = require("../controllers/orderControllers");
const router = express();

router.route("/order").post(createOrder);

module.exports =router;
