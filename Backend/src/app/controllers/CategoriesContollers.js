import * as Yup from "yup";
import Categories from "../models/Categories";
import User from "../models/User";

class CategoriesController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { name } = req.body;
    const { filename: path } = req.file;

    const categoriesExists = await Categories.findOne({
      where: { name },
    });

    if (categoriesExists) {
      return res.status(400).json({ error: 'Category already exists' });
    }

    const category = await Categories.create({ name, path });
    return res.json({ name: category.name, id: category.id });
  }

  async index(req, res) {
    const allCategories = await Categories.findAll();
    return res.json(allCategories);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
    });

    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { name } = req.body;
    const { id } = req.params;

    const category = await Categories.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    let path;
    if (req.file) {
      path = req.file.filename;
    }

    await Categories.update({ name, path }, { where: { id } });

    const updatedCategory = await Categories.findByPk(id);
    return res.json(updatedCategory);
  }
}

export default new CategoriesController();
