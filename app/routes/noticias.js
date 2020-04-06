var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

	var connection = dbConnection();

	app.get('/noticias', function(req, res){

		
		// parametros esperados pela query
		// connection.query(sql, func callback);
		connection.query('select * from noticias', function(error, result){
			res.render("noticias/noticias", {noticias : result});
		});
		
		});
}