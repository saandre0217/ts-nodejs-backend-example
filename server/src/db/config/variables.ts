import dotenv from "dotenv"

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
export const JWT_SECRET = process.env.JWT_SECRET;

export const MYSQL = {
    host: MYSQL_HOST,
    db: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
}
