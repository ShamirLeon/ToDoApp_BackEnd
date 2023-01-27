import mongoose from 'mongoose'

const dbConnection = async () => {
  console.log(process.env.MONGODB_CNX)
  await mongoose.connect(process.env.MONGODB_CNX)
  console.log('Base de Datos Online')
  // try {
  //   await mongoose.connect(process.env.MONGODB_CNX)
  //   console.log('Base de Datos Online')
  // } catch (error) {
  //   throw new Error('Error al iniciar la Base de Datos')
  //   console.log(process.env.MONGODB_CNX);
  // }
}

export default dbConnection
