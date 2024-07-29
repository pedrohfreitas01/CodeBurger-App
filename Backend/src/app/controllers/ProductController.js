import * as Yup from "yup";

class ProductController{
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category: Yup.string().required()
        })
    
         try {
            await schema.validateSync(req.body, {abortEarly: false}) //send all the erros , not just one
        } catch (err) {
            return res.status(400).json({error: err.errors })
        }
        return res.json({ok: true})
    }
}

export default new ProductController()