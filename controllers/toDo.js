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

  toDoPut: async (req, res) => {
    const { id } = req.params
    const { _id, state, __v, ...resto } = req.body

    const toDos = await toDo.findByIdAndUpdate(id, resto)

    res.json({
      toDos
    })
  },

  toDoPutComplete: async (req, res) => {
    const { id } = req.params

    const toDos = await toDo.findByIdAndUpdate(id, { state: 1 })

    res.json({
      toDos
    })
  },

  toDoPutActive: async (req, res) => {
    const { id } = req.params

    const toDos = await toDo.findByIdAndUpdate(id, { state: 0 })

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
