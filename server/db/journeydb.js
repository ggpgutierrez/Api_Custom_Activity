const getSqlConnection   = require("../db/dbConnect")
const promise = require("bluebird");

const createUserJourney = (email) => {

    try{
        promise.using(getSqlConnection(), function(connection){
            let sql = "insert into clientes_jornadas(email) VALUES(?)" 
            var result = connection.query(sql, [email]);
            return result;
        }).then(function(rows){
                console.log(rows);
            })
    }catch(e){
        throw new Error(e.message)
    }
}

module.exports = {
    createUserJourney
}