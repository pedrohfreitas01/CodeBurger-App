import express from "express"
import routes  from "./routes"
import './database'

class App {
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

export default  new App().app