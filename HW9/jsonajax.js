
$(document).ready(function () {
    $("button").click(function () {
        $("#pokeInfo").load("pokedex.json", function(responseText){
            var pokemon = JSON.parse(responseText);
            $("#pokeInfo").html("Name: " + pokemon.name 
        + "<br>Number:" + pokemon.num + "<br>Height:" + pokemon.height + "<br>Weight:" 
        + pokemon.weight + "<br>Type:" +
        pokemon.type[0] + "<br>" + pokemon.type[1]);
        });
    });
});
