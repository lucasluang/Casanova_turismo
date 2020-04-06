var mysql = require('mysql');

module.exports = function(){

		return mysql.createConnection({
			host: 'localhost',
			port: '3308',
			user: 'root',
			password: '',
			database: 'portal_noticias'
		});
};