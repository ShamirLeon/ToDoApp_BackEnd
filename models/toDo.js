import mongoose from 'mongoose'

const toDoSchema = mongoose.Schema({
  state: { type: Boolean, default: false },
  text: { type: String, required: true }
})

export default mongoose.model('toDo', toDoSchema)
