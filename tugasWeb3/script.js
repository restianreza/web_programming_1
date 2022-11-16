let listTeam = document.getElementById("list_team");

fetch("standing.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.standings[0].table)

    data.standings[0].table.forEach(team)

})
.catch(error => {
    // handle the error
    console.log(error)
});
function team(value, index) {
    listTeam.innerHTML += `<li>${value.team.name}</li>`
}