const appointmentController = {};
const { User, Appointment, Service, Artists } = require("../models/index");

appointmentController.create = async (req, res) => {
  const { appointment_date, user_id, service_id, artist_id } = req.body;

  try {
    if (!appointment_date || !user_id || !service_id || !artist_id) {
      res.status(400).json({
        success: true,
        message: "Invalid Information",
      });
      return;
    }

    await Appointment.create({
      appointment_date,
      user_id,
      service_id,
      artist_id,
    });

    res.status(200).json({
      success: true,
      message: "Appointment created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating appointment",
      error: error.message,
    });
  }
};


appointmentController.update = async (req, res) => {
    const appointmentId = req.params.id;
    const appointmentData = req.body;
  
    try {
      await Appointment.update(appointmentData, {
        where: {
          id: appointmentId,
        },
      });
  
      res.status(200).json({
        success: true,
        message: "Appointment update successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error updating appointment",
        error: error.message,
      });
    }
  };

  appointmentController.delete = async (req, res) => {
    const appointmentId = req.params.id;
  
    try {
      const deleteResult = await Appointment.destroy({
        where: {
          id: appointmentId,
        },
      });
  
      if(deleteResult === 0) {
        res.status(404).json({
          success: true,
          message: "Appoinment not found",
        });
        return;
      }
  
      res.status(200).json({
        success: true,
        message: "Appointment deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error deleting appointment",
        error: error.message,
      });
    }
  };

  

appointmentController.getById = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const userId = req.tokenData.userId; 
       
        const appointment = await Appointment.findOne({
            where: {
                id: appointmentId,
                user_id: userId, 
            },
            include: [
                {
                    model: Service,
                    as: "service",
                    attributes: ['service_name', ],
                },
                {
                    model: Artists,
                    as: "artist",
                    attributes: ['name'], 
                },
            ],
            attributes: {
                exclude: [
                    "createdAt",
                    "updatedAt",
                    "password",
                    "user_id",
                    "service_id",
                    "artist_id",
                ],
            },
        });

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found ",
            });
        }

        res.status(200).json({
            success: true,
            message: "Appointment retrieved successfully",
            data: appointment,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving appointment",
            error: error.message,
        });
    }
};

module.exports = appointmentController;
