const express = require('express');

const Users = require('./users.js');

const app = express();

app.use((req,res,next)=>{
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
});

app.get('/users', (req,res,next) =>{
	console.log("Get Users");
	let offset = parseInt(req.query.offset) || 0;
	let size = parseInt(req.query.limit) || Users.length;
	
	let from = offset * size;
	let to = from + size;
	
	let users = Users.slice(from, to);
	res.status(200).json({
		total:Users.length,
		users
	});
});

app.listen(3000);
console.log("Server Started at http://localhost:3000");

