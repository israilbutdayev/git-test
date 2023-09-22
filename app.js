import express from "express";
import child_process from "child_process";
import sharp from "sharp";

const app = express();
const s = "b";
console.log("1", s);
console.log(sharp({text:"apple"}))
app.get("/", (req, res) => {
  console.log("2", s);
  child_process.execSync("git pull && npm install && npm start")
  console.log("3", s);
  res.json({ mes: "ok" });
});

app.listen(3030);
