const { response } = require("express")

const { Router } = requite("express")

const routes = new Router()


routes.get('/', (req, res) => {
    return response.json({message: "Hello mundo"})
})



module.exports = routes