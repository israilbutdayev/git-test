import express from "express";
import child_process from "child_process";
  
const app = express();
const s = "d";
console.log("1", s);
app.get("/", (req, res) => {
  console.log("2", s);
  child_process.execSync("git pull")
  console.log("3", s);
  res.json({ mes: "ok" });
});

app.listen(3030);
