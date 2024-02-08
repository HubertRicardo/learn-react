const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParse: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("DB Online");
  } catch (error) {
    console.log("Error al conectar con la base de datos", error.message);
    throw new Error("error a la hora de inicializar base de datos");
  }
};

module.exports = {
  dbConnection,
};
