const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      // process.env.DB_CNN
      "mongodb+srv://mern-user:wpJ0l7GKQSUMPgSi@cluster0.wmiabpa.mongodb.net/mern_calendar"
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
