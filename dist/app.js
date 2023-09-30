import express from "express";
import child_process from "child_process";
import randomstring from "randomstring";
const app = express();
app.get("/", (req, res) => {
    const s = randomstring.generate(20);
    child_process.execSync("git pull");
    res.json({ mes: s });
});
app.listen(3020);
