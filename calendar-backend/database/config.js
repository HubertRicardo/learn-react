const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Mern-calendar:y3WlkfG2RAFL4V7e@calendar.9x9ntfp.mongodb.net/mern_calendar"
    );

    console.log("DB Online");
  } catch (error) {
    console.log("Error al conectar con la base de datos", error.message);
    throw new Error("error a la hora de inicializar base de datos");
  }
};

module.exports = {
  dbConnection,
};
