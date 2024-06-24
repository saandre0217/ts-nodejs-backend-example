import { MYSQL } from "./variables";
import { Sequelize } from 'sequelize';

const params = {
    user: MYSQL.user,
    password: MYSQL.password,
    db: MYSQL.db,
    host: MYSQL.host,
}

//@ts-ignore
export const db = new Sequelize(params.db, params.user, params.password, {
    host:params.host,
    dialect: 'mysql',
    port: 3306,
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true
        }
    }
})
export const createDatabase = async (): Promise<void> => {
  try {
    await db.query(`CREATE DATABASE IF NOT EXISTS ${params.db};`);
    console.info(`Database created ${params.db}`);
  } catch (error) {
    console.error('Error creating the database:', error);
  }
};
export const connection = async() => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
export const syncDatabase = async (): Promise<void> => {
  try {
    await db.sync({ force: false });
    console.info('Database synced!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};
//database connection
connection();
syncDatabase();
createDatabase();