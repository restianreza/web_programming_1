// console.log("Serlamat pagi")

// //variabel
// let npm = 2125250038
// let nama = "Reza Dwi Restiyan"
// let arrayMahasiswa = ["Malik", "Alif"]
// let arrayDosen = Array ("Ahmad", "Ali")
// // object
// let mahasiswa = {npm : 2125250038, nama:"Reza", hobi:["ngoding", "Rebahan", "Makan"]}


// console.log(arrayMahasiswa[0])
// console.log(arrayDosen[1])
// console.log(mahasiswa.nama) // output Reza
// console.log(mahasiswa.hobi[0]) // output Ngoding

let txtNpm = document.getElementById("npm")
let txtNama = document.getElementById("nama")
let listMhs = document.getElementById("listMahasiswa")
let tblMhs = document.getElementById("tblMahasiswa")

let data = []
// panggil funtion tampil()
tampil()

function simpan() {
    console.log("Button Simpan Ditekan")

    console.log(txtNpm.value)
    console.log(txtNama.value)
    //simpan 


    //cek apakah ada data di local storagenya
    if (localStorage.getItem("lsMahasiswa") === null) {
        //jika localStorage dengan key lsMahasiswa belum ada
        data.push({
            "npm": txtNpm.value,
            "nama": txtNama.value
        })
        //simpan localStorage dengan Key lsMahasiswa 
        localStorage.setItem("lsMahasiswa", JSON.stringify(data))
    } else {
        //jika localStorage dengan key lsMahasiswa sudah ada/sudah disimpan

        //Ambil dulu localStorage dengan key lsMahasiswa
        let dataLs = JSON.parse(localStorage.getItem("lsMahasiswa"))
        console.log(dataLs)
        //push data baru ke dalam array
        dataLs.push({
            "npm": txtNpm.value,
            "nama": txtNama.value
        })
        //simpan data baru ke dalam locakStorage
        localStorage.setItem("lsMahasiswa", JSON.stringify(dataLs))

    }

}

function tampil() {
    // clear elemen listMahasiswa
    listMhs.innerHTML = ""
    //gunakan forEach
    data.forEach(listData)

    //ambil data local storage dengan key lsMahasiswa
    let dataTampil = JSON.parse(localStorage.getItem("lsMahasiswa"))
    dataTampil.forEach(listData)

}

function listData(item, index) {
    // innerHtml elemen table id = "listMahasiswa" pada index.html
    listMhs.innerHTML += "<li>" + item.npm + "-" + item.nama + "</li>"
    // innerHtml elemen table id = "tblMahasiswa" pada index.html
    tblMhs.innerHTML += `<tr><td>${item.npm}</td><td>${item.nama}</td><tr>`
}