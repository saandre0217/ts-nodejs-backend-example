import { connection, syncDatabase, createDatabase } from "./connection";

//database connection
connection();
syncDatabase();
createDatabase();