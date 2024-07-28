import { v4 } from "uuid"
import User from "../models/User";
import * as Yup from 'yup'


class UserController{
    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password_hash: Yup.string().required().min(6),
            admin: Yup.boolean(),
        })

        // if (!(await schema.isValid(req.body))) {
        //     return res.status(400).json({error: "Make sure your data is correct"})
        // }
        try {
            await schema.validateSync(req.body, {abortEarly: false}) //send all the erros , not just one
        } catch (err) {
            return res.status(400).json({error: err.errors })
        }
        

        const { name, email, password_hash, admin } = req.body
        
        const userExists = await User.findOne({
            where: {email },
        })

        if (userExists) {
            return res.status(400).json({error: "Email already created"  })
        }

        const user = await User.create ({
            id: v4(),
            name,
            email,
            password_hash,
            admin
        })

        return res.status(201).json({id:user.id, name,email,admin})
    }
}

export default new UserController()