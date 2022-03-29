
$(document).ready(function() {
    $("button").click(function(event) {
        $.getJSON('pokedex.json', function(pokemon) {
            $('#pokeInfo').html('<p> Name: ' + pokemon.name + '</p>');
            $('#pokeInfo').append('<p> Number : ' + pokemon.num + '</p>');
            $('#pokeInfo').append('<p> Height: ' + pokemon.height + '</p>');
            $('#pokeInfo').append('<p> Weight: ' + pokemon.weight + '</p>');
        });
    });
});

