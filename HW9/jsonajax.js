$(document).ready(function () {
    $("button").click(function (event) {
        $.getJSON('pokedex.json', function (pokemon) {
            $('<tr/>').html('<td>' + pokemon.name + '</td>');
            $('<tr/>').append('<td>' + pokemon.num + '</td>');
            $('<tr/>').append('<td>' + pokemon.height + '</td>');
            $('<tr/>').append('<td>' + pokemon.weight + '</td>');
        });
    });
}); 
