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
let data = []
/* data = [ {npm: 123, nama: "abc"},
            {npm:124, nama:"srf"}
        ]
*/

function simpan(){
    console.log("Button Simpan Ditekan")

    console.log(txtNpm.value)
     console.log(txtNama.value)
    //simpan 
    data.push({"npm" : txtNpm.value, "nama": txtNama.value})
    tampil ()
}
function tampil(){
    // clear elemen listMahasiswa
    listMhs.innerHTML = ""
    //gunakan forEach
    data.forEach(listData)
   
}

function listData(item, index){
    listMhs.innerHTML += "<li>"+item.npm+"-"+item.nama+"</li>"
}


