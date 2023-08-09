import {Router} from 'express'
import UserController from '../Controllers/UserController.js'
import multer from 'multer'
const upload = multer()

let route = Router();

route.post('/user',upload.none(),UserController.create)
route.get('/user',UserController.index)
route.get('/user/:id',UserController.show)
route.post('/user/:id',upload.none(),UserController.update)
route.post('/login/user',upload.none(),UserController.login)
export default route

