import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import db from "./config/connection.js";
import indexRoutes from "./routes/index.js";

import swaggerUi from "swagger-ui-express";
import * as jsonData from './swagger_output.json' assert {type: 'json'}

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(indexRoutes);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(jsonData));

app.get('/',(req, res) => {res.send("testing api")});

const PORT = process.env.PORT || 4000;

db.sync({
   force: false,
  logging:false
})
  .then(() => console.log(`server is synced successfully`))
  .catch((err) => console.log(`getting error ${err}`));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
