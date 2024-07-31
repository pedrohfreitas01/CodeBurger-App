import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";
import multer from "multer";
import multerConfig from './config/multer'
import authMiddLeware from './app/middlewares/auth'
import CategoriesContollers from "./app/controllers/CategoriesContollers";


const upload = multer(multerConfig)
const routes = new Router();

routes.post('/users', UserController.store);


routes.post('/sessions', SessionController.store);

routes.use(authMiddLeware) // will be called by all the  routes bellow

routes.post('/products', upload.single('file'),ProductController.store);
routes.get('/products', ProductController.index);


routes.post('/categories', CategoriesContollers.store);
routes.get('/categories', CategoriesContollers.index);

export default routes
