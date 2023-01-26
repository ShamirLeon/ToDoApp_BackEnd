import { Router } from 'express'
import { toDoControllers } from '../controllers/toDo.js'
import { validarCampos } from '../middlewares/validarCampos.js'

const router = Router()

router.get('/', [validarCampos], toDoControllers.toDoGet)
router.post('/', [validarCampos], toDoControllers.toDoPost)
router.put('/:id', [validarCampos], toDoControllers.toDoPut)
router.put('/complete/:id', [validarCampos], toDoControllers.toDoPutComplete)
router.put('/active/:id', [validarCampos], toDoControllers.toDoPutActive)
router.delete('/delete/:id', [validarCampos], toDoControllers.toDoDelete)

export default router
