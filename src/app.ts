import express from "express";
import child_process from "child_process";
import Jimp from "jimp";
import randomstring from "randomstring";
console.log(randomstring.generate())
console.log((await Jimp.create(10,10)).bitmap.height)
const app = express();
const s = "b";
console.log("1", s);
app.get("/", (req, res) => {
  console.log("2", s);
  child_process.execSync("git pull")
  console.log("3", s);
  res.json({ mes: s });
});

app.listen(3020);
