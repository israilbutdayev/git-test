import express from "express";
import child_process from "child_process";
const app = express();

app.get("/", () => {
    console.log('a')
  child_process.execSync("git pull && npm install && npm start");
});

app.listen(3030);
