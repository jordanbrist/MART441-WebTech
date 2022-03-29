
let pokemon = {

        "id": "1",
        "num": "001",
        "name": "Bulbasaur",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.71 m",
        "weight": "6.9 kg",
}


$(function () {
    $("button").click(function () {
        showPokeInfo();
    });
});

function showPokeInfo()
    {
        $("#pokeInfo").html("Number:" + pokemon.num + "<br>Name:" + pokemon.name + "<br>Type:" + pokemon.type[0] + "+" + pokemon.type[1] + "<br>Height:" + pokemon.height + "<br>Weight:" + pokemon.weight);
    }