const serviceController = {};
const { Service } = require("../models/index");

serviceController.create = async (req, res) => {
  const { service_name, description } = req.body;

  try {
    if (!service_name || !description) {
      res.status(400).json({
        success: true,
        message: "Invalid Information",
      });
      return;
    }
    await Service.create({
      service_name,
      description,
    });

    res.status(200).json({
      success: true,
      message: "Services created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating service",
      error: error.message,
    });
  }
};

serviceController.getAll = async (req, res) => {
  const services = await Service.findAll();
  res.status(200).json({
    success: true,
    message: "Services retreived successfully",
    data: services,
  });
};

serviceController.getById = async (req, res) => {
  const serviceId = req.params.id;

  const service = await Service.findByPk(serviceId);

  res.status(200).json({
    success: true,
    message: "Services retreived successfully",
    data: service,
  });
};

serviceController.update = async (req, res) => {
  const serviceId = req.params.id;
  const serviceData = req.body;

  await Service.update(serviceData, {
    where: {
      id: serviceId,
    },
  });

  res.status(200).json({
    success: true,
    message: "Services update successfully",
  });
};

serviceController.delete = async (req, res) => {
  const serviceId = req.params.id;

  await Service.destroy({
    where: {
      id: serviceId,
    },
  });

  res.status(200).json({
    success: true,
    message: "Services deleted successfully",
  });
};

module.exports = serviceController;
