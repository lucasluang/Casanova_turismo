module.exports = function(app){

	app.get('/noticia', function(req, res){

		//Essa referencia recupera o módulo que estabelece conexão com o banco de dados;
		var connection = app.config.dbConnection();

		// parametros esperados pela query
		// connection.query(sql, func callback);
		connection.query('select * from noticias where idnoticia = 2', function(error, result){
			res.render("noticias/noticia", {noticia : result});
		});
		
		});
}