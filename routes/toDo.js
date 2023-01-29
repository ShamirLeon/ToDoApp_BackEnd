import { Router } from 'express'
import { toDoControllers } from '../controllers/toDo.js'
import { validarCampos } from '../middlewares/validarCampos.js'

const router = Router()

router.get('/', [validarCampos], toDoControllers.toDoGet)
router.post('/', [validarCampos], toDoControllers.toDoPost)
router.put('/handleState/:id/:state', [validarCampos], toDoControllers.toDoHandleState)
router.delete('/delete/:id', [validarCampos], toDoControllers.toDoDelete)

export default router
