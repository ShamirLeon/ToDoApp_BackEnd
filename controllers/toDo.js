import toDo from '../models/toDo.js'

const toDoControllers = {
  toDoGet: async (req, res) => {
    const valueToDo = req.query.value
    const toDos = await toDo
      .find({ valueToDo })

    res.json({
      toDos
    })
  },

  toDoPost: async (req, res) => {
    const { text } = req.body
    const toDos = toDo({ text })

    await toDos.save()

    res.json({ toDos })
  },

  toDoHandleState: async (req, res) => {
    const { id, state } = req.params

    const newState = state === 'false' ? 'true' : 'false'

    const toDos = await toDo.findByIdAndUpdate(id, { state: newState })

    res.json({
      toDos
    })
  },

  toDoDelete: async (req, res) => {
    const { id } = req.params
    const toDos = await toDo.findByIdAndDelete(id)

    res.json({
      toDos
    })
  }
}

export { toDoControllers }
