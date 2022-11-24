let listUser = document.getElementById("listUser")
let email = document.getElementById("email")
let name = document.getElementById("name")
let gender = document.getElementById("gender")
let status = document.getElementById("status")
let alert = document.getElementById("alert")
let btnCreate = document.getElementById("btnCreate")

getUser()

function getUser() {
    fetch("https://gorest.co.in/public/v2/users/", {
        headers: {
            'Authorization': "Bearer 0517ffbd1a065d2c62b7ab999722bba2e4e17f80f10026134d1cfb04b04dfedf"
        }
    })


    .then(response => response.json())
        .then(data => {
            console.log(data)

            data.forEach(showUser)

            button.innerHTML = `<button class="btn btn-primary" onclick="createUser()">Simpan</button>`
        })
        .catch(error => {
            console.log(error)
        });
}

function showUser(value, index) {
    listUser.innerHTML += `<tr><td>${value.name}</td><td>${value.email}</td><td>${value.gender}</td><td>${value.status}</td><td><button class="btn btn-info" onclick="editUser(${value.id})">Edit</button><button class="btn btn-danger" onclick="deleteUser(${value.id})">Delete</button></td><tr>`
}

function deleteUser(id) {
    console.log("Hapus data id: " + id)
    fetch("https://gorest.co.in/public/v2/users/" + id, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer 0517ffbd1a065d2c62b7ab999722bba2e4e17f80f10026134d1cfb04b04dfedf"
            }
        })
        .then(response => {
            console.log(response)
            listUser.innerHTML = ""
            getUser()
        })
        .catch(error => {
            console.log(error)
        });
}

function createUser(statusSimpan = 0, id = 0) {
    if (statusSimpan == 0) {
        //simpan data
        console.log("Button simpan ditekan")
        fetch("https://gorest.co.in/public/v2/users/", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'Authorization': "Bearer 0517ffbd1a065d2c62b7ab999722bba2e4e17f80f10026134d1cfb04b04dfedf"
                },
                body: JSON.stringify({
                    "email": email.value,
                    "name": name.value,
                    "gender": gender.value,
                    "status": status.value
                })
            })
            .then(response => {
                response.json()
                console.log(response)
                if (response.status == 201) {
                    alert.innerHTML = `<div class="alert alert-success">User berhasil disimpan</div>`
                } else {
                    alert.innerHTML = `<div class="alert alert-danger">User gagal disimpan</div>`
                }
            })
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            });
    } else {
        // Ubah Data
        console.log("Button simpan ditekan")
        fetch("https://gorest.co.in/public/v2/users/" + id, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    'Authorization': "Bearer 0517ffbd1a065d2c62b7ab999722bba2e4e17f80f10026134d1cfb04b04dfedf"
                },
                body: JSON.stringify({
                    "email": email.value,
                    "name": name.value,
                    "gender": gender.value,
                    "status": status.value
                })
            })
            .then(response => {
                response.json()
                console.log(response)
                if (response.status == 201) {
                    alert.innerHTML = `<div class="alert alert-success">User berhasil disimpan</div>`
                } else {
                    alert.innerHTML = `<div class="alert alert-danger">User gagal disimpan</div>`
                }
            })
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            });

    }

}

function editUser(id) {
    console.log("Edit data id: " + id)
    fetch("https://gorest.co.in/public/v2/users/" + id)
        .then(response => response.json())
        .then(data => {
            console.log(data)
                //set value input email, name, gender, status
            email.value = data.email
            name.value = data.name
            gender.value = data.gender
            status.value = data.status
                // ubah teks "simpan" menjadi "ubah"
            btnCreate.innerHTML = "ubah"
                // ubah onClick dengan menambahkan parameter "1"
                //onClick = "create user(1)"
            btnCreate.setAttribute("onClick", "create user (1," + id + ")")

        })
        .catch(error => {
            console.log(error)
        });
}