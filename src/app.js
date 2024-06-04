const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database/db");
const serviceController = require("./controllers/serviceController");

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
app.post("/api/services", serviceController.create);
app.get("/api/services", serviceController.getAll);
app.get("/api/services/:id", serviceController.getById);
app.put("/api/services/:id", serviceController.update);
app.delete("/api/services/:id", serviceController.delete);





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
