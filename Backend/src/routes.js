import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";
import multer from "multer";
import multerConfig from './config/multer'
import authMiddLeware from './app/middlewares/auth'
import CategoriesContollers from "./app/controllers/CategoriesContollers";
import OrderController from "./app/controllers/OrderController";


const upload = multer(multerConfig)
const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index)


routes.post('/sessions', SessionController.store);

routes.use(authMiddLeware) // will be called by all the  routes bellow

routes.post('/products', upload.single('file'),ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', upload.single('file'),ProductController.update);


routes.post('/categories',upload.single('file') ,CategoriesContollers.store);
routes.get('/categories', CategoriesContollers.index);
routes.put('/categories/:id', upload.single('file'), CategoriesContollers.update)

routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.get('/orders', OrderController.index);


export default routes
