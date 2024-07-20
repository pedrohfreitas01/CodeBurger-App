const express = require("espress")
const routes = require("./routes")


class App{
    constructor() {
        this.app = express()
    
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())  //the server has to use JSON
    }

    routes() {
      this.app.use(routes); // routes available to inteire app
    }
}




module.exports = new App()