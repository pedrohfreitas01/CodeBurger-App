import * as Yup from 'yup';
import Categories from '../models/Categories';
import Products from '../models/Products';

class OrderController {
    async store(req, res) {
        const schema = Yup.object().shape({
            products: Yup.array()
                .required()
                .of(
                    Yup.object().shape({
                        id: Yup.number().required(),
                        quantity: Yup.number().required()
                    })
                )
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
                    as: 'category',
                    attributes: ['name'] // Corrigido de 'attibutes' para 'attributes'
                }
            ]
        });

        // Usando updateProducts em vez de filteredProducts
        const editedProduct = updateProducts.map((product) => {
            const productIndex = req.body.products.findIndex((reqProduct) => reqProduct.id === product.id);

            const newProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category.name,
                url: product.url,
                quantity: req.body.products[productIndex].quantity,
            };

            return newProduct;
        });

        const order = {
            user: {
                id: req.userId,
                name: req.userName,
            },
            products: editedProduct,
        };

        return res.status(201).json(editedProduct); // Retornando o objeto 'order'
    }
}

export default new OrderController();
