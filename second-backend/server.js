import express from 'express';
import dotenv from 'dotenv';
import SkillRoutes from './routes/skills.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/skills",SkillRoutes);

app.use("/testing",(req,res)=>{

    res.send('testing code');
})

app.listen(PORT, ()=>console.log(`listening on ${PORT}`));