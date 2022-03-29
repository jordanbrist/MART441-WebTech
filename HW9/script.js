let pokemon = {

        "id": "1",
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
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
        $("#pokeInfo").html("Number:" + pokemon.num + "Name:" + pokemon.name + "Type:" + pokemon.type[0] + pokemon.type[1] + "Height:" + pokemon.height + "Weight:" + pokemon.weight);
    }