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
let lishMhs = document.getElementById("listMahasiswa")
let tblMhs = document.getElementById("tblMahasiswa")

let data = []

function simpan() {
    console.log("Button simpan ditekan")
    console.log(txtNpm.value)
    console.log(txtNama.value)

    if(localStorage.getItem("lsMahasiswa")===null){
        data.push({
            "npm" : txtNpm.value,
            "nama" : txtNama.value}
        )
        localStorage.setItem("lsMahasiswa", JSON.stringify(data))
    } else {
        let dataLs = JSON.parse(localStorage.getItem("lsMahasiswa"))
        console.log(dataLs)
        dataLs.push({"npm" : txtNpm.value, "nama" : txtNama.value})
        localStorage.setItem("lsMahasiswa", JSON.stringify(dataLs))
    }

    tampil()
}

function tampil() {
    lishMhs.innerHTML = ""
    data.forEach(listData)
    let dataTampil = JSON.parse(localStorage.getItem("lsMahasiswa"))
    dataTampil.forEach(listData)
}

function listData(item, index) {
    lishMhs.innerHTML += "<li>" + item.npm + "-" + item.nama + "</li>"

    tblMhs.innerHTML += `<tr><td>${item.npm}</td><td>${item.nama}</td><tr>`
}