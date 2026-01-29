const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/students", require("./routes/student.routes"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000 ");
});
