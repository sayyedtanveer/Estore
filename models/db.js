var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  port: 3306, 
  user     : 'root',
  password : 'mysql',
  database : 'estore'
});

connection.connect(function(err) {
	if (err) {
	  console.error('Error connecting to the database: ' + err.stack);
	  return;
	}
	console.log('Connected to the database as id ' + connection.threadId);
  });

module.exports={
	insertData: function(sql,param,callback){
		console.log(param);
		if(param==null)
		{
			connection.query(sql,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result);
				}
			});
			
		}
		else
		{
			connection.query(sql,param,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result);
				}
			});
		}

	},
	getAllData: function(sql,callback){
		
		connection.query(sql,function(error,result){
			if(error)
			{
				
				callback(null);

			}
			else
			{
				callback(result);
			}
		});
	},
	getData : function(sql,param,callback){
		if(param==null)
		{
			connection.query(sql,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result);
				}
			});
			
		}
		else
		{
			connection.query(sql,param,function(error,result){
				if (error) {
					callback(null);	
				}
				else
				{
					callback(result);
				}
			});
		}

	},


	deleteData : function(sql,param,callback){

		if(param==null)
		{
			connection.query(sql,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result);
				}
			});
			
		}
		else
		{
			connection.query(sql,param,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result);
				}
			});
		}

	},
	updateData : function(sql,param,callback){
		if(param==null)
		{
			connection.query(sql,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result);
				}
			});
		}
		else
		{
			connection.query(sql,param,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result);
				}
			});
		}
	}
};
