import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import sequelizeConnection from './config/db.js';
import userRoutes from './routes/skills.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

sequelizeConnection.sync({ force: false }).then(() => {
  console.log('Database synced');
});

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/skills',userRoutes);

app.listen(PORT, ()=>console.log(`server is running at ${PORT}`));