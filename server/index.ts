import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/index'
const app = express();

dotenv.config();
app.use(express.json())
const port = process.env.PORT;


//route definition
app.use(routes)

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} dbname: ${process.env.Database} server: ${process.env.Server}`);
});