const artistController = {};
const { Artists } = require("../models/index");

artistController.create = async (req, res) => {
  const { name, Bio, Specialty } = req.body;

  try {
    if (!name || !Bio || !Specialty) {
      res.status(400).json({
        success: true,
        message: "Invalid Information",
      });
      return;
    }
    await Artists.create({
      name,
      Bio,
      Specialty,
    });

    res.status(200).json({
      success: true,
      message: "Artist created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating artist",
      error: error.message,
    });
  }
};

artistController.getAll = async (req, res) => {
  const artists = await Artists.findAll();
  res.status(200).json({
    success: true,
    message: "Artist retreived successfully",
    data: artists,
  });
};

artistController.getById = async (req, res) => {
  const artistId = req.params.id;

  const artists = await Artists.findByPk(artistId);

  res.status(200).json({
    success: true,
    message: "Artists retreived successfully",
    data: artists,
  });
};

artistController.update = async (req, res) => {
  const artistId = req.params.id;
  const artistData = req.body;

  await Artists.update(artistData, {
    where: {
      id: artistId,
    },
  });

  res.status(200).json({
    success: true,
    message: "Artists update successfully",
  });
};

artistController.delete = async (req, res) => {
    const artistId = req.params.id;
  
    await Artists.destroy({
      where: {
        id: artistId,
      },
    });
  
    res.status(200).json({
      success: true,
      message: "Artists deleted successfully",
    });
  };



module.exports = artistController;
