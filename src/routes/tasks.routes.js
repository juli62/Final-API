import { Router } from "express";
import * as taskControl from '../controllers/tasks.controller'
const router = Router()

router.get('/',taskControl.getTasks)
router.post('/', taskControl.createTask)
router.put('/:id', taskControl.editTask)
router.delete('/:id', taskControl.deleteTask)

export default router