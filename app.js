var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaIndex = require('./app/routes/index')(app);

var rotaFormulario_Inclusao_Noticia = require('./app/routes/formulario_inclusao_noticia')(app);

//Subindo um servidor
app.listen(3000, function(){
	console.log('Servidor ON');
});