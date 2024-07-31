import { Model, Sequelize } from "sequelize";

class Categories extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        
      },
      {
        sequelize,
      }
    );
  }
}

export default Categories;
