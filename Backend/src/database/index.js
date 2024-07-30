//conecterd model with postgres BDD
import Sequelize  from "sequelize";
import configDatabase from "../config/database"
import User from '../app/models/User'
import Products from "../app/models/Products";

const models = [User, Products]


class Database{
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDatabase)
        models.map((model) => model.init(this.connection))
    }
}


export default new Database;