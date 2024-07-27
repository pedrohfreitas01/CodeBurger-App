import { Router } from "express";
import {v4} from "uuid"
import User from "./app/models/User";
// import { password } from "./config/database";


const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        id: v4(),
        name: 'Naruto uzukci',
        email: 'pedrofreitras@hotmail.com',
        password_hash: 'Pedrohp6'
    })
    return res.json(user );
});

export default routes
