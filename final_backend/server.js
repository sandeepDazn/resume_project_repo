import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import db from "./config/connection.js";
import bodyParser from "body-parser";
import cors from 'cors';
import skillsRouter from "./routes/skills.js";
import skill_line_items from "./routes/skill_line_items.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user", userRoutes);
app.use("/Skills",skillsRouter);
app.use("/skillLineItems",skill_line_items)

const PORT = process.env.PORT || 4000;

db.sync({ force: false ,logging:false})
  .then(() => console.log(`server is synced successfully`))
  .catch((err) => console.log(`getting error ${err}`));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
