const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Collection");
const { UserModel } = require("./UserSchema");
const { ProductModel } = require("./ProductSchema");
const { authMiddleware, loggerMiddleware } = require("./middlewares");

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.post("/signup", async (req, res) => {
  let data = new UserModel(req.body);
  let result = await data.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  let user = await UserModel.findOne(req.body);
  if (user) {
    res.send(`login successful!
            Secret token : secret1234`);
  } else {
    res.send("login failed!");
  }
});

app.get("/products", authMiddleware, async (req, res) => {
  let data = await ProductModel.find();
  res.send(data);
});

app.post("/products/create", authMiddleware, async (req, res) => {
  let data = new ProductModel(req.body);
  let result = await data.save();
  res.send(result);
});

app.put("/products/:productID", authMiddleware, async (req, res) => {
  let { productID } = req.params;
  let result = await ProductModel.findByIdAndUpdate(productID, req.body);
  res.send(result);
});

app.delete("/products/:productID", authMiddleware, async (req, res) => {
  let { productID } = req.params;
  let result = await ProductModel.findByIdAndDelete(productID);
  res.send(result);
});

app.listen(3000,()=>{console.log("hello")});
