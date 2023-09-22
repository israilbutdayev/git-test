import express from "express";
import child_process from "child_process";
import Jimp from "jimp";

const app = express();
const s = "b";
console.log("1", s);
console.log((await Jimp.create(10,10)).bitmap.data)
app.get("/", (req, res) => {
  console.log("2", s);
  child_process.execSync("git pull")
  child_process.execSync("npm install && npm start");
  console.log("3", s);
  res.json({ mes: "ok" });
});

app.listen(3030);
