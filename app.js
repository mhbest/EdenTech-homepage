const express = require('express'); // express 불러오기
const app = express(); // express를 사용하기 위한 실행 함수
const path = require('path'); //file directory를 설정하도록 하는 npm
const mongoose = require('mongoose');

const ejsMate = require('ejs-mate');

// MONGODB 설정법

// mongoose.connect('mongodb://localhost:',{
// useNewUrlParser: true,
// 	useCreateIndex: true,
// 		useUnifiedTopology:true
// });


// const db = mongoose.connection;
// db.on("error", console.error.bind(console,"connection error:"));
// db.once("open",() =>
// 		{console.log("Databas connected")});

// app.use('/public',express.static(path.join(__dirname,'static')));
app.engine('ejs',ejsMate);
// View engine을 ejs 기반으로 만들기
app.set('view engine' , 'ejs');
// views directory에 있는 ejs 파일들을 실행하도록 하는 setting
app.set('views', path.join(__dirname, '/views'));

// app.use('public',express.static(path.join(__dirname,'public')));

app.use(express.static(__dirname ));

app.get('/',(req,res)=>{
	res.render('index');
})

app.get('/form',(req,res)=>{
	res.render('form');
})

app.get('/as',(req,res)=>{
	res.render('as');
})

app.get('/info',(req,res)=>{
	res.render('info');
})

app.get('/items',(req,res)=>{
	res.render('items');
})

app.get('/items/product-1',(req,res)=>{
	res.render('items/product-1');
})

app.get('/customer',(req,res)=>{
	res.render('customer');
})

app.get('*',(req,res)=>{
	res.render('pageNotFound')
})

app.listen(8080, ()=> {
	console.log("Serving on port 8080")
})