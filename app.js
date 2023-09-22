import express from "express";
import child_process from "child_process";
import axios from 'axios'
import test from 'test'

test('synchronous passing test ', t => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(1, 1)
  })

  
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
