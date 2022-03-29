
$(document).ready(function() {
    $("#pokeInfo").click(function(event) {
        $.getJSON('pokedex.json', function(pokemon) {
            $('#display').html('<p> Name: ' + pokemon.name + '</p>');
            $('#display').append('<p> Number : ' + pokemon.num + '</p>');
            $('#display').append('<p> Height: ' + pokemon.height + '</p>');
            $('#display').append('<p> Weight: ' + pokemon.weight + '</p>');
        });
    });
});
