import Sequelize, { Model } from "sequelize";
import bcrypt from "bcrypt";


class User extends Model {
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
}

export default User 