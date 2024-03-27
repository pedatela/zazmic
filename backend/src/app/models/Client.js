import Sequelize, { Model } from 'sequelize'
import { v4 as uuidv4 } from 'uuid';


class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        coach: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )
    this.addHook('beforeSave',user => user.id = user.id = uuidv4())
  }


}

export default Client;