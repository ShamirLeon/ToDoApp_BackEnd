import mongoose from 'mongoose'

const toDoSchema = mongoose.Schema({
  state: { type: Number, required: true, default: 0 }, // 0 - active, 1 - completed,
  text: { type: String, required: true }
})

export default mongoose.model('toDo', toDoSchema)
