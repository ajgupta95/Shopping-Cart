const express =require('express');
const bodyparser=require('body-parser');
const path=require('path');

const app =express();

const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminroutes);

app.use(shoproutes);

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000,()=>{
    console.log("server is listening");
});
