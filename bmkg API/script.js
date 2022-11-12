let spanJumlah = document.getElementById("jumlah_pokemon")
let listPokemon = document.getElementById("list_pokemon")
fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.count)
        console.log(data.results)

        spanJumlah.innerHTML = data.count
        data.results.forEach(showPokemon)

    })
    .catch(error => {
        // handle the error
        console.log(error)
    });
    function showPokemon(value, index) {
        listPokemon.innerHTML += `<li>${value.name}</li>`
    }