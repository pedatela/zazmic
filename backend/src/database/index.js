import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Client from '../app/models/Client';
import Session from '../app/models/Session';

const models = [
    Client,
    Session
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(model => model.associate && model.associate(this.connection.models));
  }

}

export default new Database();