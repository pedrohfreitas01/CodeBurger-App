import * as Yup from "yup";
import Categories from "../models/Categories";
import Products from "../models/Products";
import Order from "../schemas/Order";
import User from "../models/User";

class OrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          })
        ),
    });

    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const productsId = req.body.products.map((product) => product.id);

    // Consultando os produtos no banco de dados
    const updateProducts = await Products.findAll({
      where: {
        id: productsId,
      },
      include: [
        {
          model: Categories,
          as: "category",
          attributes: ["name"], // Corrigido de 'attibutes' para 'attributes'
        },
      ],
    });

    const editedProduct = updateProducts.map((product) => {
      const productIndex = req.body.products.findIndex(
        (reqProduct) => reqProduct.id === product.id
      );

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category.name,
        url: product.url,
        quantity: req.body.products[productIndex].quantity,
      };
    });

    const order = {
      user: {
        id: req.userId,
        name: req.userName,
      },
      products: editedProduct,
      status: "Pedido realizado",
    };

    try {
      const orderResponse = await Order.create(order);
      return res.status(201).json(orderResponse); // Retornando o objeto 'order'
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(req, res) {
    const orders = await Order.find();

    return res.json(orders);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      status: Yup.string().required(),
    });

    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json();
    }

    const { id } = req.params;
    const { status } = req.body;

    try {
      await Order.updateOne({ _id: id }, { status });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.json({ message: "Status was updated" });
  }

  async delete(req, res) {

    const { id } = req.params;

    try {
      // Tenta encontrar e excluir a ordem pelo ID
      const order = await Order.findById(id);

      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }

      await Order.findByIdAndDelete(id);

      return res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new OrderController();
