const express=require('express')
const app=express()
require('dotenv').config();
const mongoose=require('mongoose')
const cors=require('cors')
const ejsMate=require('ejs-mate');
const path=require('path')
const bodyParser=require('body-parser')

app.use(cors())
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname+'/app/views')))
app.engine("ejs",ejsMate);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect(process.env.MONGODB_URL,(err)=>{
    console.log('connected to database');
})

require('./app/routes/user.routes')(app);
app.get('/',(req,res)=>{
    res.render('home');
})

const PORT=process.env.PORT||7070;
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
})
