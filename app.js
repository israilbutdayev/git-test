import express from "express";
import child_process from "child_process";
const app = express();

console.log('d')

app.get("/", () => {
  child_process.execSync("git pull && npm install && npm start");
});

app.listen(3030);
