const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

//healthy
app.get("/api/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "My APP server is healthy",
  });
});

//star the server
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});

