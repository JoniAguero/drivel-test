const mongoose = require('mongoose');

const dbConnection = async() => {
  try {
    await mongoose.connect( process.env.MONGODB_URI , {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Database connected!');
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de inicializar BD');
  }
}

module.exports = {
  dbConnection
}