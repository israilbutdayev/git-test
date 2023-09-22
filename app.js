import express from "express";
import child_process from "child_process";
const app = express();

console.log('e')

app.get("/", (req, res) => {
  child_process.execSync("git pull && npm install && npm start");
  res.json({mes: 'ok'})
});

app.listen(3030);
