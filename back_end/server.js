const express= require('express');

const app = express();

const PORT =8000;

app.get('/' , (req , res)=>{

    console.log('testing get api endpoint testing code');

   res.send('just now updated');

})

app.listen(PORT,()=>{console.log(`server is running on ${PORT}`);});

