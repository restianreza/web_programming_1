let listUser = document.getElementById("listUser")

getUser();
fetch("https://gorest.co.in/public/v2/users/")
    .then(response => response.json())
    .then(data => console.log(data => {
        console.log(data)
        data.forEach(showUser)
    }))
    .catch(error => {
        console.log(error)
    });
    
    function showUser(value, index) {
        listUser.innerHTML += `<tr><td>${value.email}</td><td>${value.name}</td><td>${value.gender}</td><td>${value.status}</td><td><button class="btn-info" onclick="edituser(${value.id})">Edit</button><button class="btn btn-danger" onClick="deleteUser(${value.id})">Delete</button></td></tr>`
    }

    function deleteUser(id){
        console.log("hapus data id: "+id)
        fetch("https://gorest.co.in/public/v2/users/" + id, {
            
        }
    }