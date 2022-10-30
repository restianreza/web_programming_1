let txtNik = document.getElementById("nik")
let txtNama = document.getElementById("nama")
let txtAlamat = document.getElementById("alamat")
let tblPddk = document.getElementById("tblPenduduk")
//let listPddk = document.getElementById("listPenduduk")

let data = []

function simpan() {
    console.log("Tombol Simpan Ditekan")
    console.log(txtNik.value)
    console.log(txtNama.value)
    console.log(txtAlamat.value)

    if(localStorage.getItem("lsPenduduk")===null){
        data.push({
            "nik": txtNik.value,
            "nama": txtNama.value,
            "alamat": txtAlamat.value
        })
        localStorage.setItem("lsPenduduk", JSON.stringify(data));
    }else{
        let dataLs = JSON.parse(localStorage.getItem("lsPenduduk"))
        console.log(dataLs)
        dataLs.push({"nik" : txtNik.value, "nama" : txtNama.value, "alamat" : txtAlamat.value})
        localStorage.setItem("lsPenduduk" , JSON.stringify(dataLs))
    }
    tampil()
}

function tampil(){
    data.forEach(listData)
    tblPddk.innerHTML =" "
   // listPddk.innerHTML =" "
    let dataTampil = JSON.parse(localStorage.getItem("lsPenduduk"))
    dataTampil.forEach(listData)
}
function listData(item, index){

    tblPddk.innerHTML +=  `<tr><td>${item.nik}</td><td>${item.nama}</td><td>${item.alamat}</td></tr>`
}