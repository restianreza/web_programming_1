// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const MahasiswaSchema = mongoose.Schema({
    //buat schema data
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema)