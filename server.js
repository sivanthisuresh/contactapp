var express = require('express');
var mongojs=require('mongojs');
var bodyparser =require('body-parser');
//mongojs(database,collection)
var db = mongojs('contactlist',['contactlist']);
var app =express();
app.use(bodyparser.json());
app.get('/', function(req,res){
 res.send("this is new request");
});
app.use(express.static(__dirname + "/public"));

app.get('/cntlst',function(req,res){
	console.log("get request");

	db.contactlist.find(function(err,docs){
	res.json(docs);
	});
app.post('/cntlst',function(req,res){
	console.log(req.body);
	db.contactlist.insert(req.body,function(err,doc){
		res.json(doc);
	});
});

});
app.delete('/cntlst/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	});
});

app.get('/cntlst/:id',function(req,res){
	var id =req.params.id;
	console.log(id);
	db.contactlist.findOne({_id: mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
		console.log(doc);

	});
});
app.put('/cntlst/:id',function(req,res){
	var id = req.params.id;
	console.log(req.body.name);

	db.contactlist.findAndModify({
		query: {_id:mongojs.ObjectId(id)},
		update:{$set:{name:req.body.name, email: req.body.email,phone: req.body.phone}},
		new: true}, function(err,doc){
			res.json(doc);
	});

});
app.listen(3000);
console.log("server running on 3000");
