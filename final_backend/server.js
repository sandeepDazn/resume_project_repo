import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import db from "./config/connection.js";

import userRoutes from "./routes/user.js";
import skillsRouter from "./routes/skills.js";
import skill_line_items from "./routes/skill_line_items.js";
import projectRoutes from "./routes/projects.js";
import educationRoutes from "./routes/education.js";
import contactRouter from "./routes/contact.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routes

app.use("/User", userRoutes);
app.use("/Skills",skillsRouter);
app.use("/SkillLineItems",skill_line_items);
app.use("/Projects",projectRoutes);
app.use("/Education",educationRoutes);
app.use("/Contact",contactRouter);

app.get('/',(req, res) => {res.send("testing api")});

const PORT = process.env.PORT || 4001;

db.sync({
   force: false,
  //  alter:true,
  logging:false
})
  .then(() => console.log(`server is synced successfully`))
  .catch((err) => console.log(`getting error ${err}`));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
