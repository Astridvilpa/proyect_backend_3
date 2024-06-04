const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database/db");
const serviceController = require("./controllers/serviceController");
const artistController = require("./controllers/artistController");

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

//SERVICE ENDPOINTS
app.post("/api/services", serviceController.create);
app.get("/api/services", serviceController.getAll);
app.get("/api/services/:id", serviceController.getById);
app.put("/api/services/:id", serviceController.update);
app.delete("/api/services/:id", serviceController.delete);

//ARTIST ENDPOINTS
app.post("/api/artists", artistController.create);
app.get("/api/artists", artistController.getAll);
app.get("/api/artists/:id", artistController.getById);
app.put("/api/artists/:id", artistController.update);
app.delete("/api/artists/:id", artistController.delete);


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
