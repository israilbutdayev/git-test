import express from "express";
import child_process from "child_process";
import axios from 'axios'
import randomstring from "randomstring"
import SeedRandom from "seed-random";
console.log(SeedRandom('ajshcava'))
console.log(randomstring.generate());

  
const app = express();
const s = "b";
console.log("1", s);
console.log(axios.defaults)
app.get("/", (req, res) => {
  console.log("2", s);
  child_process.execSync("git pull")
  console.log("3", s);
  res.json({ mes: "ok" });
});

app.listen(3030);
