import express from "express";
import child_process from "child_process";
const app = express();
const s = 3
console.log(s);

app.get("/", (req, res) => {
  console.log(s + 1);
  child_process.execSync("git pull && npm install && npm start");
  res.json({ mes: "ok" });
});

app.listen(3030);
