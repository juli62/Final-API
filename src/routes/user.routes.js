import { Router } from "express"
const router = Router()
import * as userControl from '../controllers/user.controller'

router.get('/',userControl.getUsers)
router.post('/', userControl.createUser)
router.delete('/:id', userControl.deleteUser)

export default router