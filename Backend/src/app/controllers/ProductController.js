import * as Yup from "yup";
import Products from "../models/Products";
import Categories from "../models/Categories";
import User from "../models/User";

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      offer: Yup.boolean(),
    });

    try {
      await schema.validateSync(req.body, { abortEarly: false }); //send all the erros , not just one
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json();
    }

    const { filename: path } = req.file;
    const { name, price, category_id, offer } = req.body;

    const product = await Products.create({
      name,
      price,
      category_id,
      path,
      offer,
    });
    return res.json(product);
  }
  async index(req, res) {
    const allProducts = await Products.findAll({
      include: [
        {
          model: Categories,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });

    return res.json(allProducts);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.number(),
      offer: Yup.boolean(),
    });

    try {
      await schema.validateSync(req.body, { abortEarly: false }); //send all the erros , not just one
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json();
    }

    const { id } = req.params;
       const product = await Products.findByPk(id);

    if (!product) {
      return res
        .status(401)
        .json({ error: "Make sure your product ID is correct" });
    }

    let path;
    if (req.file) {
      path = req.file.filename;
    }

    const { name, price, category_id, offer } = req.body;

    await Products.update(
      {
        name,
        price,
        category_id,
        path,
        offer,
      },
      { where: { id } }
    );
    return res.status(200).json();
  }
}

export default new ProductController();
