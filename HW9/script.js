$(document).ready(function () {
    $("button").click(function () {
        $("#pokeInfo").load("pokedex.txt", function(responseText){
            var pokemon = JSON.parse(responseText);
            $("#pokeInfo").html("Number: " + pokemon.num 
        + "<br>Name:" + pokemon.name + "<br>Type:" + pokemon.type + "<br>Height:" 
        + pokemon.height + "<br>Weight:" + pokemon.weight);
        });
    });
});
