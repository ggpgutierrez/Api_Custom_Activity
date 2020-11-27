var mysql = require('promise-mysql');

pool = mysql.createPool({
        host: "journeys.czzzr1t0l4ub.sa-east-1.rds.amazonaws.com",
        user: "sa",
        password: "zx",
        database: "Jornada"
});


function getSqlConnection() {
  return pool.getConnection().disposer(function(connection) {
    pool.releaseConnection(connection);
  });
}
 
module.exports = getSqlConnection;

