const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database/db")
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

//CRUD SERVICE

//create
app.post("/api/services", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Services created successfully",
  });
});

//get all

app.get("/api/services", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Services retreived successfully",
  });
});

// get by id
app.get("/api/services/:id", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Services retreived successfully",
  });
});

// update
app.put("/api/services/:id", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Services update successfully",
  });
});

// delete
app.delete("/api/services/:id", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Services deleted successfully",
  });
});



//star the server
sequelize
  .authenticate()
  .then(() => {
    console.log("Database authenticated");

    //star the server
    app.listen(PORT, () => {
      console.log(`server listening on port: ${PORT}`);
    });
  })
  .catch(() => {
    console.error("Error authenticating database");
  });