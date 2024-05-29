import express from 'express';
import dotenv from 'dotenv';
import {connection, syncDatabase} from './db/config/connection';

const app = express();

dotenv.config();
app.use(express.json())
const port = process.env.PORT;


//database connection
connection();
syncDatabase()

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});