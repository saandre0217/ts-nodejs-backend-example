import express from 'express';
import dotenv from 'dotenv';
import {connection, syncDatabase} from './db/config/connection';
import routes from './routes/index'
const app = express();

dotenv.config();
app.use(express.json())
const port = process.env.PORT;


//database connection
connection();
syncDatabase()

//route definition
app.use(routes)

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});