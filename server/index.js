import express from "express";
const appv = express();
appv.get("/hi", (req, res) => {
  res.send("hello");
});

appv.listen(4000);
