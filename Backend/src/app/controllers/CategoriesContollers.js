import * as Yup from "yup";
import Categories from "../models/Categories";
import User from "../models/User"


class CategoriesController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    try {
      await schema.validateSync(req.body, { abortEarly: false }); //send all the erros , not just one
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const {admin: isAdmin} = await User.findByPk(req.userId)

    if (!isAdmin) {
      return res.status(401).json()
    }

    const { name } = req.body;

    const categoriesExists = await Categories.findOne({
      where: {
        name,
      }
    })

    if (categoriesExists) {
      return res.status(400).json({error: 'Category already exist'})
    }

    const {id} = await Categories.create({name});
    
    return res.json({name, id});
  }
  async index(req, res) {
    const allCategories = await Categories.findAll();

    return res.json(allCategories);
  }
}

export default new CategoriesController();
