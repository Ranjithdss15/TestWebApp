var express = require('express');

var morgan = require('morgan');
//var path = require('path');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());


var Pool = require('pg').Pool;

var config = {
user:'postgres',
database:'postgres',
host:'localhost',
port:'5432',
password:'Hei5@star'
}


//dynamic HTML

var loadHTML = {
	id:'1',
	name:'Ranjith',
	content:'This is  a content'
	
};
function htmlfunction(data) {
		var id=data.id;
		var name=data.name;
		var content=data.content;
		var htmlTemplate = `
		<html>
		<head>
		<title>
		Parsing in html
		</title>
		</head>
			<body> 
			<div> ${name} with the id ${id} says ${content} </div>
			<div>Test</div>
			</body>
			</html>	
`;
	return htmlTemplate;
};

function htmlfunction1(data) {
		var id=data.id;
		var name=data.name;
		var htmlTemplate = `
		<html>
		<head>
		<title>
		Parsing in html
		</title>
		</head>
			<body> 
			<div> ${name} with the id ${id}</div>
			<div>Test</div>
			</body>
			</html>	
`;
	return htmlTemplate;
};

app.get('/html', function (req, res) {
  
res.send(htmlfunction(loadHTML));
});




app.set('port',process.env.PORT || 3000
 );

app.get('/', function (req, res) {
  
res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});
app.get('/heartgif.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'heartgif.gif'));
  });

app.get('/form', function (req, res) {
res.sendFile(path.join(__dirname, 'pages', 'form.html'));
	//	var uname1 = req.body.name;
//	console.log(req.body.name);	
});

app.get('/register', function (req, res) {
var uname= "Ranjith";
var password = "test";
	
	console.log("Uname is"+uname );

	pool.query('INSERT INTO "userinfo" (uname, password) VALUES ($1,$2)',[uname,password],function(err,result){
		if (err) {
			res.status(500).send(err.toString())
		}else {
			res.send('Registered!');
		}
	}); 
});



app.post('/create-user', function (req, res) {
   // username, password  
   // {"username": "tanmai", "password": "password"}
   // JSON	
   var username = req.body.username;
   var password = req.body.password;
	var name = req.body.name;
	var dob= req.body.dob;
	var email = req.body.email;
	var phn= req.body.phn;
	
	console.log(req.body.username);
	console.log("Uname is");
  
   pool.query('INSERT INTO "userinfo" ("uname", "password","name","dob","email",phone) VALUES ($1,$2,$3,$4,$5,$6)', [username, password,name,dob,email,phn], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});


var pool = new Pool(config);	
app.get('/test-db',function(req,res) {
	var uname1 = req.body.name;
	console.log(req.body.name);
	//res.send(uname1);
	
	
	/*
pool.query('SELECT * FROM "Test" WHERE id=2',function(err,result){
  if(err) {
    res.status(500).send(err.toString());
  } else {
	var dbvar=result.rows[1];
    res.send(htmlfunction1(dbvar));
	//  res.send(JSON.stringify(result.rows));
	  
  //res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  }
});*/
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'style.css'));
  });
app.get('/formcss.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'formcss.css'));
  });

  app.get('/styl.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'styl.css'));
  });
  app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'main.js'));
  });
  
  app.get('/dbmain.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'dbmain.js'));
  });



app.listen(app.get('port'), function(){
	console.log('Express Started');
});
