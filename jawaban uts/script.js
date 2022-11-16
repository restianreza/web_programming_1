let nama = document.getElementById("nama")
let email = document.getElementById("email")
let testimoni = document.getElementById("testimoni")
let listTestimoni = document.getElementById("listTestimoni")

storage = localStorage.getItem('lsTestimoni');

tampil()

function kirim() {
    console.log("Button kirim ditekan")
    data = { nama: nama.value, email: email.value, testimoni: testimoni.value }

    if (storage == null) {
        tampung = []
        tampung.push(data)
        localStorage.setItem('lsTestimoni', JSON.stringify(tampung))
    } else {
        tampung = JSON.parse(localStorage.getItem('lsTestimoni'))
        tampung.push(data)
        localStorage.setItem('lsTestimoni', JSON.stringify(tampung))
    }
    tampil()
}

function tampil(){
    listTestimoni.innerHTML = ""
    data = JSON.parse(storage)
    data.forEach(myFunction);
}

function myFunction(item, index) {
    console.log("Data ke-"+ index)
    listTestimoni.innerHTML += `<div class="col-lg-6 p-2">
    <div class="card  shadow" style="width: 100%;">
    <div class="card-body">
    <h5 class="card-title">${item.nama}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
    <p class="card-text">${item.testimoni}</p>
    </div>
    </div>
    </div>`
}