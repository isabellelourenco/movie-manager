let mongoose = require('mongoose')

const server = '187.36.65.58'
const database = 'pipoca'

class Database {
    constructor() {
        this._connect()
    }

    _connect(){
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()