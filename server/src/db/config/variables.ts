import dotenv from "dotenv"

dotenv.config();

const MYSQL_HOST = process.env.Server;
const MYSQL_DATABASE = process.env.Database;
const MYSQL_USER = process.env.User_Id;
const MYSQL_PASSWORD = process.env.Password;
export const CONNECTION_STRING = process.env.AZURE_MYSQL_CONNECTIONSTRING
export const JWT_SECRET = process.env.JWT_SECRET;

export const MYSQL = {
    host: MYSQL_HOST,
    db: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
}
