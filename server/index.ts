import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/index'
import cors from 'cors'

const app = express();

dotenv.config();
app.use(express.json())
const port = process.env.PORT;

//'../../beau-bike-repair/client/dist'

const corsOption = {
  origin: ['http://localhost:3000', 'https://purple-rock-09633710f.5.azurestaticapps.net' ],
};
app.use(cors(corsOption));
//route definition
app.use(routes)

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} dbname: ${process.env.Database} server: ${process.env.hostname} `);
});