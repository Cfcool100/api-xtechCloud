const mongoose = require('mongoose')
const DbServer = "mongodb+srv://cfcool100:Travis2k3@testxtechcloud.jyohkdi.mongodb.net/db?retryWrites=true&w=majority"
class Database {
    constructor(){

    }

    static connect() {
        mongoose.connect(DbServer)
        .then(() => console.log("Database connected"))
        .catch(err => console.log("Error connecting" + err.message))
    }
}


module.exports = Database;