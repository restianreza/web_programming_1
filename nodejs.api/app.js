// (1) definisikan module, middleware
const express = require('express')
const app = express()
const momgoose = require('mongoose')
const bodyParser = require('body-parser')
const {
    default: mongoose
} = require('mongoose')
require('dotenv/config')

//(6) middleware body parser
app.use(bodyParser.urlencoded({
    extended: true
}))

//(7) import routes mahasiswa dll
const mahasiswaRoutes = require('./routes/mahasiswa')

//(8) daftarkan mahasiswaroutes ke express
app.use('/mahasiswa', mahasiswaRoutes)
app.use(bodyParser.json());

// (3) koneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection
//jika error
db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))
//jika sukses
db.once('open', () => {
    console.log('Database is connected')
})

//(2)listen port, dan buat callback dengan output console.log
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})