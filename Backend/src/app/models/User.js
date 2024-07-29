import Sequelize, { Model } from "sequelize";
import bcrypt from "bcrypt";


class User extends Model {
  // Initialize the model with attributes and configurations
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )

    //before sequilize save de datas , must have to crypt/hash the password
    this.addHook('beforeSave', async(user) => {
      if(user.password){
        user.password_hash = await bcrypt.hash(user.password, 6)
      }
    })

    return this
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash)
    
  }
}

export default User 