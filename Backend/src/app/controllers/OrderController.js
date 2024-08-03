import * as Yup from 'yup'
import Categories from '../models/Categories'


class OrderController{
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
        })

        // if (!(await schema.isValid(req.body))) {
        //     return res.status(400).json({error: "Make sure your data is correct"})
        // }
        try {
            await schema.validateSync(req.body, { abortEarly: false }) //send all the erros , not just one
        } catch (err) {
            return res.status(400).json({ error: err.errors })
        }
        
        const productsId = req.body.products.map(product => product.id)

        const updateProducts = await ProductController.findAll({
            where: {
                id: productsId,
            },
            include: [
                {
                    model: Categories,
                    as: 'category',
                    attibutes: ['name']
                }
            ]
        })

        const editedProduct = updateProducts.map((product) => {
            const productIndex = req.body.products.findIndex((reqProduct) => reqProduct.id === product.id)
            
            
            
            const newProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category.name,
                url: product.url,
                quantity: req.body.products[productIndex].quantity,
            }

            return  newProduct
        })

        const order = {
            user: {
                id: req.userId,
                name: req.userName,
            },
            products: editedProduct,
        }

        return res.status(201).json(editedProduct)
    }
}

export default new OrderController()