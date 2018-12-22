var mysql = require('mysql');
try{
    var connection = mysql.createPool({
        host:"localhost",
        user:"root",
        password:"",
        database:"userinfo"
    });

}catch(e){
    console.log(e+"conncetion Fail!");
}


exports.findAll = function (req,res) {

    connection.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection

        connection.query('SELECT * FROM users WHERE id='+req.params.id, function (error, results) {
            res.send(results);
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });

}

