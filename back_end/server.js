const express= require('express');

const app = express();

const PORT =8000;

app.get('/' , (req , res)=>{

    console.log('testing get api endpoint');

   res.send('hello from simple server :)')

})

app.listen(PORT,()=>{console.log(`server is running on ${PORT}`);});

