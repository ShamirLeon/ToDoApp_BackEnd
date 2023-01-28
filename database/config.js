import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNX)
    console.log('Base de Datos Online')
  } catch (error) {
    throw new Error('Error al iniciar la Base de Datos')
  }
}

export default dbConnection
