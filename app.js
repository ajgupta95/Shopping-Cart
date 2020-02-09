const express =require('express');
const bodyparser=require('body-parser');
const path=require('path');

const app =express();

app.set('view engine','ejs');
app.set('views','views');

const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminroutes.routes);

app.use(shoproutes);

app.use((req,res)=>{
    res.status(404).render('404',{pageTitle:'Page not found'});
});

app.listen(3000,()=>{
    console.log("server is listening");
});
