import express from "express";
import routes from "./routes";
import "./database";
import { resolve } from "path";
import cors from "cors"


class App {
  constructor() {
    this.app = express();
    this.app.use(cors());

    this.middlewares();
    this.routes();
    
  }

  middlewares() {
    this.app.use(express.json()); //the server has to use JSON
    this.app.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );

    this.app.use(
      "/category-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.app.use(routes); // routes available to inteire app
  }
}

export default new App().app;
