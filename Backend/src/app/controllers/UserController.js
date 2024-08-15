import { v4 } from "uuid"
import User from "../models/User";
import * as Yup from 'yup'


class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      admin: Yup.boolean(),
    });

    // if (!(await schema.isValid(req.body))) {
    //     return res.status(400).json({error: "Make sure your data is correct"})
    // }
    try {
      await schema.validateSync(req.body, { abortEarly: false }); //send all the erros , not just one
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name, email, password, admin } = req.body;

    const userExists = await User.findOne({
      where: { email },
    });

    if (userExists) {
      return res.status(409).json({ error: "Email already created" });
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    });

    return res.status(201).json({ id: user.id, name, email, admin });
  }
}

export default new UserController()