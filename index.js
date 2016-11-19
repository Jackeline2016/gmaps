var express=require('express');
var app=express();
var htpp=required('http').Server(app);
//usando socket io
var io=required('socket.io')(http);

app.use(express.static(__dirname + '/public'));//aqui se serviran archivos estaticos

var port=process.env.port || 3000; //ESTO LO EXIGE HEROKU
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');//ruta para index
});

http.listen(port,function(){
	console.log('Escuchando en el puerto: '+port);
});

