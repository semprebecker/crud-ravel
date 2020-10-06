import Sequelize from 'sequelize';
import 'dotenv/config';
import dbConfig from '../config/database';
import Users from '../app/models/Users';

const models = [Users];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL, dbConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
