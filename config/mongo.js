const mongoose = require('mongoose')

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI  
  try {
    await mongoose.connect(DB_URI)
    console.log('*** Conexión correcta ***')    
  } catch(error) {
    console.log('*** Error de Conexión ***', error)
  }  
}

module.exports = { dbConnect }
