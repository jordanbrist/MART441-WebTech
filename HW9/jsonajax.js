$(document).ready(function () {
            $("button").click(function () {
                $("#pokeInfo").load("data/pokedex.json", function(responseText){
                    var pokemon = JSON.parse(responseText);
                    $("#pokeInfo").html("Number:" + pokemon.num + "Name:" + pokemon.name + "Type:" 
                    + pokemon.type[0] + pokemon.type[1] + "Height:" + pokemon.height + "Weight:" + pokemon.weight);
                });
            });
        });