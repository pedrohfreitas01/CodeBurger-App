import * as Yup from "yup";
import Products from "../models/Products";
import Categories from '../models/Categories'


class ProductController{
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category_id: Yup.number().required()
        })
    
         try {
            await schema.validateSync(req.body, {abortEarly: false}) //send all the erros , not just one
        } catch (err) {
            return res.status(400).json({error: err.errors })
        }

        const { filename: path } = req.file
        const {name, price, category_id} = req.body

        const product = await Products.create({
            name,
            price,
            category_id,
            path
        })
        return res.json(product)
    }
    async index(req, res) {
        const allProducts = await Products.findAll({
            include: [
                {
                    model: Categories,
                    as: 'category',
                    attributes: ['id','name']
                }
            ]
        })
        
        return res.json(allProducts)
    }
}

export default new ProductController()